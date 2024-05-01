import React, { useEffect, useState } from "react";

export default function Opener() {
  const [see, setSee] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSee(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`${see ? "opacity-100 w-[100vw] h-[100vh] text-[4rem] md:text-[10rem]" : "opacity-0 transition-opacity w-[0vw] h-[0vh] text-[0rem] duration-2000"} bg-DARK flex justify-center items-center z-100 fixed`}>
      <div className=" font-serif text-DARK bg-gradient-to-r from-DARK via-LIGHT to-DARK w-[80%] text-center">
        Thomas Moloney
      </div>
    </div>
  );
}
