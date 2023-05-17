import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { AiOutlineMail, AiOutlineEnvironment, AiOutlinePhone, AiOutlineException } from 'react-icons/ai';
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export const Contact = (props) => {
  const [{ name, email, message, phone }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message, phone)
    emailjs
      .sendForm(
        // 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
        'upflowgmail', 'upFlowTemplate', e.target, 'fWaoZ7uT4-aB9C-85'
      )
      .then(
        (result) => {
          // console.log(result.text)
          alert('Mensagem enviada com Successo! :D')
          clearState()
        },
        (error) => {
          // console.log(error.text)
        }
      )
    e.target.reset()
  }

  

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
            <form name='setMessage' validate onSubmit={handleSubmit} >
              <div className="grid grid-cols-2 gap-5">
              <input
                        type='text'
                        id='name'
                        name='name'
                        className="border border-gray-500 px-4 py-2 text-black focus:outline-none rounded-lg focus:border-purple-300 col-span-2"
                        placeholder='Nome Completo'
                        required
                        onChange={handleChange}
                      />
                
                <input
                        type='email'
                        id='email'
                        name='email'
                        className="border border-gray-500 px-4 py-2 text-black focus:outline-none rounded-lg focus:border-purple-300"
                        placeholder='E-mail'
                        required
                        onChange={handleChange}
                      />
                
                <input
                        type='tel'
                        id='phone'
                        name='phone'
                        className="border border-gray-500 px-4 py-2 text-black focus:outline-none rounded-lg focus:border-purple-300"
                        placeholder='Telefone'
                        required
                        onChange={handleChange}
                      />

               
                <textarea
                    name='message'
                    id='message'
                    className="border border-gray-500 px-4 py-2 focus:outline-none text-black rounded-lg  focus:border-purple-300 col-span-2"
                    rows='4'
                    placeholder='Mensagem'
                    required
                    onChange={handleChange}
                  ></textarea>
                
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
              <div className='leading-7'>

                
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>             
              <p>
                <span className='flex justify-start items-center  ' >
                  <AiOutlineEnvironment className='mr-2'/> Endereço: 
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>

            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <p>
                <span className='flex justify-start items-center'>
                 <AiOutlinePhone className='mr-2'/> Telefone:
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <p>
                <span className='flex justify-start items-center'>
                  <AiOutlineMail className='mr-2'/> Email:
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <p>
                <span className='flex justify-start items-center'>
                  <AiOutlineException className='mr-2'/> CNPJ:
                </span>{' '}
                {props.data ? props.data.cnpj : 'loading'}
              </p>
            </div>
          </div>
            </div>

            
          </div>
        </div>
      </div>

      
     
    </section>
    
  );
};


