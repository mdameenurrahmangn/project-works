import { useState } from "react"

const Comments = () => {
    let speak = ""

    const [name, setName] = useState();
    const [message, setMessage] = useState();

    const [commenti,setCommenti] = useState([])
    return (
        <>
            <p>Reviews</p>

            <div>
            <label htmlFor="name">Name: </label>
            <input className="border-fuchsia-900" onChange={(e) => {
                console.log(e.target.value);

                setName(e.target.value);

                // setCommenti((items) => ({ ...items, name: e.target.value}))
            }} />
            </div>


            <div>
            <label htmlFor="message">Message: </label>
            <input className="border-fuchsia-900" onChange={(e) => {
                console.log(e.target.value);

                setMessage(e.target.value);

                // setCommenti((items) => ({ ...items, repost: e.target.value}))

            }} />
            </div>

            <button onClick={()=>{
                setCommenti((items)=>{
                    setCommenti([...items,{name: name,message: message}])
                })
                // setCommenti([{name: name,message: message}])  Direct value
            }}>Submit</button>


            <p>Name:{name}</p>
            <p>Message:{message}</p>
            <p>{JSON.stringify(commenti)}</p>
        </>
    )
}

export default Comments