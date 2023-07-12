
const routerIndex = require('./route-index');
const routerUsers = require('./route-users');
const routerArticles = require('./route-articles');
const routerAPIs = require('./route-apis');

module.exports = {
    index: routerIndex,
    users: routerUsers,
    articles: routerArticles,
    apis: routerAPIs,
}
