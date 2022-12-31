import react from "react";
import Fade from "react-reveal/Fade";
import Typed from "react-typed";

export default function Hero() {
  return (
    <div
      className="relative overflow-hidden bg-no-repeat bg-cover h-[100vh]"
      style={{
        backgroundPosition: "top",

        backgroundImage: `url("assets/images/hero-banner-sm.jpg")`,
      }}
    >
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style={{
          backgroundColor: " rgba(0, 0, 0, 0.45)",
        }}
      >
        <Fade bottom cascade>
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-3 md:px-12">
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight md:mb-12 capitalize mb-3">
                Unlock{" "}
                <Typed
                  strings={["the power of learning", "your full potential"]}
                  typeSpeed={110}
                  loop
                  className="text-green-400 font-bold"
                />
                <br />
                <span>From Expert Instructors.</span>
              </h1>
              <button
                type="button"
                className="inline-block px-7  py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-gray-800 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Get started
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
