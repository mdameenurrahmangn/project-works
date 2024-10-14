import { useEffect, useState } from "react"
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import Counter from "../Counter/Counter";

const Card = () => {

    console.log("Before UseEffect")

    const [isLoading,setIsLoading] = useState(true);// 1st render it checks true. It comes 2nd times it false
    const [data,setData] = useState([]);

    const [Counter,setCounter] = useState(0);

    // fetch Method or Axios

    useEffect(()=>{
        setCounter(Counter+1)
        fetchData() //          2nd render
    },[]);

    console.log("--->",Counter)

    const fetchData = async() => {
        try{
            setIsLoading(true);  // 2rd render it is true it executes and then reloads setter function
            const res = await  fetch("https://dummyjson.com/recipes");
            const data = await res.json();

            setData(data.recipes);

            console.log("1...",data)
            console.log("2...,",res)
        }
        catch(err)
        {
            console.log(err);
        }
        finally{
            setIsLoading(false);
        }
    }

    console.log("After UseEffect")

    if(isLoading) // true means if part render
    {
        return <ShimmerSimpleGallery card imageHeight={300} caption />
    }
    else // false means else part render this
    {
        return (
            <>
            <button onClick={()=>{
                setIsLoading(true);
            }}>
                call
            </button>
            <p>{JSON.stringify(data)}</p>
            </>
        )
    }
}

export default Card