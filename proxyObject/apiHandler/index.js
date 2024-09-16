const apiProxy = require('./utility/apiHandler');

apiProxy.users
    .then((data) => {
        console.log(`Users:`, data)
    })
    .catch((error) => {
        console.error(error)
    })

apiProxy.posts
    .then((data) => {
        console.log(`Posts:`, data)
    })
    .catch((error) => {
        console.error(error)
    })


setTimeout(() => {
    apiProxy.users
        .then((data) => {
            console.log(`Address:`, data.address)
        })
        .catch((error) => {
            console.error(error)
        })
}, 2000)
