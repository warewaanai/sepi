import resultID from './resultid'
import fetchResults from './fetch'

const getResults = (contest, level, county, scoreIndex=1) => {
    
    /*if(window.sessionStorage.getItem(resultID(contest, level)) == null
    || window.sessionStorage.getItem(resultID(contest, level)).length == 0){
        fetchResults(contest, level);
    }

    const results = JSON.parse(window.sessionStorage.getItem(resultID(contest, level)));*/
    console.log(scoreIndex);
    return fetchResults(contest, level).then(
        results =>{
        let count = 0, lastScore = -1, before = 0;

        if (county == 'general') 
            return {
            "head": ["Index"].concat(results["head"]),
            "body": results["body"].map(
                result =>{
                    if(lastScore != result[result.length-scoreIndex])
                        before=count;
                    count+=1;
                    lastScore = result[result.length-scoreIndex];
                    return [before+1].concat(result);
                }
            )
            };
    
        //console.log(results);
        return {
            "head": ["Index"].concat(results["head"]),
            "body": results["body"].filter(result => result[0] == county).map(
                result =>{
                    if(lastScore != result[result.length-scoreIndex])
                        before=count;
                    count+=1;
                    lastScore = result[result.length-scoreIndex];
                    return [before+1].concat(result);
                }
            )
            };
        });
}

export default getResults;