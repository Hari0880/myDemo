
function fetchUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Fetched user data.");
        resolve({ userId: 1, name: "John Doe" }); 
      }, 1000); 
    });
  }
  
  
  function fetchPosts(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Fetched posts for user ID ${userId}.`);
        resolve([
          { postId: 101, title: "First Post" },
          { postId: 102, title: "Second Post" },
        ]); 
      }, 1000); 
    });
  }
  
  
  function fetchComments(postId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Fetched comments for post ID ${postId}.`);
        resolve([
          { commentId: 201, text: "Great post!" },
          { commentId: 202, text: "Thanks for sharing!" },
        ]); 
      }, 1000); 
    });
  }
  
  
  fetchUser()
    .then((user) => {
      console.log("User:", user);
      return fetchPosts(user.userId); 
    })
    .then((posts) => {
      console.log("Posts:", posts);
     
      return fetchComments(posts[0].postId);
    })
    .then((comments) => {
      console.log("Comments:", comments);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  