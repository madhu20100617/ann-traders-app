import React, { Component } from 'react'
import ProductService from '../services/ProductService'

 class Product extends Component {

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
    
    }

    cancel(){
        
        this.props.history.push('/')
    }

  render() {
    return (
      <div className='container'>
      <h1>View Product Page </h1>
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
        <label>Product Type </label>
        <div >{this.state.products.productType}</div>
         </div>
        
        
        
        </div>
        
        
        </div>
        <button className="btn btn-danger" onClick ={this.cancel}>cancel</button>

      </div>
    )
  }
}

export default Product