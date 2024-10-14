import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const data = useRouteError()
    console.log(data)

    return (
        <div>
            <p>Error Page</p>

            <p>{data.status}</p>
            <p>{data.statusText}</p>
        </div>
    )
}

export default ErrorPage