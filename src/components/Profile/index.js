import React from 'react';
import { FaPencilAlt, FaUserNinja } from 'react-icons/fa';

import 'animate.css';
import Fade from 'react-reveal';
import Footer from '../Footer';
import Head from '../Head/index.';
import Inputs from '../Inputs';

export default function Profile() {

    function activeinput() {
        let information = document.getElementById('information');
        let buttons = document.getElementById('buttons');
        let jk = document.getElementById('jocker');
        let btn = document.getElementById('btnedit');


        information.addEventListener('click', () => {
            information.classList.add('hidden');
            buttons.classList.add('hidden');
            jk.classList.add('hidden');
            btn.classList.remove('hidden');
        });
    }

    return (
        <>
            <Fade>
                <Head />
            </Fade>
            <Fade>
                <section className='flex items-center justify-center py-10 '>
                    <a className='flex items-center'>
                        <div className='flex bg-white shadow-2xl justify-end animate__animated animate__fadeInDown cursor-pointer border-2 items-end h-72 w-72 rounded-full'>
                            <FaUserNinja id='default' color='gray' className='mb-20 pl-16 h-fit w-52' />
                            <div id='jocker' className='mr-8 w-10 h-10'></div>
                        </div>
                    </a>
                </section>
            </Fade>
            <section className="flex shadow-2xl h-auto justify-center margin items-center flex-col rounded-t-3xl bg-white flex-col">
                <Fade bottom>
                    
                    <div id="information" className="py-28 text-center">
                        <p className='title text-7xl'>IrooNC</p>
                        <div className='text-slate flex-row justify-center flex title text-md text-center'>
                            <p>@IrooNC</p><p>#123</p>
                        </div>
                        <div className='flex my-8 justify-around'>
                            <ul>
                                <li className='title text-center underline decoration-1 mb-0.5 text-md'>Meu nivel</li>
                                <li className='title text-center text-sm'>Nivel 84</li>
                                <ul className='my-8'>
                                    <li className='title text-center underline decoration-1 mb-0.5 text-md'>Personagem</li>
                                    <li className='title text-center text-sm'>Breach espanca bomb</li>
                                </ul>
                                <ul>
                                    <li className='title text-center underline decoration-1 mb-0.5 text-md'>Classe</li>
                                    <li className='title text-center text-sm'>Iniciador</li>
                                </ul>
                            </ul>

                            <ul>
                                <li className='title text-center underline decoration-1 mb-0.5 text-md'>Meus jogos</li>
                                <li className='title text-center text-sm'>Valorant</li>
                                <li className='title text-center text-sm'>Csgo</li>
                                <li className='title text-center text-sm'>warzone</li>
                                <li className='title text-center text-sm'>Fortnite</li>
                                <li className='title text-center text-sm'>League of Legends</li>
                                <li className='title text-center text-sm'>Overwatch</li>
                            </ul>
                        </div>
                        <div id='buttons' className='flex flex-row'>
                            <button
                                type="button"
                                className=" w-96 h-14 mb-10 subtitle animate__animated animate__fadeInLeft inline-block third-color px-7 py-3 bg-third-color text-white font-medium text-sm leading-snug uppercase rounded-md shadow-md hover:bg-fourth-color hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:third-color active:shadow-lg transition duration-150 ease-in-out"
                                onClick={activeinput}
                            >
                                Editar perfil
                            </button>
                            <button
                                type="button"
                                className=" w-96 h-14 ml-10 mb-10 subtitle animate__animated animate__fadeInLeft inline-block third-color px-7 py-3 bg-third-color text-white font-medium text-sm leading-snug uppercase rounded-md shadow-md hover:bg-fourth-color hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:third-color active:shadow-lg transition duration-150 ease-in-out"
                            >
                                Deixe seu depoimento
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