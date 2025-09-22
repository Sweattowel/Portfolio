import React from "react";
import { ExprCardPropsType } from "../Models";

export default function ExperienceCard({ Expr }: ExprCardPropsType)
{
    return (
        <li
            className="flex flex-col justify-center items-center text-center m-2 p-2"
        >
            <section
                className="w-full h-full flex justify-space-between"
            >
                <h2
                    className="w-full text-WHITE p-1 bg-HIGHLIGHT"
                >
                    {Expr.Title}
                </h2>
                <p
                    className="w-full flex justify-center items-center font-bold border-b"
                >
                    {Expr.DateStart.slice(0,10)} To {Expr.DateEnd.slice(0,10)}
                </p>
            </section>
            <p
                className="p-2 m-2 border-b"
            >
                {Expr.Desc}
            </p>
            <ul
                className="divide-y divide-dashed p-2 m-2"
            >
                {Expr.Highlights.map((highlight: string, index: number) => (
                    <li
                        key={index}
                        className="flex flex-col p-1"
                    >
                        -{highlight}-
                    </li>
                ))}
            </ul>

        </li>
    )
}