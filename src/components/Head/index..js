import React from "react";
import { FaUserNinja } from 'react-icons/fa';

import 'animate.css';
import logo_gf from '../../assets/logo_gf.png';
import data from '../../access.json';

export default function Head() {
    return (
        <div className="flex flex-wrap headline  py-8 justify-between ">
            <div></div>
            <div className="flex flex-row my-08 hover:scale-105 transition delay-800 duration-300 ease-in-out cursor-pointer">
                <a href='http://localhost:3000/Home'>
                    <img src={logo_gf} className="ml-4 h-24 animate__animated animate__fadeInDown" alt="Logo da game finders" />
                </a>
            </div>
            <div className="flex hover:scale-105 transition delay-800 duration-300 ease-in-out text-xl title cursor-pointer text-white justify-center items-center" >
                <a href="http://localhost:3000/Home#findPlayers" className="scroll-smooth">
                    <p>Jogos</p>
                </a>
            </div>
            <div className="flex hover:scale-105 transition delay-800 duration-300 ease-in-out title text-xl cursor-pointer text-white justify-center items-center" >
                <a href="http://localhost:3000/Home#depoimentos">
                    <p>Depoimentos</p>
                </a>
            </div>
            <div className="flex hover:scale-105 transition delay-800 duration-300 ease-in-out title text-xl cursor-pointer text-white justify-center items-center" >
                <a href="http://localhost:3000/Home#sobrenos">
                    <p>Sobre nós</p>
                </a>
            </div>
            <div className="flex hover:scale-105 transition delay-800 duration-300 ease-in-out title text-xl cursor-pointer text-white justify-center items-center" >
                <a href="http://localhost:3000/Home#suporte">
                    <p>Suporte</p>
                </a>
            </div>
            <div></div>
            <div className="flex hidden hover:scale-105 transition underline decoration-1 delay-800 duration-300 ease-in-out title text-xl mr-08 cursor-pointer justify-between flex-wrap text-white justify-center items-center" >
                <a href="http://localhost:3000/register">
                    <p>Cadastre-se</p>
                </a>
            </div>
            <div className="flex hidden hover:scale-105 transition  underline decoration-1 delay-800 duration-300 ease-in-out title text-xl cursor-pointer justify-between flex-wrap text-white justify-center items-center" >
                <a href="http://localhost:3000/signin">
                    <p>Entrar</p>
                </a>
            </div>
            <div className="flex lg:ml-28 hover:scale-105 transition  underline decoration-1 delay-800 duration-300 ease-in-out title text-xl cursor-pointer justify-between flex-wrap text-white justify-center items-center" >
                <a href="http://localhost:3000/signin">
                    <p>Sair</p>
                </a>
            </div>
            <a href="http://localhost:3000/profile">
                <div className="flex mb-10 hover:scale-105 transition underline decoration-1 delay-800 duration-300 ease-in-out mr-08 cursor-pointer justify-center flex-col items-center" >
                    <div className="bg-white justify-center items-center flex rounded-full border-2 w-10 h-10 mb-2">
                        <FaUserNinja color="gray" />
                    </div>
                    <p className="text-lg title text-white">Ola, {data.infos.username}!</p>
                </div>
            </a>
            <div></div>
            <div></div>
        </div >
    );
}