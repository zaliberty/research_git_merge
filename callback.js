let userAsync, userSync, userFromPromise;
<<<<<<< HEAD
 console.log('Hola, Masha!: ', userSync);
=======
console.log('userSync before init: 980989080', userSync);
>>>>>>> b2de2fb7a7cfdbdeb5feeb04731564b601bd725c
/*
function getUserSync() {
    return {
        username: 'node',
        password: 'js'
    }
}
*/

//new test comment
//one more
///9809

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


















