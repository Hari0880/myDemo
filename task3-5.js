
function fetchData(url) {
    return new Promise((resolve, reject) => {
      
      if (url.includes("error")) {
        reject("Error: The URL contains the word 'error'.");
      } else {
        resolve("Data fetched successfully.");
      }
    });
  }
  
 
  fetchData("https://example.com/data")
    .then((message) => {
      console.log(message); 
    })
    .catch((error) => {
      console.error(error); 
    });
  
  fetchData("https://example.com/error")
    .then((message) => {
      console.log(message); 
    })
    .catch((error) => {
      console.error(error); 
    });
  