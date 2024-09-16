const memoize = require('./utility/memorize');
const axios = require('axios');

const fetchData = memoize(async(url)=>{
    const response = await axios.get(url);
    return response.data
})

const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function getPosts(){
    const posts = await fetchData(`${BASE_URL}/posts`);
    return posts
}

async function getPostById(id) {
    return fetchData(`${BASE_URL}/posts/${id}`);
}


module.exports = { getPosts, getPostById }