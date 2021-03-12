const listLevels = () => {
    let levels = [];
    for(let i = 5; i<=12; i+=1)
        levels.push(i.toString());
    levels.push("baraj");
    return levels;
}

export default listLevels;