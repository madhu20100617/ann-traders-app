import React, { Component } from 'react'
import ProductService from '../services/ProductService'

 class UpdateProduct extends Component {

    constructor(props) {
    
      super(props)
      this.state = {
        productId : this.props.match.params.productId,
        productName :'',
        price :'',
        productType :'',
      
    }
      this.changeIdHandler = this.changeIdHandler.bind(this)  

      this.changeNameHandler = this.changeNameHandler.bind(this)
      this.changePriceHandler = this.changePriceHandler.bind(this)
      this.changeQuantityHandler = this.changeQuantityHandler.bind(this)
      this.update = this.update.bind(this)
      this.cancel = this.cancel.bind(this)
    }



    changeIdHandler(event) {
  this.setState({productId : event.target.value})

    } 

    changeNameHandler(event){
      this.setState({productName : event.target.value})
    }

    changePriceHandler(event){

      this.setState({price : event.target.value})
    }

    changeQuantityHandler(event){
      this.setState({productType : event.target.value})
    }
      
    componentDidMount(){
    
    ProductService.getProductsById(this.state.productId).then((res)=>
      {let product = res.data; 
         this.setState({productId: product.productId,
          productName :product.productName,
         price :product.price,
        productType :product.productType});
      
      }
    );
    }

    update =(e) =>{
    e.preventDefault()
   let product = {productId:this.state.productId,productName:this.state.productName,price:this.state.price,productType:this.state.productType}

  console.log(product)

  ProductService.updateProduct(product.productId, product);
  this.props.history.push("/");
  
  }

  cancel(){
    this.props.history.push("/");
  }
    
  render() {
    return (
      <div className='container'>
         <h1>Update Product Page </h1>

         <div className='row'>
         <div className='text-center'>

         <div class="card">
        <div class="card-body">
                        

        <form>
  <div class="form-group">
    <label for="productId">Product Id</label>
    <input type="text" className="form-control" id="productId"  placeholder="Enter Product Id"
    value ={this.state.productId} onChange ={this.changeIdHandler}
    />
   <label for="productName">Product Name</label>
   <input type="text" className="form-control" id="productName"  placeholder="Enter Product Name"
    value ={this.state.productName} onChange ={this.changeNameHandler}
    />
     <label for="price">Product Price</label>
     <input type="number" className="form-control" id="price"  placeholder="Enter Product Price"
    value ={this.state.price} onChange ={this.changePriceHandler}
    />
     <label for="productType">Product Type</label>
     <input type="text" className="form-control" id="productType"  placeholder="Enter Product Type"
    value ={this.state.productType} onChange ={this.changeQuantityHandler}
    />
    
  </div>
  
  <button className="btn btn-success" onClick ={this.update}>update</button>
  <button className="btn btn-danger" onClick ={this.cancel}>cancel</button>
</form>
        
        
        
        </div>
         </div>
          

         </div>
         </div>
      </div>
    )
  }
}

export default UpdateProduct

