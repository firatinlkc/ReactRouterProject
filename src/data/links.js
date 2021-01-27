import Home from '../components/Home/Home'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Products from '../components/product/Products'
import ProductDetail from '../components/product/ProductDetail'

const links = [
  { 
    link : '/' , 
    title: 'Home' , 
    component: Home, 
    isExact: true, 
    isLink: true
  },

  { 
    link : '/about' , 
    title: 'About' , 
    component: About, 
    isExact: false, 
    isLink: true
  },

  { 
    link : '/contact' , 
    title: 'Contact' , 
    component: Contact, 
    isExact: false, 
    isLink: true
  },
 
  { 
    link : '/tools/:dataID' , 
    title: 'Detail' , 
    component: ProductDetail, 
    isExact: false, 
    isLink: false
  },
  { 
    link : '/tools' , 
    title: 'Frontend Tools' , 
    component: Products, 
    isExact: false, 
    isLink: true
  },
]

export default links;