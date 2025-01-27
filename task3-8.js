
function fetchDataWithTimeout(timeoutDuration) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error("Operation timed out")); 
      }, timeoutDuration);
  
      
      setTimeout(() => {
        clearTimeout(timeout); 
        resolve("Data fetched successfully");
      }, 2000); 
    });
  }
  
  
  fetchDataWithTimeout(3000) 
    .then((data) => {
      console.log(data); 
    })
    .catch((error) => {
      console.error("Error:", error.message); 
    });
  
 
  fetchDataWithTimeout(1000) 
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error.message); 
    });
  