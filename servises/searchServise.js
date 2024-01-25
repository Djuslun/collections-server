const Realm = require('realm-web');
const itemServise = require('./itemService');
const app = new Realm.App({ id: 'application-0-qkxcj' });
const cred = Realm.Credentials.anonymous();

const getSearchItems = async (query) => {
    const user = await app.logIn(cred);
    if (query) {
        try {
            const arrayOfQuerries = await Promise.all([
                user.functions.searchByIndex(query, 'collections'),
                user.functions.searchByIndex(query, 'items'),
                user.functions.searchByIndex(query, 'comments'),
            ]);

            const [searchCollections, searchItems, searchComments] = arrayOfQuerries;

            const searchItemsByCollectionPromise = await Promise.all(
                searchCollections.map((collection) =>
                    itemServise.getItemsInCollection(collection._id)
                )
            );
            const searchItemsByCollection = searchItemsByCollectionPromise.reduce(
                (acc, items) => acc.concat(items),
                []
            );

            const searchItemsByComments = await Promise.all(
                searchComments.map((comment) => itemServise.getItemById(comment.itemId))
            );

            return {
                inItems: searchItems.sort((a, b) => b.createdAt - a.createdAt),
                inCollection: searchItemsByCollection,
                inComments: searchItemsByComments,
            };
        } catch (e) {
            console.log(e.message);
        }
    } else {
        return {};
    }
};

module.exports = { getSearchItems };
