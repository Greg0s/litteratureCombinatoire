// fetch("http://localhost/author")
//     .then((response) => {
//         if(!response.ok){ // Before parsing (i.e. decoding) the JSON data,
//                             // check for any errors.
//             // In case of an error, throw.
//             throw new Error("Something went wrong!");
//         }

//         return response['name']; // Parse the JSON data.
//     })
//     .then((data) => {
//             // This is where you handle what to do with the response.
//             document.querySelector("#firstLine").innerHTML = data;
//     })
//     .catch((error) => {
//             // This is where you handle errors.
//     });

// document.querySelector("#firstLine").innerHTML = 'yo';