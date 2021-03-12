import json

def process_line(raw_line: str):
    line = raw_line.split(',')
    contestant_id = line[0]
    county, level, _ = contestant_id.split('_')
    contestant_name = line[1]
    raw_scores = line[2:]
    scores = [float(raw_scores[i]) for i in range(0, len(raw_scores), 2)] 
    a = [county, level, contestant_id]
    a.extend(scores)
    return a

def process_head(raw_line: str):
    line = raw_line.split(',')
    raw_scores = line[2:]
    scores = [raw_scores[i] for i in range(0, len(raw_scores), 2)] 
    a = ["Judet", "Clasa", "ID"]
    a.extend(scores)
    return a

in_file = open("ranking.csv", "r")
out_filename = input("File name:")

lines = in_file.readlines()

table = {"head": process_head(lines[0])}
content = []
for line in lines[1:]:
    content.append(process_line(line))
content.sort(key= lambda entry: -entry[-1])
table["body"] = content

print(table)
with open(out_filename, "w") as out_file:
    json.dump(table, out_file)

'''
import json

def process_line(raw_line: str):
    line = raw_line.split(',')
    contestant_id = line[0]
    county, level, _ = contestant_id.split('_')
    contestant_name = line[1]
    raw_scores = line[2:]
    scores = [float(raw_scores[i]) for i in range(0, len(raw_scores), 2)] 
    a = [county, level, contestant_id]
    a.extend(scores)
    return a

def process_head(raw_line: str):
    line = raw_line.split(',')
    raw_scores = line[2:]
    scores = [raw_scores[i] for i in range(0, len(raw_scores), 2)] 
    a = ["Judet", "Clasa", "ID"]
    a.extend(scores)
    return a

in_file = open("ranking.csv", "r")
out_filename = input("File name:")

lines = in_file.readlines()

table = [process_head(lines[0])]
for line in lines[1:]:
    table.append(process_line(line))

print(table)
with open(out_filename, "w") as out_file:
    json.dump(table, out_file)
'''