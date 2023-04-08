import React from "react";

import Image from "../assets/up1.png";

import { FaFacebook, FaLinkedin, FaWhatsapp,FaEnvelope } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh]  lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container  mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6}}
            className="text-[50px] font-bold leading-[0.8] lg:text-[80px]">
              UPFLOW <span>MARKETING</span>
            </motion.h1>
            <motion.div 
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7}}
            className="mb-6 text-[36px] lg:text-[50px] font-secondary  font-semibold p-0 uppercase leading-[1]">
              <span className="text-white  mr-0"></span>
              <TypeAnimation
                sequence={[
                  "Marketing ",
                  1000,
                  "Sua estrategia de Marketing em boas mãos",
                  1000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7}}
            className="mb-8 max-w-lg mx-auto lg:mx-0">
              A UpFlow tem sua trajetória marcada pelo espírito empreendedor de 
              seus diretores e pela dedicação de seus colaboradores, 
              fatores fundamentais que permitiram à empresa conquistar confiança e respeito 
              no seu segmento.
            </motion.p>
         
          <motion.div
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7}}
          className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
            <Link
            to="about"
            activeClass="active"
            smooth={true}            
            offset={0}
            className="cursor-pointer  flex items-center btn btn-sm justfy-center">          
            Saiba mais
          </Link>           
            {/* <a href="wqewqe" className="text-gradient btn-link">
              Contato
            </a> */}
                    
          </motion.div> 
            <motion.div
            variants={fadeIn('up', 0.7)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7}}
             className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="1">
              <FaFacebook />

              </a>
              <a href="1">
              <FaLinkedin />

              </a>
              <a href="1">
              <FaWhatsapp />

              </a>
              <a href="1">
              <FaEnvelope />

              </a>

            </motion.div>
          </div>
          <motion.div
          variants={fadeIn('down', 0.4)}
          initial='hidden'
          whileInView={'show'}          
           className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
