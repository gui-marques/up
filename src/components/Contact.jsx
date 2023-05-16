import React from "react";


import { motion } from "framer-motion";

import { fadeIn } from "../variants";


const Contact = () => {
  return (
    <section id="contact" className="py-20 mt-[120px]">
      <div className="container  mx-auto">
        <div className="flex-1 text-center font-secondary lg:text-left">
          {" "}
          <motion.span
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.5 }}
            className="text-[50px] font-bold leading-[0.8] lg:text-[80px] text-accent"
          >FALE CONOSCO</motion.span> <br />
          <span>Por favor, preencha o formulário abaixo para nos enviar um email que iremos retornar para você o mais rápido possível.</span>
          <div className="grid lg:grid-cols-2 gap-6 md:grid-cols-2 grid-cols-1 m-10">
            <form>
              <div className="grid grid-cols-2 gap-5">
                <input type="text" className="border border-gray-500 px-4 py-2 text-black focus:outline-none focus:border-purple-300 col-span-2"
                  placeholder="Nome Completo"
                />
                <input type="email" className="border border-gray-500 px-4 py-2 text-black focus:outline-none focus:border-purple-300"
                  placeholder="E-mail"
                />
                <input type="tel" className="border border-gray-900 px-4 py-2 text-black focus:outline-none focus:border-purple-300 "
                  placeholder="Telefone"
                />
              
               <textarea
               cols="10"
               rows="5"
               className="border border-gray-500 px-4 py-2 focus:outline-none text-black focus:border-purple-300 col-span-2"></textarea>
               <input className="btn p-3 cursor-pointer" type="submit" value={'Enviar Mensagem'} />
              </div>
            </form>

            <div className="flex flex-col">
            <motion.span
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.5 }}
            className="text-[40px] font-bold leading-[0.8] lg:text-40px] text-accent"
            >Contato</motion.span> <br />
            <span>Endereço</span>
            <p></p>
            <span>Telefone</span>
            <p>+55 (41) 99841-9824</p>
            <span>E-mail</span>
            <p>marketing@upflowmarketing.net</p>
            <span>CNPJ</span>
            <p>41.796.591/0001-32</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
