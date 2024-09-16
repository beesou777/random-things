
const api = require('./index')

async function test() {
    console.time('Fetch posts');
    await api.get('https://jsonplaceholder.typicode.com/posts');
    console.timeEnd('Fetch posts'); // Time it takes for the first fetch

    console.time('Fetch posts again');
    await api.get('https://jsonplaceholder.typicode.com/posts');
    console.timeEnd('Fetch posts again'); // Should be much faster

}

test()

// Fetching get data from API...
// Fetch posts: 398.645ms
// Fetching get data from API...
// Fetch posts again: 0.169ms