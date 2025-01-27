
function createPromise(value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value); 
      }, 1000); 
    });
  }
  
  
  createPromise(5)
    .then((value1) => {
      console.log("First value:", value1); 
      return createPromise(10).then((value2) => value1 + value2); 
    })
    .then((sum1) => {
      console.log("Sum after second promise:", sum1); 
      return createPromise(15).then((value3) => sum1 + value3); 
    })
    .then((totalSum) => {
      console.log("Total Sum:", totalSum); 
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  