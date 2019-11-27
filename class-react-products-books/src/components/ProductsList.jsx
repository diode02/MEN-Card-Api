import React, { Component } from 'react';

class ProductList extends Component {
    state = { showPrice: true }
    products = [
        {title:'web',price=400},
        {title:'web 2',price=0},
        {title:'web 3',price=1400}
    ]
    render() { 
        return ( <div>
            {this.products.map((p,index)=>{
            <h1>{p.title}</h1>
            })}
        </div> );
    }
}
import React, { Component } from 'react';


export default ProductList;