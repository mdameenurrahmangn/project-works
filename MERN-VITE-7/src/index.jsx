import ReactDom from "react-dom/client"
import "./style.css"

import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { ProductCardData } from "./api/ProductCardData";
import ProductCard from "./component/ProductCard/ProductCard";
import Counter from "./component/Counter/Counter";
import Comments from "./component/Comments/Comments";
import { v4 as uuidv4 } from 'uuid';
import HeroSection from "./component/HeroSection/HeroSection";
import Card from "./component/Card/Card";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import Price from "./component/Price/Price";
import FormComponent from "./component/FormComponent/FormComponent";
import ReactHookForm from "./component/FormComponent/ReactHookForm";



const Body = () => {
    return (
        <>
            {
                ProductCardData.map((items, index) => {
                    return (
                        <ProductCard key={uuidv4()} product_imag={items.product_imag} brand={items.brand} title={items.title} price={items.price} />
                    )
                })
            }
        </>
    )
}

const Offers = () => {
    return (
        <>
            <p>Offers page - Hi</p>
        </>
    )
}

const AppLayout = () => {
    return (
        <>
            <Header />

            <Outlet />

            <Footer />
        </>
    )
}

const Router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/Offers",
                element: <Offers />,
            },
            {
                path: "/Price",
                element: <Price />,
            },
        ],
        errorElement: <ErrorPage />
    },
    {
        path: "/Forms",
        element: <FormComponent />,
    },
    {
        path: "/Hook-forms",
        element: <ReactHookForm/>,
    }
])


const location = ReactDom.createRoot(document.getElementById("location"))

location.render(<RouterProvider router={Router}/>, location)