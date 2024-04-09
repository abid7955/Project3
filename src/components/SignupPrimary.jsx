import React from "react";
import signup1 from "../assets/signup1.png";
import signup2 from "../assets/signup2.png";
import signup3 from "../assets/signup3.png";
function SignupPrimary() {
  return (
    <section id="pricing">
      <article class="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
        <div class="flex items-start sm:gap-8">
          <div
            class="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center"
            aria-hidden="true"
          >
            <div class="flex items-center gap-1">
            <img
                    class="w-16 h-16"
                    viewBox="0 0 40 40"
                    src={signup1}
                    alt=""
                  />
            </div>
          </div>

          <div>
            <h3 class="mt-4 text-3xl font-bold sm:text-4xl">
              {" "}
              I am a tech professional and want to become an interviewer{" "}
            </h3>

            <p class="mt-1 text-xl text-gray-700">
              I want to take interviews and money.
            </p>
          </div>
        </div>
      </article>

      <br></br>
      <br></br>

      <article class="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
        <div class="flex items-start sm:gap-8">
          <div
            class="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center"
            aria-hidden="true"
          >
            <div class="flex items-center gap-1">
            <img
                    class="w-16 h-16"
                    viewBox="0 0 40 40"
                    src={signup2}
                    alt=""
                  />
            </div>
          </div>

          <div>
            <h3 class="mt-4 text-3xl font-bold sm:text-4xl">
              {" "}
              I am an organisation and want to outsource my interviews{" "}
            </h3>

            <p class="mt-1 text-xl text-gray-700">
            As an organisation I want to explore your hiring solutions and get my candidates interviewed
            </p>
          </div>
        </div>
      </article>

        <br></br>
        <br></br>
        
      <article class="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
        <div class="flex items-start sm:gap-8">
          <div
            class="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center"
            aria-hidden="true"
          >
            <div class="flex items-center gap-1">
            <img
                    class="w-16 h-16"
                    viewBox="0 0 40 40"
                    src={signup3}
                    alt=""
                  />
            </div>
          </div>

          <div>
            <h3 class="mt-4 text-3xl font-bold sm:text-4xl">
              {" "}
              I am a candidate and want to give interviews to big companies{" "}
            </h3>

            <p class="mt-1 text-xl text-gray-700">
            I want real interview experience with industry experts
            </p>
          </div>
        </div>
      </article>

    </section>
  );
}
export default SignupPrimary;
