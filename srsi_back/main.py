import functools
import json
import time
import os

from flask import Flask, request, Response, render_template, redirect
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # remove in Production

# member API
def is_safe_path(path, follow_symlinks=True):
    basedir = os.getcwd()
    if follow_symlinks:
        return os.path.realpath(path).startswith(basedir)
    return os.path.abspath(path).startswith(basedir)

@app.route('/api/list_members')
def list_members():
    res = {}
    for filename in os.listdir('./static/members'):
        if filename[0] != '.':
            with open("./static/members/" + filename + "/meta.json") as f:
                metadata = f.read()

                tdict = json.loads(metadata)
                res[filename] = tdict

            for extension in [".png", ".jpg", ".jpeg", ".gif"]:
                try:
                    open("./static/members/" + filename + "/avatar" + extension)
                    res[filename]["avatar"] = "/static/members/" + filename + "/avatar" + extension
                    break
                except:
                    res[filename]["avatar"] = 0

            res[filename] = json.dumps(res[filename])

    return res

@app.route('/api/round/<contest_name>')
def list_rounds(contest_name):
    path = './static/contests/' + contest_name + '.json'
    if not is_safe_path(path):
        return "forbidden", 403
    if not os.path.exists(path):
         return {}, 200
    with open(path) as f:
        table =  f.read()
        #print(table)
        return table, 200
    return res

@app.route('/api/content_member/<member>')
def content_member(member):
    path = "./static/members/" + member + "/content.jsx"
    if not is_safe_path(path):
        return "forbidden", 403
    try:
        with open(path) as f:
            return {"text": f.read()}, 200
    except:
        return "Not found", 404

@app.route('/api/meta_member/<member>')
def meta_member(member):
    path = "./static/members/" + member + "/meta.json"
    if not is_safe_path(path):
        return "forbidden", 403

    data = {}

    try: #get profile pic
        with open(path) as f:
            data = json.loads(f.read())
            for extension in [".png", ".jpg", ".jpeg", ".gif"]:
                try:
                    open("./static/members/" + member + "/avatar" + extension)
                    data["avatar"] = "/static/members/" + member + "/avatar" + extension
                    break
                except:
                    data["avatar"] = 0
    except:
        pass

    try: #get main pic
        with open(path) as f:
            data = json.loads(f.read())
            for extension in [".png", ".jpg", ".jpeg", ".gif"]:
                try:
                    open("./static/members/" + member + "/mainpic" + extension)
                    data["mainpic"] = "/static/members/" + member + "/mainpic" + extension
                    break
                except:
                    data["mainpic"] = 0
    except:
        pass

    return json.dumps(data), 200


@app.route('/api/list_announcements')
def list_announcements():
    res = {}
    for filename in os.listdir('./static/announcements'):
        if filename[0] != '.':
            with open("./static/announcements/" + filename + "/meta.json") as f:
                metadata = f.read()
                tdict = json.loads(metadata)
                if tdict["visible"] == False:
                    continue
                tdict["content"] = open("./static/announcements/" + filename + "/content.jsx").read()

                res[filename] = tdict

    return res


@app.route('/api/list_sponsors', methods=['GET'])
def get_sponsors():
    res = {}
    for filename in os.listdir('./static/sponsors'):
        if filename[0] != '.':
            with open("./static/sponsors/" + filename + "/meta.json") as f:
                metadata = f.read()

                tdict = json.loads(metadata)
                res[filename] = tdict

            for extension in [".png", ".jpg", ".jpeg", ".gif", ".svg"]:
                try:
                    open("./static/sponsors/" + filename + "/logo" + extension)
                    res[filename]["logo"] = "/static/sponsors/" + filename + "/logo" + extension
                    break
                except:
                    res[filename]["logo"] = 0

            res[filename] = json.dumps(res[filename])

    return res


@app.route('/api/results/<contest>/<level>', methods=['GET'])
def get_results(contest, level):
    path = './static/results/' + contest + '/' + level + '.json'
    if not is_safe_path(path):
        return "forbidden", 403
    if not os.path.exists(path):
         return {"head":[], "body":[[]]}, 200
    with open(path) as f:
        table =  f.read()
        #print(table)
        return table, 200


@app.route('/')
def index():
    return render_template('index.html', token="")

@app.errorhandler(404)
def not_found(e):
    return render_template('index.html', token="my flask token")
