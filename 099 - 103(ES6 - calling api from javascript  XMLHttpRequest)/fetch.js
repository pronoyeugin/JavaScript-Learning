// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery

// fetch() has replaced XMLHttpRequest
// fetch() - global method for making HTTP Request
// 2 ways to call - then, async await

// + fetch() is easy to use compare to XMLHttpRequest
// + fetch() returns a promise
// - returned promise can only handle network error
// - does not support all the older browser

console.clear();


// Getting a resource
fetch('https://jsonplaceholder.typicode.com/posts')
.then((res) => {
    if (!res.ok){
        const message = `Error: ${res.status}`;
        throw new Error(message);
    }
    return res.json();
})
.then((res) =>console.log(res))
.catch((error) => console.log(error));


//Creating a resource
fetch('https://jsonplaceholder.typicode.com/posts', {
    method : 'POST',
    body : JSON.stringify ({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((res) => {
    if (!res.ok){
        const message = `Error: ${res.status}`;
        throw new Error(message);
    }
    return res.json();
})
.then((res) =>console.log(res))
.catch((error) => console.log(error));


// Updating a resource
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method : 'PUT',
    body : JSON.stringify ({
        id: '1',
        title: 'kun-fu',
        body: 'panda',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((res) => {
    if (!res.ok){
        const message = `Error: ${res.status}`;
        throw new Error(message);
    }
    return res.json();
})
.then((res) =>console.log(res))
.catch((error) => console.log(error));


// Updating a resource
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method : 'PATCH',
    body : JSON.stringify ({
        
        title: 'kun-fu Pandaaaaaaaaaaa',
        
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((res) => {
    if (!res.ok){
        const message = `Error: ${res.status}`;
        throw new Error(message);
    }
    return res.json();
})
.then((res) =>console.log(res))
.catch((error) => console.log(error));


//Deleting a resource
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method : 'DELETE',
})
.then((res) => {
    if (!res.ok){
        const message = `Error: ${res.status}`;
        throw new Error(message);
    }
    return res.json();
})
.then((res) =>console.log(res))
.catch((error) => console.log(error));

