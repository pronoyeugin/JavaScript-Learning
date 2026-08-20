/*  ES6 - calling api from javascript  | fetch api */

const makeRequest  = async (url, config ) => {
    const res = await fetch (url, config);
    if (!res.ok){
        const message = `Error: ${res.status}`;
        throw new Error (message)
    }
    const data = await res.json();
    return data;
};

// const getData = () => {
//     makeRequest ("https://jsonplaceholder.typicode.com/posts")
//     .then ((res) => console.log(res))
//     .catch((error) => console.log(error));
// };

// getData();

// const sendData = () => {
//     makeRequest ("https://jsonplaceholder.typicode.com/posts",{
//             method : 'POST',
//             body : JSON.stringify ({
//             title: 'kun-fu',
//             body: 'panda',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then ((res) => console.log(res))
//     .catch((error) => console.log(error));
// };

// sendData();


// const updateData = () => {
//     makeRequest ("https://jsonplaceholder.typicode.com/posts/1",{
//             method : 'PUT',
//             body : JSON.stringify ({
//             id: '1',
//             title: 'kun-fu',
//             body: 'panda',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then ((res) => console.log(res))
//     .catch((error) => console.log(error));
// };

// updateData();

// const updateData = () => {
//     makeRequest ("https://jsonplaceholder.typicode.com/posts/1",{
//             method : 'PATCH',
//             body : JSON.stringify ({
            
//             title: 'kun-fuuuuuuuuuuuuuuu',
         
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then ((res) => console.log(res))
//     .catch((error) => console.log(error));
// };

// updateData();

const deleteData = () => {
    makeRequest ("https://jsonplaceholder.typicode.com/posts/1",{
            method : 'DELETE',
    })
    .then ((res) => console.log(res))
    .catch((error) => console.log(error));
};

deleteData();




