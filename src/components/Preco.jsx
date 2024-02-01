import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Preco = (props) => {
  return (
    <header id="preco" className="">
      <div className="container text-black mx-auto py-36 px-2">
        <div className="text-5xl text-accent text-center font-semibold uppercase tracking-widest">
          <motion.span
          variants={fadeIn('down', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.5}}
          className="text-[50px] font-bold leading-[0.8] lg:text-[80px]"
          >NOSSOS PLANOS</motion.span>
        </div>       
        <h3 className="text-center">A UpFlow oferece planos que para ajudar nossos clientes a alcançar seus objetivos de negócios.</h3>
        <div className="grid lg:grid-cols-4 gap-4 m-10 md:grid-cols-2 grid-cols-1">
          {props.data
            ? props.data.map((plan, i) => (
              <div key={`${plan.title}-${i}`}
                className='relative shadow-2xl  transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-10 duration-400 py-8 px-8 text-center'>
                <h3 className="text-5xl  uppercase font-semibold leading-5">{plan.title}</h3>

                {plan.mostPopular && (
                  <p className="absolute top-0 -translate-y-1/2 rounded-full btn px-3 py-0.5 text-sm font-semibold
                tracking-wide text-white shadow-md">{plan.mostPopular}</p>
                )}

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {plan.description}
                </p>
                <div className="-mx-8 mt-0 rounded-lg p-0">
                  {/* <span className="text-sm font-semibold ">{plan.cifra}</span>
                  <span className="ml-1 text-4xl">{plan.preco}</span>
                  <span className="ml-1.5">{plan.frequency}</span> */}
                </div>

                <ul className="mt-4  space-y-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature} className="text-base leading-6"
                    >

                      <svg
                      className="float-left w-5 h-5 text-accent " 
                      version="1.1" id="Layer_1" 
                      xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 122.88 109.76" >

                      <path class="st0" d="M0,52.88l22.68-0.3c8.76,5.05,16.6,11.59,23.35,19.86C63.49,
                      43.49,83.55,19.77,105.6,0h17.28 C92.05,34.25,66.89,70.92,46.77,109.76C36.01,86.69,20.96,
                      67.27,0,52.88L0,52.88L0,52.88z" fill="currentColor" />
                      </svg>

                      <span className="ml-0">{feature}</span>
                    </li>


                  ))}
                </ul>
                <a target="blank" href="https://wa.me/5541998419824">
                  <button className={`m-3 text-base p-1.5 text-red rounded-lg  font-semibold leading-4 shadow-md btn 
                 `}>Saiba mais</button>


                </a>

              </div>
            ))
            : 'loading'}
        </div>
      </div>
    </header>
  );
};

export default Preco;
