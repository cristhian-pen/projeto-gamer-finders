import React from 'react';
import { FaPencilAlt, FaUserNinja } from 'react-icons/fa';

import 'animate.css';
import Fade from 'react-reveal';
import Footer from '../Footer';
import Head from '../Head/index.';
import data from '../../access.json';

export default function App() {
    return (
        <>
            <Fade>
                <Head />
            </Fade>
            <Fade>
                <section className=' flex items-center justify-center py-10 '>
                    <a className='flex items-center' href={() => false}>
                        <div className='flex bg-white shadow-2xl justify-end animate__animated animate__fadeInDown cursor-pointer border-2 items-end h-72 w-72 rounded-full'>
                            <FaUserNinja id='default' color='gray' className='mb-20 pl-16 h-fit w-52' />
                            <div id='jocker' className='mr-8 w-10 h-10'></div>
                            <button type='button' className='flex bg-third-color hidden shadow-xl mr-8 animate__animated animate__fadeInDown items-center justify-center rounded-full border-2 w-10 h-10 hover:bg-fourth-color hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:third-color active:shadow-lg transition duration-150 ease-in-out'>
                                <FaPencilAlt color='white' className='w-6 h-6' />
                            </button>
                        </div>
                    </a>
                </section>
            </Fade>
            <section className="flex shadow-2xl h-auto justify-center margin items-center flex-col rounded-t-3xl bg-white flex-col">
                <Fade bottom>
                    <div id="nickname" className="py-28 text-center">
                        <p className='title text-7xl'>{data.user2.username}</p>
                        <div className='text-slate flex-row justify-center flex title text-md text-center'>
                            <p>@{data.user2.username}</p><p>#{data.user2.id}</p>
                        </div>
                        <div className='flex my-8 justify-around'>
                            <ul>
                                <li className='title text-center underline decoration-1 mb-0.5 text-md'>Meu nivel</li>
                                <li className='title text-center text-sm'>{data.user2.nivel}</li>
                                <ul className='my-8'>
                                    <li className='title text-center underline decoration-1 mb-0.5 text-md'>Personagem</li>
                                    <li className='title text-center text-sm'>{data.user2.personagem}</li>
                                </ul>
                                <ul>
                                    <li className='title text-center underline decoration-1 mb-0.5 text-md'>Classe</li>
                                    <li className='title text-center text-sm'>{data.user2.classe}</li>
                                </ul>
                            </ul>

                            <ul>
                                <li className='title text-center underline decoration-1 mb-0.5 text-md'>Meus jogos</li>
                                <li className='title text-center text-sm'>{data.jogos.Jogo1}</li>
                                <li className='title text-center text-sm'>{data.jogos.Jogo1}</li>
                                <li className='title text-center text-sm'>{data.jogos.Jogo1}</li>
                                <li className='title text-center text-sm'>{data.jogos.Jogo1}</li>
                                <li className='title text-center text-sm'>{data.jogos.Jogo1}</li>
                                <li className='title text-center text-sm'>{data.jogos.Jogo1}</li>
                            </ul>
                        </div>
                        <div className='flex flex-row'>
                            <button
                                type="button"
                                className=" w-96 h-14 mb-10 subtitle animate__animated animate__fadeInLeft inline-block third-color px-7 py-3 bg-slate text-white font-medium text-sm leading-snug uppercase rounded-md shadow-md hover:bg-valid hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:valid active:shadow-lg transition duration-150 ease-in-out"
                            >
                                Aceitar
                            </button>
                            <button
                                type="button"
                                className=" w-96 h-14 ml-10 mb-10 subtitle animate__animated animate__fadeInLeft inline-block third-color px-7 py-3 bg-slate text-white font-medium text-sm leading-snug uppercase rounded-md shadow-md hover:bg-err hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:err active:shadow-lg transition duration-150 ease-in-out"
                            >
                                Negar
                            </button>
                        </div>
                    </div>
                </Fade>
                <span className="border border-slate shadow-md h-px mb-20 w-9/12"></span>
                <Fade bottom>
                    <Footer />
                </Fade>
            </section>
        </>
    );
}