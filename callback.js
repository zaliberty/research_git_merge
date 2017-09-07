let userAsync, userSync, userFromPromise;
console.log('userSync before init: ', userSync);
/*
function getUserSync() {
    return {
        username: 'node',
        password: 'js'
    }
}
*/

//new test comment

 userSync = getUserSync();
 console.log('userSync afer init: ', userSync);

function getUserFromCallbackFunction(done) {
    setTimeout(()=>{
        done('getUserFromCallbackFunction: ', {
            username: 'node',
            password: 'js'
        });
    }, 1000);
}

getUserFromCallbackFunction(console.log);

function getUserFromPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({
                username: 'node',
                password: 'js'
            })
        }, 2000);
    });
}

getUserFromPromise().then(user => {
    console.log('getted user from Promise: ', user);
});

// не работает, возможно версия node.js 7 не поддерживает ещё async/await
// установил версию 8, код всё равно не работает
// TODO: разобраться почему!
// ошибка в строке const user = await getUserAsync();
// async function getUserAsync() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             resolve({
//                 username: 'node',
//                 password: 'js'
//             });
//         }, 3000);
//     });
// }

// const user = await getUserAsync();
// console.log('user getted from Async/Await function: ', user);


















