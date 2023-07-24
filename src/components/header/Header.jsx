import React, { useState } from "react";
import "./Header.css";

//assets
import imgPerfil from '../../assets/imgPerfil.jpg';
import whatsIcon from '../../assets/WhatsApp_icon.png';


const Header = props => {

    const [state, setState] = useState({
        showMobileMenu: false
    })

    return (
        <>
            <div className="header">

                <div className="logo">
                    <div className="logoContainer">
                        <img src={imgPerfil} alt="" />
                    </div>
                    <span>
                        <h3>Vítor Henrique</h3>
                    </span>
                </div>


                <div className="containerLinks">

                    <div className="links">
                        <a href="#Home">
                            HOME
                        </a>
                    </div>

                    <div className="links">
                        <a href="#About">
                            ABOUT
                        </a>
                    </div>

                    <div className="links">
                        <a href="#PROJETOS">
                            PROJETOS
                        </a>

                    </div>
                    <div className="links">
                        <a href="#CONTATO">
                            CONTATO
                        </a>
                    </div>
                </div>

                <div
                    className="containerLinksMoblile"
                    onClick={e => {
                        return setState({
                            ...state,
                            showMobileMenu: !state.showMobileMenu
                        })
                    }}

                >
                    <i className={state.showMobileMenu ? "fa fa-times" : "fa fa-bars"} aria-hidden="true"></i>
                </div>


            </div>
            <div className={state.showMobileMenu ? "moblileMenu active" : "moblileMenu"}>


                <div className="linksMobile">
                    <span>
                        <a href="#Home">
                            HOME
                        </a>
                    </span>
                </div>

                <hr />

                <div className="linksMobile">
                    <a href="#About">
                        ABOUT
                    </a>
                </div>

                <hr />

                <div className="linksMobile">
                    <a href="#PROJETOS">
                        PROJETOS
                    </a>
                </div>

                <hr />

                <div className="linksMobile">
                    <a href="#CONTATO">
                        CONTATO
                    </a>
                </div>

            </div>

            <div className="whatsIcon">
                <a href="https://api.whatsapp.com/send?phone=5531996400879&text=Olá, entrei em contato através do seu site e gostaria de obter mais informações. Podemos conversar?" target="_blank">
                    <img src={whatsIcon} alt="" />
                </a>
            </div>
        </>
    )
}




export default Header;