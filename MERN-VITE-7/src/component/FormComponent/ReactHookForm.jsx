import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
    email: z.string().email(),
    password: z.string(),
});


const ReactHookForm = () => {


    const { register, handleSubmit ,formState: { errors }} = useForm({
        resolver: zodResolver(schema),
    })

    const SubmitFunction = (data) => {
        console.log(data)
    };


    return (
        <div>
            <p>React-Hook-Form</p>
            <form onSubmit={handleSubmit(SubmitFunction)}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email"
                        {...register("email")}
                    />
                    <p>{errors.email?.message && <p>{errors.email?.message}</p>}</p>
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password"
                        {...register("password")}
                    />
                    <p>{errors.password?.message && <p>{errors.password?.message}</p>}</p>
                </div>

                <button type="submit">Form Submit</button>
            </form>
        </div>
    )
}

export default ReactHookForm