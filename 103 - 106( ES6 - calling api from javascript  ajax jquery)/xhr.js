console.clear();
console.log(window);


// event - onload, onerror 
// property - reponse, responseType, responeText, responseUrl ,  status, statusText
// function - open(), send (), setRequestHeader ()

// const makeRequest = (method, url, data) => {

//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);

//     xhr.setRequestHeader('Content-type', 'application/json');
//     xhr.onload = () => {
//         let data = xhr.response;
//         console.log(JSON.parse(data));
//     }
    
//     xhr.onerror = () => {
//         console.log('error is here');
//     }
//     xhr.send(JSON.stringify(data));

// }

const makeRequest = (method, url, data) => {

    return new Promise ((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = () => {
            let data = xhr.response;
            console.log(JSON.parse(data));
        }

        xhr.onerror = () => {
            console.log('error is here');
        }
        xhr.send(JSON.stringify(data));

    });

}

// const getData = () => {
//     makeRequest('Get', 'https://jsonplaceholder.typicode.com/posts');

// }

const getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
    .then((res) => console.log(res));
    
}

getData();


// const sendData = () => {
//     makeRequest('Post', 'https://jsonplaceholder.typicode.com/posts', {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     });
// }

// const updateData = () => {
//     makeRequest('Put', 'https://jsonplaceholder.typicode.com/posts/1', {
//         id: 1,
//         title: 'kun-foo',
//         body: 'panda',
//         userId: 1,
//     });
// }


// const updateSingleData = () => {
//     makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
//         title: 'This is change',
//     });
// }

// const deleteData = () => {
//     makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1', {
       
//     });
// }

// deleteData();


