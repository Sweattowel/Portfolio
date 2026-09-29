import Image from "next/image";
import LeftBar from "./Global/LeftBar";

export default function Home() {
  return (
    <main>
      <LeftBar />
      <section
        className="ml-[20%] h-[100vh] p-2 flex flex-col justify-between"
      >
        <div
          className="flex flex-col justify-evenly h-[30%] p-2"
        >
          <h1
            className="text-2xl font-bold border-b"
          >
            About me
          </h1>
          <p
            className="border text-center"
          >
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          </p>
        </div>
        <div
          className="flex flex-col justify-evenly h-[30%] p-2"
        >
          <h1
            className="text-2xl font-bold border-b"
          >
            My experience
          </h1>
          <p
            className="border text-center"
          >
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          </p>
        </div>
        <div
          className="flex flex-col justify-evenly h-[30%] p-2"
        >
          <h1
            className="text-2xl font-bold border-b"
          >
            Contact
          </h1>
          <p
            className="border text-center"
          >
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
          </p>
        </div>
        <p
          className="text-sm"
        >
        <p>&#8592;&#8592;&#8592;&#8592;&#8592;&#8592;&#8592;&#8592;&#8592;&#8592;&#8592;</p>
           Find my socials just here
        </p>
      </section>
    </main>
  );
}
