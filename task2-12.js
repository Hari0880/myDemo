function createProfile({ name, email }) {
    return { name, email };
  }
  

  const user = {
    name: "hari",
    age: 22,
    email: "hari?@gmail.com",
    address: "khamma",
  };
  
  const profile = createProfile(user);
  
  console.log(profile);