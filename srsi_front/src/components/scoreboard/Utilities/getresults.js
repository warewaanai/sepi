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
        console.log(results);

        if (county == 'general') 
            return results;
    
        //console.log(results);
        return {
            "head": results["head"],
            "body": results["body"].filter(result => result[0] == county)
            };
        });
}

export default getResults;