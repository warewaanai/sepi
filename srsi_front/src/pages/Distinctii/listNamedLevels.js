const listNamedLevels = (reduced=false) => {
    let level = new Object();
    const roman = ["V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"]
    for(let i = 5; i<=12; i+=1)
        level[i.toString()] = "Clasa a " + roman[i-5] +"-a";
    return level;
}

export default listNamedLevels;