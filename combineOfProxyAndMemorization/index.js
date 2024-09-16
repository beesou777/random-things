const proxyHander = require('./utility/proxyHander');

const api = new Proxy({}, proxyHander);

module.exports = api