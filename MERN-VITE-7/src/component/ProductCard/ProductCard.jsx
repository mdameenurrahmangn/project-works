const ProductCard = (props) => {

    console.log(props)
    return (
        <>
            <div className="bg-yellow-500">
                <img src={props.product_imag}
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

export default ProductCard