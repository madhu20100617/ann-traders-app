import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductService from '../services/ProductService';


 class ListProducts extends Component {

  constructor(props) {
  super(props);
    this.state = {
       products :[]
    }

    this.addProduct = this.addProduct.bind(this);

  }
  
  componentDidMount(){
    
     ProductService.getProducts().then(response => {
   // console.log(response.data);
     this.setState({products: response.data});
   
     
     
    })
     
  }
  addProduct(){

    this.props.history.push('/addproduct');
    
  }
  view(productId){
    this.props.history.push(`/viewProduct/${productId}`);
  }
  delete(productId){
    this.props.history.push(`/deleteProduct/${productId}`);
  }
  update(productId){
    this.props.history.push(`/updateProduct/${productId}`);
  }
  
  render() {
    return (
     <div>
   <h1 className='text-center'>List Of Products</h1>
<button className='btn btn-primary' onClick={this.addProduct}>Add Product</button>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Product Id </th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Price</th>
      <th scope="col">Product Type</th>
    </tr>
  </thead>
  <tbody>
    {
       this.state.products.map(product => 
             <tr key ={product.productId}>
             <td>{product.productId}</td>
             <td>{product.productName}</td>
             <td>{product.price}</td>
             <td>{product.productType}</td>

            <td>
            <button className="btn btn-info" onClick ={()=>this.view(product.productId)}>View</button>
            <button className="btn btn-danger" onClick ={()=>this.delete(product.productId)}>Delete</button>
            <button className="btn btn-success" onClick ={()=>this.update(product.productId)}>Update</button>
            </td>
             </tr>
       
       )
    }
   
   
   
  </tbody>
</table>
   
     </div>
    )
  }
}

export default ListProducts

