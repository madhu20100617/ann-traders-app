import React, { Component } from 'react'
import ProductService from '../services/ProductService'

 class DeleteProduct extends Component {

    constructor(props) {
   super(props)
   this.state = {
productId: this.props.match.params.productId,
products :{}

   }

    this.cancel = this.cancel.bind(this);

    }


   componentDidMount(){
     ProductService.getProductsById(this.state.productId).then(
        
        response => {this.setState({products: response.data})}
        
        )
        ProductService.deleteProductById(this.state.productId);
    
    }

    cancel(){
        
        this.props.history.push('/')
    }

  render() {
    return (
      <div className='container'>
      <h1>Delete Product Page </h1>
      <h3>Below Product is Deleted From DB</h3>
       <div className='card'>
        <div className='card-body'>
         <div className='row'>
        <label>Product Id </label>
        <div >{this.state.products.productId}</div>
         </div>

         <div className='row'>
        <label>Product Name </label>
        <div >{this.state.products.productName}</div>
         </div>

         <div className='row'>
        <label>Product Price </label>
        <div >{this.state.products.price}</div>
         </div>

         <div className='row'>
        <label>Product ProductType </label>
        <div >{this.state.products.productType}</div>
         </div>
        
        
        
        </div>
        
        
        </div>
        <button className="btn btn-danger" onClick ={this.cancel}>cancel</button>

      </div>
    )
  }
}

export default DeleteProduct