import './App.css';
import Card from './card';

import { useState } from 'react';

function App() {

  const [details,setdetails] = useState([
    {title:"dsfdfdazxffdnkkfv",
    price:"433",
    quantity:"22",
    size:"34",
    description:"dfsijndnchudfhucdhchbdbdbfhvsdksdfsdsdzZzzxzn,xmcnxxdnskjjndksjknjksjnsdkjk",
    imageUrl:"https://cdn.shopify.com/s/files/1/0466/9653/0085/products/CM-2252GREY_1.jpg?v=1647251972"
    },
    {title:"qjfjijnjkkkfv",
    price:"453",
    quantity:"27",
    size:"42",
    description:"dfsijndnchudfhewiwqedijweddwqekjjndksjknjksjnsdkjk",
    imageUrl:"https://cdn.shopify.com/s/files/1/0466/9653/0085/products/CM-2252WHITE_3.jpg?v=1647251972"
    },
    {title:"uujjijknkkfv",
    price:"983",
   quantity:"17",
    size:"44",
    description:"dfsijndnchuRREHYUWIQQEWjajssnsndnskjjndksjknjksjnsdkjk",
    imageUrl:"https://cdn.shopify.com/s/files/1/0466/9653/0085/products/CM-2253NAVY_1.jpg?v=1647252713"
    },
    {title:"wrewjffdnkkfv",
    price:"847",
   quantity:"02",
    size:"38",
    description:"dfsijndnchudfhucdhchbdbdE0IWKQWHEH784834nsndnskjjndksjknjksjnsdkjk",
    imageUrl:"https://cdn.shopify.com/s/files/1/0466/9653/0085/products/CM-2253WHITE_5.jpg?v=1647252722"
    },
    {title:"mjwenrffdnkkfv",
    price:"349",
 quantity:"03",
    size:"48",
    description:"dfsijndnchudfhuc,mcvnoQIJWkankjajssnsndnskjjndksjknjksjnsdkjk",
    imageUrl:"https://cdn.shopify.com/s/files/1/0466/9653/0085/products/CM-2256BROWN_1.jpg?v=1647254050"
    },
    {title:"pjfnewhrjkkfv",
    price:"798",
    
    quantity:"12",
    size:"32",
    description:"dfsijndnchudfhucdhchbdbdfdsjhdfdhjfhjshbdsdhnsndnskjjndksjknjksjnsdkjk",
    imageUrl:"https://cdn.shopify.com/s/files/1/0466/9653/0085/products/CM-2257GREY_1.jpg?v=1647254186"
    },
      ])
    
  return (
    <>
   
  
  <div className='main'>
      {
        details.map((e)=>(
          <Card img={e.imageUrl} title={e.title} price={e.price} description={e.description} quan={e.quantity} size={e.size}/>
        
        
          ))
        }
       
       </div>
  
    </>
    );
      }

export default App;
