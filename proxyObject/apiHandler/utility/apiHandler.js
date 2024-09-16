const axios = require('axios');

const apiHandler = {
    /**
     * Handles getting data from the API and caching it.
     * @param {Object} target - The target object.
     * @param {string} props - The property name.
     * @returns {Promise} A promise that resolves to the gotten value.
     */
    get(target,props){
        if(!(props in target)){
            console.log(`Fetching ${props} data from API...`);
            const apiData = `https://jsonplaceholder.typicode.com/${props}`;
            target[props] = axios.get(apiData)
            .then((res => res.data[0]))
            .catch((err => console.log(err)))
        }
        return target[props]
    }
}

const apiProxy = new Proxy({},apiHandler)

module.exports = apiProxy