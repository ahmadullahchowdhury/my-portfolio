import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const handleType = (count: number) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 mt-[-150px]">
        <div className="hero-content text-center">
          <img
            src="https://placeimg.com/260/400/arch"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="max-w-md">
            <h1
              className=" text-2xl"
              style={{
                paddingTop: "5rem",
                margin: "auto 0",
                fontWeight: "normal",
              }}
            >
              <div className="flex flex-col  lg:flex-row ">
                <p className="pr-2">Hi, My Name is </p>{" "}
                <p className="font-bold"> Ahmadullah Chowdhury</p>{" "}
              </div>
              <span style={{ color: "red", fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={["I am Web Developer", "Engineer", "Writer"]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={handleDone}
                  onType={handleType}
                />
              </span>
            </h1>
            {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
            <a
              className="btn btn-primary m-3"
              href="https://drive.google.com/file/d/1o8whZmo7a50_bAc3JNwSMvSqEAQMp-Fx/view?usp=share_link"
            >
              See my Resume{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid grid-cols-3" id="projects">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
              <a href="" className="badge badge-outline">
                Front-End
              </a>
              <a href="" className="badge badge-outline">
                Back-End
              </a>
              <a href="" className="badge badge-outline">
                Live-Site
              </a>
            </div>
            <button className="btn btn-info m-3">See Details</button>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
              <a href="" className="badge badge-outline">
                Front-End
              </a>
              <a href="" className="badge badge-outline">
                Back-End
              </a>
              <a href="" className="badge badge-outline">
                Live-Site
              </a>
            </div>
            <button className="btn btn-info m-3">See Details</button>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
              <a href="" className="badge badge-outline">
                Front-End
              </a>
              <a href="" className="badge badge-outline">
                Back-End
              </a>
              <a href="" className="badge badge-outline">
                Live-Site
              </a>
            </div>
            <button className="btn btn-info m-3">See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
