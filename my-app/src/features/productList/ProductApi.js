export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    
    const response = await fetch('http://localhost:8080/products') 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchSelectedProduct(id) {
  return new Promise(async (resolve) =>{
    
    const response = await fetch(`http://localhost:8080/products/${id}`) 
    const data = await response.json()
    resolve({data})
  }
  );
}
export function fetchProductsByFilters(filter) {

  let queryString = '';
  for(let key in filter){
    queryString += `${key}=${filter[key]}&`
  }

  return new Promise(async (resolve) =>{
  
    const response = await fetch('http://localhost:8080/products?'+queryString) 
    const data = await response.json()
    resolve({data})
  }
  );
}



export function fetchCategories() {
  return new Promise(async (resolve) =>{
  
    const response = await fetch('http://localhost:8080/categories') 
    const data = await response.json()
    resolve({data})
  }
  );
}
export function fetchBrands() {
  return new Promise(async (resolve) =>{
  
    const response = await fetch('http://localhost:8080/brands') 
    const data = await response.json()
    resolve({data})
  }
  );
}