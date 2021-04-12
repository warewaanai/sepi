const listNamedLevels = (reduced=false) => {
    let level = new Object();
    const roman = ["V", "VI", "VII", "VIII", "IX", "X"]
    for(let i = 5; i<=10; i+=1)
        level[i.toString()] = "Clasa a " + roman[i-5] +"-a";
    level["11-12"] = "Clasele XI-XII"
    if(!reduced) {
        level["baraj1"] = "Baraj 1 Seniori";
        level["baraj2"] = "Baraj 2 Seniori";
        level["jbaraj"] = "Baraj Juniori"
    }
    return level;
}

export default listNamedLevels;