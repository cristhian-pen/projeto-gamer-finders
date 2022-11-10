import React from "react";
import { FaPencilAlt } from 'react-icons/fa';

export default function Inputs() {
    function salvaParametro() {
        let form = document.getElementById('form');

        form.addEventListener('click', () => {
            form.classList.add('hidden');
        })
    }
    return (
        <>
            <div id="form" className="hidden">
                <div className="flex items-center justify-center">
                    <button  type='button' className='flex bg-third-color cursor-pointer shadow-xl ml-36 my-14 animate__animated animate__fadeInDown items-center justify-center rounded-full border-2 w-10 h-10 hover:bg-fourth-color hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:third-color active:shadow-lg transition duration-150 ease-in-out'>
                        <FaPencilAlt color='white' className='w-6 h-6' />
                    </button>
                </div>
                <form id="nickname" method="POST" className=" flex flex-col items-center justify-center text-center">
                    <div className="flex flex-col ">
                        <label className="pb-2 title pr-2 text-md ">Nickname</label>
                        <input type="text" className='title align-middle w-64 border-2 text-lg text-center rounded-lg' />
                    </div>
                    <div className='flex my-8 justify-around'>
                        <form className="flex flex-col">
                            <label for="mygames" className=" title pr-2 text-md ">Meu nivel </label>
                            <input type="text" className="title mb-4 border-2 rounded-md text-center" />
                            <label for="character" className=" title pr-2 text-md">Personagem</label>
                            <textarea type="text" className="title mb-4 h-20 border-2 text-center rounded-md" rows={5}></textarea>
                            <label for="class" className=" title pr-2 text-md">Classe</label>
                            <input type="text" className="title mb-16 border-2 rounded-md text-center" />
                        </form>

                        <form method="post" className="ml-20 flex flex-col">
                            <label for="mygames" className="title pr-2 text-md">Meus Jogos</label>
                            <textarea className="title mb-16 border-2 rounded-md text-center" rows={6}></textarea>
                        </form>
                    </div>
                    <div className='flex flex-row'>
                        <div id='inputbtn' className='flex flex-row'>
                            <button
                                type="button"
                                className=" w-96 h-14 mb-10 subtitle animate__animated animate__fadeInLeft inline-block third-color px-7 py-3 bg-third-color text-white font-medium text-sm leading-snug uppercase rounded-md shadow-md hover:bg-fourth-color hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:third-color active:shadow-lg transition duration-150 ease-in-out"
                                onClick={salvaParametro()}
                            >
                                Salvar
                            </button>
                            <button
                                type="button"
                                className=" w-96 h-14 ml-10 mb-10 subtitle animate__animated animate__fadeInLeft inline-block third-color px-7 py-3 bg-third-color text-white font-medium text-sm leading-snug uppercase rounded-md shadow-md hover:bg-fourth-color hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:third-color active:shadow-lg transition duration-150 ease-in-out"
                                onClick={salvaParametro()}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}