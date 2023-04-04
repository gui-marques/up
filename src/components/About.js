import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import { FaCheck } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-1 lg:flex-row lg:items-center 
         h-screen'>
          <motion.div className="flex-1 bg-about bg-contain bg-no-repeat h-[650px] mix-blend-lighten bg-top"
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          >

          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            <h2 className='h2 text-accent'>Sobre</h2>
            <h3 className='h4 mb-2'>
              Nós nos dedicamos a entender as necessidades e objetivos de cada
              cliente, personalizando nossas estratégias de marketing de acordo
              com suas metas específicas. Com a UpFlow, você pode esperar
              resultados comprovados, um atendimento excepcional e uma abordagem
              colaborativa para garantir que sua estratégia de marketing esteja
              alinhada com os objetivos do seu negócio. Nossa equipe usa
              tecnologia de ponta para otimizar e automatizar campanhas de
              marketing, tornando o processo mais eficiente e eficaz. Nós
              acreditamos na transparência e fornecemos relatórios detalhados e
              análises regulares para nossos clientes, permitindo que eles
              acompanhem e compreendam os resultados de suas campanhas de
              marketing. Não se contente com uma agência de marketing medíocre.
              Escolha a UpFlow e comece a ver o crescimento que seu negócio
              merece. Agende uma consulta hoje mesmo e descubra como podemos
              ajudá-lo a alcançar seus objetivos de marketing.
            </h3>
           <div className='pt-3 pb-4 grid gap-2 grid-cols-2'>
            <p className='text-sm flex space-x-4' >
            <FaCheck/>  Confiança e respeito no seu segmento.
            </p>
            <p className='text-sm flex space-x-4' >
            <FaCheck/>  Relatórios mensais no desempenho da empresa.
            </p>
            <p className='text-sm flex space-x-4' >
            <FaCheck/>  Excelência com o publico em geral.
            </p>
            <p className=' text-sm flex space-x-4' >
            <FaCheck/> Credibilidade, sendo de urgência e agilidade 😉
            </p>
            <p className='text-sm flex space-x-4' >
            <FaCheck/> Suporte rápido
            </p>
            <p className='text-sm flex' >
            <FaCheck /> Criatividade sempre em alta.
            </p>
            <p className='text-sm flex space-x-4' >
            <FaCheck/> Criamos um plano unico com a necessidade do cliente.
            </p>
           </div>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-tight-[2px]">
                  Anos de <br />
                  Experiencia
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                  K+
                </div>
                <div className="font-primary text-sm tracking-tight-[2px]">
                  Projetos <br />
                  Completos
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={59} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-tight-[2px]">
                  Clientes <br />
                  Satisfeitos
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
