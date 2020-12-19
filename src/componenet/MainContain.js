import React from 'react'
import Product_data from '../Product_data';

const MainContain = () => {
    console.log(Product_data);
    const listItems = Product_data.map((item)=>
    
        <div className ="card" key ={item.id}>
                <div className = "card_img">
                     <img src= {item.thumb}/>
                </div>
            <div className = "card_header">
                <h2>{item.product_Name}</h2>
                <p>{item.Product_Description}</p> 
                <p className ="Price">{item.Product_Price}<span>{item.Currency}</span></p>

                <div className = "btn" onclick ="window.open('https://www.flipkart.com/mrf-poplar-willow-junior-bat-size-3-cricket/p/itm0ab05e121e86b?pid=BATFVA9FYHADXZBM&lid=LSTBATFVA9FYHADXZBMYXUWXJ&marketplace=FLIPKART&srno=b_1_3&otracker=browse&fm=organic&iid=69a5882d-075c-4681-9c50-f07525ee8592.BATFVA9FYHADXZBM.SEARCH&ssid=d56lajobfk0000001608363270964')">Buy</div>
               
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