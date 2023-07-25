import React from "react";
import "./Ofertas.css";

const Ofertas = props => {


    return (
        <div className="ofertas">
            <div className="oferta">
                <h3>
                    Site Padrão + Manutenção
                </h3>
                <span>
                    A partir de:
                </span>
                <h2>
                    <span>R$</span>
                    <span className="redText">
                        499
                    </span>
                </h2>
                <span>

                    Site profissional, moderno e completo
                    Até 5 páginas (home, sobre nós, contato)
                    Site super veloz, garantia de nota alta na ferramenta de velocidade
                    Design responsivo (amigável para navegação mobile)
                    Botão Flutuante Whatsapp
                    Site Seguro (com https://)
                    Link para suas redes sociais
                    Suporte, hospedagem,  manutenção, backup  e alterações de texto e imagens inclusas na mensalidade
                    Manutenção e servidor por R$40 mensais

                </span>

            </div>

            <div className="oferta">
                <h3>
                    e-Commerce
                </h3>
                <span>
                    A partir de:
                </span>
                <h2>
                    <span>R$</span>
                    <span className="redText">
                        999
                    </span>
                </h2>
                <span>

                    Site profissional,  moderno e completo
                    Manutenção e servidor por R$80 mensais
                    Design responsivo (amigável para navegação mobile)
                    Botão Flutuante Whatsapp
                    Site Seguro (com https://)
                    Link para suas redes sociais
                    Suporte, hospedagem,  manutenção, backup  e alterações de texto e imagens inclusas na mensalidade
                    30 backups diários
                    Entrega em prazo acordado com clientes
                    Consulte-nos para saber mais

                </span>

            </div>
        </div>
    )
}


export default Ofertas;