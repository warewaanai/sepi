const listLevels = (type="OJI") => {
    let levels = [];
    if(type == "OJI" || type == "ONI")
     for(let i = 5; i<=12; i+=1)
        levels.push(i.toString());
    if(type == "ONI" || type == "Lot") levels.push("baraj");
    if(type == "ONI" || type == "Lot") levels.push("baraj juniori");
    return levels;
}

export default listLevels;