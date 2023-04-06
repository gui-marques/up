import React from "react";
import Mkt from "../assets/1.png";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";


const Service = () => {
  return (
    <nav id="service" className="min-h-[85vh] mt-20 lg:min-h-[78vh] flex items-center">
      <div className="container   mx-auto">
        {" "}
        <p className="h2 text-accent pt-6 pb-10">Serviços</p>
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
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
              className="mb-6 pt-6 text-[36px] lg:text-[21px] font-secondary  font-semibold p-0 uppercase leading-[1]"
              
              wrapper="span"
              repeat={Infinity}
              >
              Marketing nas redes sociais
            </p>
            <p>
              O Marketing envolve a promoção de sua marca nos canais sociais, a
              fim de aumentar o reconhecimento da marca, direcionar o tráfego
              para seu site e gerar leads. Para isso, você pode criar posts em
              canais populares das redes sociais
            </p>
              </div>
          </motion.div>
          <motion.div
            className="grid  justify-items-center"
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
            <p className="mb-6 pt-6 text-[36px] lg:text-[21px]  font-secondary font-semibold  uppercase leading-[1]">
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
            className="grid justify-items-center"
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

            <p className="mb-6 pt-6 text-[36px] lg:text-[21px]  font-secondary font-semibold  uppercase leading-[1]">
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
            className="grid justify-items-center"
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

            <p className="mb-6 pt-6 text-[36px] lg:text-[21px]  font-secondary font-semibold  uppercase leading-[1]">
              Tráfego Orgânico/Pago
            </p>
            <p>
              Trafego Orgânico/Pago é a maneira que o cliente chega até você,
              com o trafego pago você leva a sua empresa até ele, com o orgânico
              você faz o cliente chegar até você, através de uma publicação, um
              histories e assim por diante.
            </p>
              </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Service;
