import React, { useState } from 'react';

import logo_gf from '../../assets/logo_gf.png';
import 'animate.css';

export default function SignIn() {
    const [field1, setFiel1] = useState({
        nickname: '',
        password: ''
    });

    const handleSubmit = (event) => {
        setFiel1({
            ...field1,
            [event.target.name]: event.target.value
        });
        console.log(field1.nickname)
        console.log(field1.password)
    }

    const validaDados = (event) => {
        let err = document.getElementById('err');
        let valid = document.getElementById('valid');
        let alertm = document.getElementById('alertm');

        if (field1.nickname === "iroon" && field1.password === "iroon") {
            valid.classList.remove('hidden');
            valid.classList.add('animated_tada');
            setInterval(() => {
                err.classList.add('hidden');
            }, 200);

        } else if (field1.nickname !== "iroon" && field1.password !== "iroon") {
            alertm.classList.remove('hidden');
            alertm.classList.add('animated_tada');
            window.addEventListener('click', (handleSubmit) => {
                alertm.classList.add('hidden');
            })

        } else {
            err.classList.remove('hidden');
            err.classList.add('animated_tada');
            setInterval(() => {
                err.classList.add('hidden');
            }, 3000);
        }
    }
    return (
        <div>
            <section className="h-screen">
                <div className=" flex flex-wrap py-4 justify-between">
                    <div className="flex flex-row hover:scale-105 transition delay-800 duration-300 ease-in-out cursor-pointer">
                        <a href='http://localhost:3000/Home'>
                            <img src={logo_gf} className="ml-4 h-24 animate__animated animate__fadeInDown" alt="Logo da game finders" />
                        </a>
                        <div className="flex title flex-col justify-center items-center text-white font-bold animate__animated animate__fadeInDown">
                            <p>GAME</p>
                            <p>FINDERS</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-5xl title text-white animate__animated animate__fadeInDown font-bold xl:mr-20 lg:mr-36 my-8">START YOUR SESSION</p>
                    </div>
                    <div></div>
                </div>
                <div className="px-6 text-gray-800 lg:justify-center">

                    <div id='valid' className='flex justify-center animate__animated items-center hidden'>
                        <div className='text-white valid mb-8 text-3xl font-bold title '>
                            <p>YOU ARE LOGGED!!!</p>
                        </div>
                    </div>

                    <div id='err' className='flex justify-center animate__animated items-center hidden'>
                        <div className='text-white err text-3xl mb-8 font-bold title '>
                            <p>INCORRECT NICKNAME OR PASSWORD!</p>
                        </div>
                    </div>

                    <div id='alertm' className='flex justify-center animate__animated items-center hidden'>
                        <div className=' text-white alertm text-3xl mb-8  font-bold title '>
                            <p>PLEASE, FILL IN ALL FIELDS</p>
                        </div>
                    </div>

                    <div
                        className="flex flex-row xl:justify-center lg:justify-center xl:my-36"
                    >
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form>
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

                                <div className="flex justify-between items-center mb-2">
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input ml-8 accent-gray-700 animate__animated animate__fadeInDown h-4 w-4 border-2 bg-white border-gray-300 rounded-sm checked:border-gray-700 focus:outline-none transition duration-300 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            id="REMEMBERME"
                                        />
                                        <label className="form-check-label subtitle animate__animated animate__fadeInDown inline-block text-white" for="rememberme"> Remember   me </label>
                                    </div>
                                </div>

                                <div className="flex-col my-10 items-stretch justify-center text-center ">
                                    <div className="flex-1 my-8 justify-center items-center">
                                        <button
                                            type="button"
                                            className=" w-4/6 subtitle animate__animated animate__fadeInLeft inline-block third-color px-7 py-3 bg-third-color text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-fourth-color hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:third-color active:shadow-lg transition duration-150 ease-in-out"
                                            onClick={validaDados}
                                        >
                                            Login
                                        </button>
                                    </div>

                                    <div
                                        className=" items-center"
                                    >
                                        <p className="text-center title animate__animated animate__fadeInDown font-semibold text-white mx-4">Or try</p>
                                    </div>

                                    <button
                                        type="button"
                                        className="w-4/6 my-5 subtitle animate__animated animate__fadeInLeft inline-block px-7 py-3 bg-third-color text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-fourth-color hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        onClick={function redirect() {
                                            window.location.assign('/register');
                                        }
                                    }
                                    >
                                        Create account
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
