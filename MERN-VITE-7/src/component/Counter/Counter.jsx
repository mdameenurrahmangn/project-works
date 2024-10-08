import { useState } from "react"

const Counter = () => {

    let value = 10;// Normal Variable

    //Local state variable = useState()

    //In  useState() can use Int,Boolean,String,Array,Object


    let [val, SetValues] = useState(0)

    return (
        <>
            <p>Counter</p>

            <p>{val}</p>

            <button className="bg-blue-400 p-2 rounded-md" onClick={() => {
                //value = value+1  -------> We not use this type
                SetValues(val + 1)
                console.log("--->", val)
            }}>Add</button>

        </>
    )
}

export default Counter