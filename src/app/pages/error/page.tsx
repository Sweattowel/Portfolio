'use client'

import LeftBar from "@/app/Global/LeftBar";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const errorList = [
    {
        error: "NoSource",
        errorMessage: "No source available for this page"
    },
    {
        error: "Default",
        errorMessage: "test"
    }
]

function ErrorContent()
{

    const searchParams = useSearchParams();
    const [error, setError] = useState("");

    useEffect(() => {
        const errorName = searchParams.get("Error");

        const foundError = errorList.find((e) => e.error == errorName)?.errorMessage;

        if (foundError) {
            setError(foundError)
        } else {
            setError("Unspecified error")
        }
    },[searchParams])

    return (
        <main>
            <LeftBar />
            <section className="md:ml-[15%] ml-[25%] p-2">
                <h1>
                    Error...
                </h1>
                <p>
                    {error ? error : "Failed to collect error"}
                </p>
            </section>
        </main>
    )
}

export default function Error()
{
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <ErrorContent />
        </Suspense>
    )
}