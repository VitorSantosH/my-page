import React from "react";
import "./Home.css";
import About from "../about/About";


const Home = props => {

    return (

        <>
            <div className="home" >

                <div className="apresentacao">
                    <h1 id="Home">
                        BEM VINDO
                    </h1>

                    <h3>
                        Meu nome é Vítor Henrique, sou um desenvolvedor Web focado em Frontend, construindo o Frontend de sites e aplicativos da Web, com foco no sucesso do produdo.
                    </h3>


                    <div className="btnGeral">
                        Projetos
                    </div>

                </div>


                <div className="about" id="about">

                    <div className="title">
                        <h1 id="About">
                            SOBRE MIM
                        </h1>

                        <hr />

                        <h3>
                            Aqui você encontrara mais informações sobre mim, o que faço e minhas habilidades atuais.
                        </h3>

                        <h3>
                            principalmente em termos de programação e tecnologia
                        </h3>

                    </div>

                </div>


            </div>
            <About />
        </>

    )

}




export default Home;