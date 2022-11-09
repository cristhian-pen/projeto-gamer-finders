import React from "react";
import { FaInstagram, FaFacebookSquare, FaTwitterSquare, FaDiscord } from 'react-icons/fa';


export default function Footer() {
    return (
        <>
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
        </>
    );
}