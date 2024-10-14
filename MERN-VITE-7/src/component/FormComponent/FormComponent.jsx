import { useState } from "react"

const FormComponent = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const HandleSubmit = () => {
        console.log("handle submitted")

        console.log(email)
        console.log(password)
    };


    return (
        <div>
            <p>Forms Component</p>
            <form onSubmit={HandleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                </div>

                <button type="submit">Form Submit</button>
            </form>
        </div>
    )
}

export default FormComponent