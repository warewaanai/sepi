import resultID from './resultid'
import fetchResults from './fetch'

const getResults = (contest, level, county) => {
    
    /*if(window.sessionStorage.getItem(resultID(contest, level)) == null
    || window.sessionStorage.getItem(resultID(contest, level)).length == 0){
        fetchResults(contest, level);
    }

    const results = JSON.parse(window.sessionStorage.getItem(resultID(contest, level)));*/
    return fetchResults(contest, level).then(
        results =>{
        let count = 0;

        if (county == 'general') 
            return {
            "head": ["Index"].concat(results["head"]),
            "body": results["body"].map(result => [++count].concat(result))
            };
    
        //console.log(results);
        return {
            "head": ["Index"].concat(results["head"]),
            "body": results["body"].filter(result => result[0] == county).map(result => [++count].concat(result))
            };
        });
}

export default getResults;