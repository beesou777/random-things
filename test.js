
const {getPosts, getPostById} = require('./memorization/index')

async function test() {
    console.time('fetching posts')
    await getPosts()
    console.timeEnd('fetching posts')

    console.time('fetching posts again')
    await getPosts()
    console.timeEnd('fetching posts again')

    console.time('fetching post 1')
    await getPostById(1)
    console.timeEnd('fetching post 1')

    console.time('fetching post 2')
    await getPostById(1)
    console.timeEnd('fetching post 2')
}

test()

// fetching posts: 1.501s
// fetching posts again: 0.025ms
// fetching post 1: 740.034ms
// fetching post 2: 0.021ms
