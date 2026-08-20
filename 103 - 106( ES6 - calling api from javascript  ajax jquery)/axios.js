// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
// axios is a js library
// it helps to make request from browser (plain js/Vue/React/Angular), node.js

// + very easy to use
// + it supports all modern browser includig IE
// + it returns promise
// + throws error brilliantly
// + No need to set header cause axios is intelligent


// axios(config)
// axios(url [, config])

// axios.get(url [, config])
// axios.post(url [, config])
// axios.put(url [, config])
// axios.patch(url [, config])
// axios.delete(url [, config])

// axios returns response object - data, status, statusText, headers, config

console.clear();

//get method 
// axios.get("https://jsonplaceholder.typicode.com/posts/")
// .then((res) => console.log(res.data))
// .catch((res) => console.log(error));


// //POST method 
// axios.post("https://jsonplaceholder.typicode.com/posts",{
//     method : "POST",
//     body :JSON.stringify({
//         title : "foo",
//         body : "bar",
//         userID : 1,
//     }),

// })
// .then((res) => console.log(res.data))
// .catch((res) => console.log(error));


// //PUT method 
// axios.put("https://jsonplaceholder.typicode.com/posts/1",{
//     method : "PUT",
//     body :JSON.stringify({
//         title : "foo foo",
//         body : "bar bar",
//         userID : 1,
//     }),

// })
// .then((res) => console.log(res.data))
// .catch((res) => console.log(error));


// //PATCH method 
// axios.patch("https://jsonplaceholder.typicode.com/posts/1",{

//     body :JSON.stringify({
//         body : "foo fooooooooooooooo",
//     }),

// })
// .then((res) => console.log(res.data))
// .catch((res) => console.log(error));


// //delete method 
// axios.delete("https://jsonplaceholder.typicode.com/posts/1")

// .then((res) => console.log(res.data))
// .catch((res) => console.log(error));




const makeRequest = async (config) => {

    return await  axios(config)

}

// const getData = () => {

//     makeRequest("https://jsonplaceholder.typicode.com/posts")

//     .then ((res) => console.log(res))
//     .catch ((error) => console.log(error));
// };

// getData();

// const createData = () => {

//     makeRequest({
//         url: "https://jsonplaceholder.typicode.com/posts",
//         method : "post",
//         data:JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1
//         }),
//     })

//     .then ((res) => console.log(res.data))
//     .catch ((error) => console.log(error));
// };

// createData();

// const updateData = () => {

//     makeRequest({
//         url: "https://jsonplaceholder.typicode.com/posts/1",
//         method : "put",
//         data:JSON.stringify({
//             id : 1,
//             title: 'foo ooo ',
//             body: 'bar',
//             userId: 1
//         }),
//     })

//     .then ((res) => console.log(res.data))
//     .catch ((error) => console.log(error));
// };

// updateData();


const deleteData = () => {

    makeRequest({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method : "delete",
        
    })

    .then ((res) => console.log(res.data))
    .catch ((error) => console.log(error));
};

deleteData();