import LeftBar from "./Global/LeftBar";

export default function Home() {
  return (
    <main>
      <LeftBar />
      <section
        className="md:ml-[15%] ml-[25%] h-[100vh] p-2 flex flex-col justify-between"
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
            className="text-center"
          >
            Hey! im a developer with a passion for all things computing, i started using computers at 8 years old and since then ive been hooked on the concept. ive had myself learn Programming in many languages, best practices, Cybersecurity, Networking, hardware and more! <br /> Please enjoy this display of my skills 
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
            className="text-center"
          >
            My experience with computing hasnt always been positive, ive had my fair share of lessons, from breaking my own parts, to getting my accounts stolen ive made my mistakes, though ive made a point of making those mistakes only once  
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
            className="text-center"
          >
            Contacting me is pretty easy!, try using one of the social media links at the left bar on the bottom left
          </p>
        </div>
        <div
          className="text-sm w-[25%] text-center"
        >
        <p>
          &#8592;&#8592;&#8592;&#8592;&#8592;&#8592;&#8592;&#8592;&#8592;&#8592;&#8592;
        </p>
        <p
          className=" border rounded-full"
        >
          Find my socials just here
        </p>
        </div>
      </section>
    </main>
  );
}
