const listLevels = (reduced=false) => {
    let levels = [];
    for(let i = 5; i<=12; i+=1)
        levels.push(i.toString());
    if(!reduced) levels.push("baraj");
    if(!reduced) levels.push("baraj juniori");
    return levels;
}

export default listLevels;