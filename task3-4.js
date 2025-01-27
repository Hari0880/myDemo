
function fetchDataWithCallback(callback) {
    console.log("Fetching data...");
  
    
    setTimeout(() => {
     
      const isSuccess = Math.random() > 0.5;
  
      if (isSuccess) {
        
        const data = { id: 1, name: "Sample Data" };
        callback(null, data); 
      } else {
      
        const error = "Failed to fetch data.";
        callback(error, null); 
      }
    }, 2000); 
  }
  
 
  fetchDataWithCallback((error, data) => {
    if (error) {
      console.error("Error:", error); 
    } else {
      console.log("Success:", data);'' 
    }
  });
  