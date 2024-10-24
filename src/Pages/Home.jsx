import React from 'react'
import Navbar from '../Components/Navbar'
import CategoryMenu from '../Components/CategoryMenu'
import Cart from '../Components/Cart'
import FoodItems from '../Components/FoodItems'
import Footer from '../Components/Footer'

const Home = () => {
  return (
<>

<Navbar/>
<CategoryMenu/>
<FoodItems/>
<Cart/>
<Footer/>
</>  
)
}

export default Home