import ReactDom from "react-dom"
import "./style.css"

import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import {ProductCardData} from "./api/ProductCardData";
import ProductCard from "./component/ProductCard/ProductCard";
import Counter from "./component/Counter/Counter";
import Comments from "./component/Comments/Comments";
import { v4 as uuidv4 } from 'uuid';


const Body = () => {
    return (
        <>
        <Header/>
            {
                ProductCardData.map((items,index) => {
                    return (
                        <ProductCard key={uuidv4()} product_imag={items.product_imag} brand={items.brand} title={items.title} price={items.price} />
                    )
                })
            }
        <Footer/>
        </>
    )
}


const location = ReactDom.createRoot(document.getElementById("location"))

location.render(<Comments/>,location)