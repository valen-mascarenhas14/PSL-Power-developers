import React, { Component } from "react";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <FadeIn delay={10}>
        <div className="bg-bluenew py-6">
          <div className="container mx-auto ">
            <div className="grid grid-cols-3">
              <div className="mx-auto py-4">
                <div className="flex flex-col mx-auto ">
                  <Link to="/">
                    <div className="flex flex-row">
                      <img
                        src={require("../assets/anti-logo.jpg")}
                        alt="flood"
                        className="w-12 my-4 mx-2"
                      />
                      <span className="my-auto  text-2xl font-semibold font-inter text-white tracking-wider">
                        Flood Guard
                      </span>
                    </div>
                  </Link>
                  <Link to="/dashboard">
                    <p className=" text-lg leading-loose font-medium tracking-wide text-white font-inter ">
                      Dashboard
                    </p>
                  </Link>
                  <Link to="/helpline">
                    <p className=" text-lg leading-loose font-medium tracking-wide text-white font-inter">
                      Helpline Numbers
                    </p>
                  </Link>
                </div>
              </div>
              <div className="mx-auto py-4">
                <div className="flex flex-col mx-auto">
                  <p className="my-6 text-2xl text-white font-inter tracking-wider font-semibold text-center">
                    Made By
                  </p>
                  <p className="text-lg leading-loose font-medium tracking-wide text-white font-inter  text-center">
                    Amitkumar Ghatwal
                  </p>
                  <p className="text-lg leading-loose font-medium tracking-wide text-white font-inter  text-center">
                    Md.afsan Hossain
                  </p>
                  <p className="text-lg leading-loose font-medium tracking-wide text-white font-inter  text-center">
                    Sachin Itagi
                  </p>
                  <p className="text-lg leading-loose font-medium tracking-wide text-white font-inter  text-center">
                    Anup Kodlekere
                  </p>
                  <p className="text-lg leading-loose font-medium tracking-wide text-white font-inter  text-center">
                    Valen Mascarenhas
                  </p>
                </div>
              </div>
              <div className="mx-auto py-4">
                <p className="my-6 text-2xl text-white font-inter font-semibold text-center ">
                  Meet Us at
                </p>
                <div className="mx-auto">
                  <iframe
                    className="my-4"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.1969696817423!2d73.93056387467199!3d15.365815285216335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb75289b5ef5f%3A0x725d94b34ab864f5!2sPersistent%20Systems%20Ltd.!5e0!3m2!1sen!2sin!4v1729749497209!5m2!1sen!2sin"
                    width="450"
                    height={200}
                    loading="lazy"
                    title="map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-darkblue mx-auto">
          <p className="font-roboto text-white text-sm py-4 font-regular text-center">
            &copy; 2024 Flood Guard. All rights reserved.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

export default Footer;
