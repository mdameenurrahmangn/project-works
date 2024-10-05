import ReactDom from "react-dom"
import "./style.css"

const ProductCardData = [
    {
        brand: "Pebble",
        title: "Wireless Keyboard & Mouse POP",
        price: "₹1,299"
    },
    {
        brand: "Pebble2",
        title: "Wireless Keyboard & Mouse POP",
        price: "₹1,299"
    },
    {
        brand: "Pebble3",
        title: "Wireless Keyboard & Mouse POP",
        price: "₹1,299"
    },
];

const headingTag = <h1 className="bg-orange-500">world</h1>

const HeroSection = () => {
    return (
        <>
            <div className="2xl:container mx-auto">
                <div className="w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-4">
                    <div className="h-[505] bg-red-800">Card-1</div>
                    <div className="h-[505] bg-green-800">Card-2</div>
                    <div className="h-[505] bg-blue-800">Card-3</div>
                    <div className="h-[505] bg-pink-400">Card-4</div>
                </div>
            </div>


        </>
    )
}

const NameCard = (props) => {

    console.log(props)
    return (
        <>
            <div className="bg-yellow-500">
                <img src="https://www.pebblecart.com/cdn/shop/files/Digit001PDP1.jpg?v=1706353533&width=1000._SL1500_.jpg"
                    alt=" Apple MacBook Air" className="h-56" />
                <div className="text-black">
                    <p>{props.brand}</p>

                    <p>{props.title}</p>
                    <p>{props.price}</p>
                    <button>Buy Now</button>
                </div>
            </div>
        </>
    )
}

const localbody = () => {
    return (
        <>

            {
                ProductCardData.map((items) => {
                    return (
                        <NameCard brand={items.brand} title={items.title} price={items.price} />
                    )
                })
            }
        </>
    )
}


const location = ReactDom.createRoot(document.getElementById("location"))

location.render(localbody(), location)