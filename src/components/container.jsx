import { React, useState } from 'react'
import './container.css'
import Button from './counter'
import Cart from '../images/icon-cart.svg';



export default function App() {



  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(count + 0)
    }
  };


  return (
    <div className='container'>
      <div className='image-sec'>
        <img src={require('..//images/image-product-1.jpg')} alt='' className='product_1' />
        <div className='image_thumb'>
          <img src={require('../images/image-product-1-thumbnail.jpg')} alt='' className='thum_product' />
          <img src={require('../images/image-product-2-thumbnail.jpg')} alt='' className='thum_product'  />
          <img src={require('../images/image-product-3-thumbnail.jpg')} alt='' className='thum_product'  />
          <img src={require('../images/image-product-4-thumbnail.jpg')} alt='' className='thum_product'  />
        </div>
      </div>


      <div className='main'>
        <h2>SNEAKER COMPANY</h2>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <div className='price-detail'>
          <h3>$125.00</h3>
          <p>50%</p>
        </div>
        <p className='below_p'>$250</p>
        <div className="counter">

          <div class="buttons">
            <Button title={'-'} action={decrementCount}  />
            <p>{count}</p>
            <Button title={'+'} action={incrementCount}  />
          </div>
         <div className='add_cart_btn'>
          <img src={Cart} style={{'height':'20px' ,'color':'white'}} />
          <h3>Add to Cart</h3>
         </div> 

        </div>

      </div>
    </div>



  )

}
