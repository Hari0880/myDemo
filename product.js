function updateProductInfo(product) {
    
    const { id, name } = product; 
    return {
        ...product,         
        id,                 
        name,               
        discount: 10,       
        inStock: true      
    };
}


const product = { id: 101, name: 'Laptop', price: 1000, category: 'Electronics' };
const product1 = { id: 101, name: 'Laptop hp', price: 1000, category: 'Electronics' };

const updatedProduct = updateProductInfo(product);
console.log(updatedProduct);
