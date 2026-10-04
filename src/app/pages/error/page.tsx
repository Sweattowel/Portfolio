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
        errorMessage: "No error"
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
            setError("Unspecified error - page does not exist")
        }
    },[searchParams])

    return (
        <main>
            <LeftBar />
            <section className="md:ml-[15%] ml-[25%] p-2 h-full">
                <h1 className="text-2xl border-b">
                    Error...
                </h1>
                <p className="mt-2 mb-2">
                    {error ? error : "Failed to collect error"}
                </p>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2FZID94nHYqCYAAAAC%2Fsad-rat-crying-rat.gif&f=1&nofb=1&ipt=9dabf049c2e3b5ae11f8b910455f0a0701626293a875c47cfec29057985599cf&ipo=images" alt="Sad Rat" 
                    className="rounded-full m-auto h-full w-full m-2"
                />
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