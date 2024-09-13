import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import arqitel from "../assests/arqitel.mp4";
import ttr from "../assests/ttr.mp4";
import yir from "../assests/yir.mp4";
import yahoo from "../assests/yahoo.mp4";
import rainfall from "../assests/rainfall.mp4";

function Products() {
  var products = [
    {
      title: "TicTacToe",
      description:"Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players who take turns marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner." ,
     live: true,
      case: true,
      route: "TicTacToe",
    },
    {
      title: "Whack_A_Mole",
      description:
      "Whac-A-Mole is an arcade game. It was created in 1975 by the amusements manufacturer TOGO in Japan, where it was originally known as Mogura Taiji or Mogura Tataki. A typical Whac-A-Mole machine consists of a waist-level cabinet with a play area and display screen, and a large, soft mallet.",      live: true,
      case: true,
      route: "Whack_A_Mole",
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
      route: "yir",
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
      route: "yahoo",
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
      route: "rainfall",
    },
  ];
  const [pos, setPos] = useState(0);
  const mover=(val)=>{
    setPos(val*23);
  }
  return (
    <>
      <div className=" mt-32 relative ">
        {products.map((val, index) => (
          <Product count={index} val={val} mover={mover}  />
        ))}
        <div className="absolute top-0 w-full h-full pointer-events-none">
          <motion.div
            initial={{ y: pos, x: "-50%" }}
            animate={{ y: pos+`rem`}}
            className="window absolute w-[25rem] h-[23rem] left-[44%] overflow-hidden"
          >
            <motion.div animate={{y:-pos+`rem`}} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} className="w-full h-full"><video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={arqitel}
            ></video></motion.div>
            <motion.div animate={{y:-pos+`rem`}} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} className="w-full h-full "> <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={ttr}
            ></video></motion.div>
            <motion.div animate={{y:-pos+`rem`}} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} className="w-full h-full "> <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={yir}
            ></video></motion.div>
            <motion.div animate={{y:-pos+`rem`}} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} className="w-full h-full "> <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={yahoo}
            ></video></motion.div>
            <motion.div animate={{y:-pos+`rem`}} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} className="w-full h-full "><video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={rainfall}
            ></video></motion.div>

          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Products;
