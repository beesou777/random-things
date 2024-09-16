const memoize = require('../../memorization/utility/memorize');
const axios = require('axios');
const fetchData = memoize(async url => (await axios.get(url)).data);

const proxyHander = { get: (target, props) => props in target ? target[props] : (...args) => (console.log(`Fetching ${props} data from API...`), fetchData(...args)) };

module.exports = proxyHander;
