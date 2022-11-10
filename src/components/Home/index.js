import React from "react";
import Fade from 'react-reveal/Fade';

import Depositions from "../Depositions";
import Gallery from '../Carousel/index';
import Head from "../Head/index.";
import Footer from "../Footer";

export default function Home() {
    return (
        <div className="opacity-100 z-10 headline">
            <Head />
            <Fade bottom>
                <section className="flex my-56 flex-col scroll-smooth56 justify-center items-center">
                    <div className="text-white text-center title text-8xl">
                        <p>DESCUBRA NOVOS</p>
                        <p>JOGADORES</p>
                    </div>
                    <a href="http://localhost:3000/app">
                        <button
                            type="button"
                            className="w-auto inline-block rounded-xl px-7 subtitle py-3 bg-white font-medium text-lg leading-snug uppercase rounded shadow-md hover:bg-slate-400 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:third-color active:shadow-lg transition duration-150 ease-in-out"
                        >
                            <p>Encontre seu duo</p>
                        </button>
                    </a>
                </section>
            </Fade>
            <section className="flex z-50 headline shadow-2xl h-auto justify-center items-center flex-col rounded-t-3xl bg-white flex-col">
                <Fade bottom>
                    <div id="findPlayers" className="flex title text-center my-20 mb-8 text-4xl">
                        <h2>Encontre amigos em vários Jogos</h2>
                    </div>
                    <Gallery />
                    <div id="depoimentos" className="flex my-32 title text-center mb-8 text-4xl">
                        <h2>Depoimentos</h2>
                    </div>
                    <Depositions />
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
                    <Footer />
                </Fade>
            </section>
        </div>
    );

}