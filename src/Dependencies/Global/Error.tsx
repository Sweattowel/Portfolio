import React from "react";
import { ErrorCodeType } from "../../Models/Elements";

export default function Error({ ErrorCode, ErrorMessage }: ErrorCodeType)
{
    return (
        <section
            className="RoutePage"
        >
            <h1
                className="highlight text-2xl"
            >
                {ErrorCode}
            </h1>
            <p>
                {ErrorMessage}
            </p>
        </section>
    )
};