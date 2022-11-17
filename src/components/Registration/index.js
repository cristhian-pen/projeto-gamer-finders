import React, { useState } from 'react';
import API from '../../services/API/index';

import logo_gf from '../../assets/logo_gf.png';
import 'animate.css';


export default function Register() {
    const [ nick, setNick] = useState({
        nickname: '',
        password: ''
    });

    const [ truepass, setTrue ] = useState({
        conpassword: ''
    });

    const handleSubmit = (event) => {
        setNick({
            ...nick,
            [ event.target.name ]: event.target.value
        });
        setTrue({
            ...truepass,
            [ event.target.name ]: event.target.name
        });
    }

    const create = () => {
        API.post('/reg', {
            nickname: nick.nickname,
            password: nick.password
        });
    }

    return (
        <div>
            <section className="h-screen">
                <div className=" flex flex-wrap py-4 justify-between">
                    <div className="flex flex-row hover:scale-105 transition delay-800 duration-300 ease-in-out cursor-pointer">
                        <a href='/Home'>
                            <img src={logo_gf} className="ml-4 h-24 animate__animated animate__fadeInDown" alt="Logo da game finders" />
                        </a>
                        <div className="flex title flex-col justify-center items-center text-white font-bold animate__animated animate__fadeInDown">
                            <p>GAME</p>
                            <p>FINDERS</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-5xl title text-white animate__animated animate__fadeInDown font-bold xl:mr-20 lg:mr-36 py-11">CREATE YOUR ACCOUNT</p>
                    </div>
                    <div></div>
                </div>
                <div
                    className="flex flex-row xl:justify-center lg:justify-center xl:my-36"
                >
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form onSubmit={create}>
                            <div>
                                <p className="text-sm text-white font-bold mb-2 subtitle ml-2 animate__animated animate__fadeInDown">NICKNAME</p>
                            </div>

                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control user animate__animated animate__fadeInLeft block w-full h-10 px-4 text-sm font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="nickname"
                                    placeholder="NICKNAME"
                                    name="nickname"
                                    onChange={handleSubmit}
                                />
                            </div>
                            <div>
                                <p className="text-sm subtitle animate__animated animate__fadeInDown text-white font-bold mb-2 ml-2">PASSWORD</p>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control animate__animated animate__fadeInLeft block w-full h-10 px-4 text-sm font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="password"
                                    placeholder="PASSWORD"
                                    name="password"
                                    onChange={handleSubmit}
                                />
                            </div>
                            <div>
                                <p className="text-sm subtitle animate__animated animate__fadeInDown text-white font-bold mb-2 ml-2">CONFIRM PASSWORD</p>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control animate__animated animate__fadeInLeft block w-full h-10 px-4 text-sm font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="conpassword"
                                    placeholder="CONFIRM PASSWORD"
                                    name="conpassword"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    type="submit"
                                    className="w-4/6 my-5 subtitle animate__animated animate__fadeInLeft inline-block px-7 py-3 bg-third-color text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-fourth-color hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section >
        </div >
    );
}
