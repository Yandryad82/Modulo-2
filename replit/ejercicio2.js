const store = () => {
    // let products = [];
  
    const obj = {
      products: [],
      addProduct(product){
        this.products.push(product);
      },
      removeProduct(product){
        // const index = products.indexOf(product)
        // products.splice(index, 1)
        this.products = this.products.filter((p) => {
          console.log(this.products)
          return p !== product
        })
      },
      listProducts(){
        return this.products;
      }
    }
    
    return obj;  
  }

  console.log(store())