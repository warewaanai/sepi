const listLevels = () => {
    var levels = [];
    for(var i = 5; i<=12; i+=1)
        levels.push(i);
    levels.push("baraj");
    return levels;
}

export default listLevels;