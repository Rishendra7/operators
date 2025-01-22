// console.log(10);
// console.log(20);
// console.log(30);
// setTimeout(() => {
//     console.lOg(40);
// }, 4000);
// console.log(50);
// console.log(60);


//Promise
// let p1 = new Promise((resolve , reject) => {});
// console.log(p1);

// let p2 = new Promise((resolve , reject) => {
//     resolve('Success');
// });
// console.log(p2);
// p2.then((response) => {
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// }).finally(() =>
//     console.log('finally prinitng for both success and failure'))

// let p3 = new Promise((resolve , reject) => {
//     reject('Failed');
// });
// console.log(p3);
// p3.then((response) => {
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// }).finally(() =>
//     console.log('finally prinitng for both success and failure'))


function fetchUsers(){
    let x = fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(x);
    x.then((response) => {
        // console.log(response);
        // console.log(response.json());
        return response.json().then((data) => {
            // console.log(data);
            let store = document.getElementById('store');
            data.map((user) => {
                store.innerHTML += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.company.name}</td>
                    <td>${user.username}</td>
                </tr>    
                    `
            })
        })
    })
    .catch((error) => {
        console.log(error);
    })
}
fetchUsers();