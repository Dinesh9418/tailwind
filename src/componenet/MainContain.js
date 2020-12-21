import React from 'react'
import Product_data from '../Product_data';
import "tailwindcss/tailwind.css";


const MainContain = () => {
    console.log(Product_data);
    const listItems = Product_data.map((item)=>
    
         <div className ="grid gap-4 grid-cols-3" key ={item.id}>
                <div className = "card_img">
                     <img src= {item.thumb}/>
                
                <div className = "card_header">
                <h2>{item.product_Name}</h2>
                <p>{item.Product_Description}</p> 
                <p className ="Price">{item.Product_Price}<span>{item.Currency}</span></p>
                </div>
               </div> 
    
    </div>
         );
    return(
        <div className ="main_content">
            <h3></h3>
        {listItems}</div>
    )
}

export default MainContain ;