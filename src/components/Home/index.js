import React, { useState } from "react";
import Fade from 'react-reveal/Fade';
import Carousel from 'react-grid-carousel';
import { FaInstagram, FaFacebookSquare, FaTwitterSquare, FaDiscord } from 'react-icons/fa';
import Lottie from 'react-lottie';

import logo_gf from '../../assets/logo_gf.png';
import imgcar1 from '../../assets/background.old.jpg';
import imgcar2 from '../../assets/image-carousel-2.jpg';
import imgcar3 from '../../assets/image-carousel-3.png';
import imgcar4 from '../../assets/image-carousel-4.png';
import imgcar5 from '../../assets/image-carousel-5.jpg';
import imgcar6 from '../../assets/image-carousel-6.jpg';
import imgcar7 from '../../assets/image-carousel-7.jpg';
import imgcar8 from '../../assets/image-carousel-8.jpg';

import animationData from '../../assets/18559-arrow-up.json';
import 'animate.css';


export default function Home() {
    const [isLiked, setIsliked] = useState(false);
    const[animationState, setAnimationState ] = useState({
        isStopped: true, isPaused: false,
        direction: -1,
    });
    
    const defaultOptions = {
        loop: false,
        animationData: animationData,
        redererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <div className="opacity-100 headline">
            <div className="flex flex-wrap headline  py-8 justify-between ">
                <div></div>
                <div className="flex flex-row my-08 hover:scale-105 transition delay-800 duration-300 ease-in-out cursor-pointer">
                    <a href='http://localhost:3000/Home'>
                        <img src={logo_gf} className="ml-4 h-24 animate__animated animate__fadeInDown" alt="Logo da game finders" />
                    </a>
                </div>
                <div className="flex hover:scale-105 transition delay-800 duration-300 ease-in-out text-xl title cursor-pointer text-white justify-center items-center" >
                    <a href="#findPlayers" className="scroll-smooth">
                        <p>Jogos</p>
                    </a>
                </div>
                <div className="flex hover:scale-105 transition delay-800 duration-300 ease-in-out title text-xl cursor-pointer text-white justify-center items-center" >
                    <a href="#depoimentos">
                        <p>Depoimentos</p>
                    </a>
                </div>
                <div className="flex hover:scale-105 transition delay-800 duration-300 ease-in-out title text-xl cursor-pointer text-white justify-center items-center" >
                    <a href="#sobrenos">
                        <p>Sobre nós</p>
                    </a>
                </div>
                <div className="flex hover:scale-105 transition delay-800 duration-300 ease-in-out title text-xl cursor-pointer text-white justify-center items-center" >
                    <a href="#suporte">
                        <p>Suporte</p>
                    </a>
                </div>
                <div></div>
                <div className="flex hover:scale-105 transition underline decoration-1 delay-800 duration-300 ease-in-out title text-xl mr-08 cursor-pointer justify-between flex-wrap text-white justify-center items-center" >
                    <a href="http://localhost:3000/SignIn">
                        <p>Cadastre-se</p>
                    </a>
                </div>
                <div className="flex hover:scale-105 transition  underline decoration-1 delay-800 duration-300 ease-in-out title text-xl cursor-pointer justify-between flex-wrap text-white justify-center items-center" >
                    <a href="http://localhost:3000/SignIn">
                        <p>Entrar</p>
                    </a>
                </div>
                <div></div>
                <div></div>
            </div>
            <Fade bottom>
                <section className="flex my-56 flex-col scroll-smooth56 justify-center items-center">
                    <div className="text-white text-center title text-8xl">
                        <p>DESCUBRA NOVOS</p>
                        <p>JOGADORES</p>
                    </div>
                    <button
                        type="button"
                        className="w-auto inline-block rounded-xl px-7 subtitle py-3 bg-white font-medium text-lg leading-snug uppercase rounded shadow-md hover:bg-slate-400 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:third-color active:shadow-lg transition duration-150 ease-in-out"
                    >
                        <p>Encontre seu duo</p>
                    </button>
                </section>
            </Fade>
           {/*  <button
                    type="button"
                    className="flex ml-auto flex-row items-end justify-end z-0"
                    onClick={() => {
                        const reverseAnimation = -1;
                        const normalAnimation = 1;

                        setAnimationState({
                            ...animationState,
                            isStopped: false,
                            direction: animationState.direction === normalAnimation
                                        ? reverseAnimation
                                        : normalAnimation,
                        })
                        setIsliked(!isLiked);
                    }}
                >
                    <Lottie 
                        options={defaultOptions}
                        height={90}
                        width={80}
                        direction={animationState.direction}
                        isStopped={animationState.isStopped}
                        isPaused={animationState.isPaused}
                    />
                </button> */}
            <section className="flex headline shadow-2xl h-auto justify-center items-center flex-col rounded-t-3xl bg-white flex-col">
                <Fade bottom>
                    <div id="findPlayers" className="flex title text-center my-20 mb-8 text-4xl">
                        <h2>Encontre amigos em vários Jogos</h2>
                    </div>
                    <Carousel cols={1} loop >
                        <Carousel.Item>
                            <img src={imgcar1} className="border-black border-2 lg:ml-16 lg:mr-11  rounded-2xl shadow-md w-11/12 h-max" alt="imgcentral" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={imgcar2} className="border-black border-2 lg:ml-16 lg:mr-11 rounded-2xl shadow-md w-11/12 h-max" alt="imgcentral" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={imgcar3} className="border-black border-2 lg:ml-16 lg:mr-11 rounded-2xl shadow-md w-11/12 h-max" alt="imgcentral" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={imgcar4} className="border-black border-2 lg:ml-16 lg:mr-11 rounded-2xl shadow-md w-11/12 h-max" alt="imgcentral" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={imgcar5} className="border-black border-2 lg:ml-16 lg:mr-11 rounded-2xl shadow-md w-11/12 h-max" alt="imgcentral" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={imgcar6} className="border-black border-2 lg:ml-16 lg:mr-11 rounded-2xl shadow-md w-11/12 h-max" alt="imgcentral" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={imgcar7} className="border-black border-2 lg:ml-16 lg:mr-11 rounded-2xl shadow-md w-11/12 h-max" alt="imgcentral" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={imgcar8} className="border-black border-2 lg:ml-16 lg:mr-11 rounded-2xl shadow-md w-11/12 h-max" alt="imgcentral" />
                        </Carousel.Item>
                    </Carousel>
                </Fade>
                <Fade bottom>
                    <div id="depoimentos" className="flex my-32 title text-center mb-8 text-4xl">
                        <h2>Depoimentos</h2>
                    </div>
                    <div className="flex justify-between ">
                        <div className="rounded-3xl text-center shadow-lg pl-2 cursor-pointer pb-2 pr-2 w-64 hover:scale-105 transition delay-800 duration-300 ease-in-out h-80 border-2 border-r-slate-400 border-t-slate-400 border-b-slate border-l-slate">
                            <h2 className="title text-2xl my-4 underline decoration-1 mb-4">Next4</h2>
                            <h4 className="text-sm text-slate hover:animate_animated animate_fadeInDown">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica,.</h4>
                        </div>
                        <div className="rounded-3xl text-center ml-52 mr-52 shadow-lg pl-2 cursor-pointer pb-2 pr-2 w-64 hover:scale-105 transition delay-800 duration-300 ease-in-out h-80 border-2 border-r-slate-400 border-t-slate-400 border-b-slate border-l-slate">
                            <h2 className="title text-2xl my-4 underline decoration-1 mb-4">IrooNC</h2>
                            <h4 className="text-sm text-slate hover:animate_animated animate_fadeInDown">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica,.</h4>
                        </div>
                        <div className="rounded-3xl text-center shadow-lg pl-2 cursor-pointer pb-2 pr-2 w-64 hover:scale-105 transition delay-800 duration-300 ease-in-out h-80 border-2 border-r-slate-400 border-t-slate-400 border-b-slate border-l-slate">
                            <h2 className="title text-2xl my-4 underline decoration-1 mb-4">Renzin</h2>
                            <h4 className="text-sm text-slate hover:animate_animated animate_fadeInDown">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica,.</h4>
                        </div>
                    </div>
                </Fade>
                <Fade>
                    <div id="sobrenos" className="my-36 mb-64  text-center">
                        <h2 className="title text-center mb-4 text-4xl">Sobre nós</h2>
                        <p className=" pl-64 pr-64 title text-slate text-xl">A gamers finders e um projeto que nasceu para ajudar times e pessoas a conseguir
                            achar jogadores do mesmo nivel, ou até mesmo montar equipes para campeonatos ou quem
                            sabe achar aquele duo pra vida que você tanto procura, arraste para o lado e encontre o 
                            seu parceiro de jogatina e divirta-se!!!
                        </p>
                    </div>
                </Fade>
                <span className="border border-slate shadow-md h-px mb-20 w-9/12"></span>
                <Fade bottom>
                    <div className="flex subtitle mb-20 justify-between">
                        <div id="saibamais" className="flex text-slate-900 justify-between flex-col">
                            <h5>Saiba mais</h5>
                            <a href="www.reddit.com" className="underline decoration-1 text-slate-400">
                                <h6>Reddit</h6>
                            </a>
                        </div>
                        <div id="suporte" className="flex ml-96 mr-96 text-slate-900 subtitle flex-col">
                            <h5>Suporte</h5>
                            <a href="www.reddit.com" className=" text-slate-400 underline decoration-1">
                                <h6>email@suporte.com.br</h6>
                            </a>
                        </div>
                        <div className="flex subtitle  text-slate-900  flex-col">
                            <h5>Redes sociais</h5>
                            <div className="flex justify-between">
                                <FaInstagram href="https://instagram.com" className="cursor-pointer"></FaInstagram>
                                <FaFacebookSquare href="http://facebook.com" className="cursor-pointer"></FaFacebookSquare>
                                <FaTwitterSquare href="http://twitter.com" className="cursor-pointer"></FaTwitterSquare>
                                <FaDiscord href="https://discord.com" className="cursor-pointer"></FaDiscord>
                            </div>
                        </div>
                    </div>
                    <h6 className="title my-2 text-center text-slate-400">© 2022 Gamers  finders , Inc. Todos os direitos reservados.</h6>
                </Fade>
            </section>
        </div>
    );

}