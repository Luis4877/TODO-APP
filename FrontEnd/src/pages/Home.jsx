import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <section>
          <section className="sticky">
            <div className="max-w-lg px-4 sm:pt-24 pt-12 sm:pb-8 mx-auto text-left md:max-w-none md:text-center">
              <div className="text-center py-4 hidden sm:block"></div>

              <h1 className="font-extrabold leading-10 tracking-tight text-left text-[#201515] text-center sm:leading-none text-5xl sm:text-8xl">
                <span className="inline md:block">Organiza tu trabajo </span>
                <span className="relative mt-2 bg-clip-text text-[#201515] md:inline-block">
                  y tú día rapidamente
                </span>
              </h1>
            </div>

            <div className="max-w-lg px-4 pb-1 mx-auto text-left md:max-w-none md:text-center">
              <div className="text-center py-3 space-x-3">
                <button className="backdrop-blur-sm transition duration-500 ease-in-out bg-white border border-[#E2E8F0] translate-y-1 text-[#16161d] hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center">
                  <Link to="/login">Empecemos</Link>
                </button>
              </div>
            </div>
          </section>
        </section>

        <div className="text-left">
          <div className="sm:px-28">
            <section className="relative flex items-center w-full">
              <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
                <div className="relative flex-col items-start m-auto align-top">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                    <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                      <div className="max-w-xl text-center lg:text-left">
                        <div>
                          <p className="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl">
                            Pequeños habitos, grandes cambios.
                          </p>
                          <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                            Esta es una aplicacion para empezar a tomar el
                            control, organizarte y concentrarte con pequeñas
                            acciones pero muy poderosas.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                      <img
                        className="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto "
                        alt="hero"
                        src="https://i.imgur.com/RfknEl8.gif"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-32" />

          <section></section>
        </div>
      </div>
    </>
  );
}

export default Home;
