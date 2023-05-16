import React from "react";
import Mkt from "../assets/1.png";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";


const Service = () => {
  return (
    <section id="service" className="section mt-[600px]">
    <div  className="container  mx-auto">
      <div className="flex-1 text-center font-secondary lg:text-left">
        {" "}
        <motion.span
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.5}}
          className="text-[50px] font-bold leading-[0.8] lg:text-[80px] text-accent"
          >SERVIÇOS</motion.span>
       
        <div className="grid m-8 lg:grid-cols-4 gap-6 md:grid-cols-2 grid-cols-1">
          <motion.div
            className="grid justify-items-center"
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }} >
            <img
              class="rounded-full h-[120px] w-[120px] "
              src={Mkt}
              alt=""/>
              <div className="grid justify-items-center">
            <p
            className="mb-0 pt-5 text-[36px] lg:text-[21px] font-secondary text-center font-semibold p-0 uppercase leading-[1]"
              
              wrapper="span"
              repeat={Infinity}
              >
              Marketing nas redes sociais
            </p>
            <p className="text-center">
              O Marketing envolve a promoção de sua marca nos canais sociais, a
              fim de aumentar o reconhecimento da marca, direcionar o tráfego
              para seu site e gerar leads. Para isso, você pode criar posts em
              canais populares das redes sociais
            </p>
              </div>
          </motion.div>
          <motion.div
            className="grid text-center  justify-items-center"
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
          >
            <img
              class="rounded-full h-[120px] w-[120px] "
              src={Mkt}
              alt=""
              />
              <div className="grid justify-items-center">
            <p className="mb-0 pt-5 text-[36px] lg:text-[21px] font-secondary  font-semibold p-0 uppercase leading-[1]">
              SEO <br />
              (otimização para motores de busca)
            </p>
            <p>
              SEO (Search Engine Optimization) ou otimização para mecanismos de
              busca. São as ações que contribuem para melhorar o potencial de
              rankeamento de suas páginas e conteúdos, ajudando você a cumprir
              os principais pré-requisitos exigidos pelas plataformas de
              pesquisa.
            </p>
            </div>
          </motion.div>
          <motion.div
            className="grid text-center justify-items-center"
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
          >
            <img
              class="rounded-full h-[120px] w-[120px] "
              src={Mkt}
              alt=""
              />
            <div className="grid justify-items-center">

            <p className="mb-0 pt-5 text-[36px] lg:text-[21px] font-secondary  font-semibold p-0 uppercase leading-[1]">
              Publicidade nativa
            </p>
            <p>
              O objetivo da publicidade nativa é fazer com que os usuários
              cliquem no conteúdo que os levará à página da sua empresa. Se o
              conteúdo comercial anunciado for discreto e altamente relevante
              para o material em questão, os usuários podem ter mais interesse
              ​​em clicar.
            </p>
            </div>
          </motion.div>
          <motion.div
            className="grid text-center justify-items-center"
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
          >
            <img
              class="rounded-full h-[120px] w-[120px] "
              src={Mkt}
              alt=""
              />
              <div className="grid justify-items-center">

            <p className="mb-0 pt-5 text-[36px] lg:text-[21px] font-secondary font-semibold p-0 uppercase leading-[1]">
              Tráfego Orgânico/Pago
            </p>
            <p className="place-self-auto">
              Trafego Orgânico/Pago é a maneira que o cliente chega até você,
              com o trafego pago você leva a sua empresa até ele, com o orgânico
              você faz o cliente chegar até você, através de uma publicação, um
              histories e assim por diante.
            </p>
              </div>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Service;
