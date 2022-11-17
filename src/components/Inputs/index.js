import React, { useState } from "react";
import { FaPencilAlt } from 'react-icons/fa';
import API from '../../services/API/index';

export default function Inputs() {
    const [ field, setField ] = useState({
        inptnick: '',
        iptlevel: '',
        iptChara: '',
        iptClass: '',
        iptGames: '',
        iptPass: ''
    });

    const inputSubmit = (event) => {
        setField({
            ...field,
            [ event.target.name ]: event.target.value
        });
    }
    console.log(field.inptnick, field.iptChara,field.iptClass, field.iptGames, field.iptlevel,field.iptPass);

    const insert = () => {
        API.post('/reg', {
            class: field.iptClass,
            level: field.iptlevel,
            games: field.iptGames,
            char: field.iptChara
        });
    }

    const update = () => {
        API.put('/userupd', {
            password: field.iptPass,
            nickname: field.inptnick
        });
    }

    return (
        <>
            <div id="form" className="">
                <div className="flex items-center justify-center">
                    <button  type='button' className='flex bg-third-color cursor-pointer shadow-xl ml-36 my-14 animate__animated animate__fadeInDown items-center justify-center rounded-full border-2 w-10 h-10 hover:bg-fourth-color hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:third-color active:shadow-lg transition duration-150 ease-in-out'>
                        <FaPencilAlt color='white' className='w-6 h-6' />
                    </button>
                </div>
                <form id="nickname" onSubmit={update} className=" flex flex-col items-center justify-center text-center">
                    <div className="flex flex-col ">
                        <label className="pb-2 title pr-2 text-md ">Nickname</label>
                        <input type="text"  
                                name="inptnick" 
                                className='title align-middle w-64 border-2 text-lg text-center rounded-lg' 
                                onChange={inputSubmit}
                                />
                    </div>
                    <div className='flex my-8 justify-around'>
                        <form onSubmit={insert} className="flex flex-col">
                            <label for="mygames" className=" title pr-2 text-md ">Meu nivel </label>
                            <input type="text" 
                                    name="iptlevel" 
                                    className="title mb-4 border-2 rounded-md text-center" 
                                    onChange={inputSubmit}
                                    />

                            <label for="character" className=" title pr-2 text-md">Personagem</label>
                            <textarea type="text" 
                                        name="iptChara" 
                                        className="title mb-4 h-20 border-2 text-center rounded-md" 
                                        rows={5}
                                        onChange={inputSubmit}
                                        ></textarea>

                            <label for="class" className=" title pr-2 text-md">Classe</label>
                            <input type="text" 
                                    name="iptClass" 
                                    className="title mb-16 border-2 rounded-md text-center" 
                                    onChange={inputSubmit}
                                    />
                        </form>

                        <form onSubmit={insert} className="ml-20 flex flex-col">
                            <label for="mygames" className="title pr-2 text-md">Meus Jogos</label>
                            <textarea name="iptGames" 
                                        className="title mb-5 border-2 rounded-md text-center" 
                                        rows={6}
                                        onChange={inputSubmit}
                                        ></textarea>

                            <label for="password" className="title pr-2 text-md">Altere sua senha</label>
                            <input name="iptPass" 
                                    type="text" 
                                    placeholder="*****" 
                                    classname="title mb-16 border-2 rounded-md text-center" 
                                    onChange={inputSubmit}
                                    onSubmit={update}
                                    />
                        </form>
                    </div>
                    <div className='flex flex-row'>
                        <div id='inputbtn' className='flex flex-row'>
                            <button
                                type="submit"
                                className=" w-96 h-14 mb-10 subtitle animate__animated animate__fadeInLeft inline-block third-color px-7 py-3 bg-third-color text-white font-medium text-sm leading-snug uppercase rounded-md shadow-md hover:bg-fourth-color hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:third-color active:shadow-lg transition duration-150 ease-in-out"
                            >
                                Salvar
                            </button>
                            <button
                                type="button"
                                className=" w-96 h-14 ml-10 mb-10 subtitle animate__animated animate__fadeInLeft inline-block third-color px-7 py-3 bg-third-color text-white font-medium text-sm leading-snug uppercase rounded-md shadow-md hover:bg-fourth-color hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:third-color active:shadow-lg transition duration-150 ease-in-out"
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