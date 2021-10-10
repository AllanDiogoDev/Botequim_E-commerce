import React from 'react';
import './main.css'

export default function Main(){
    return (  
        <main>
            <div className="titulo-main-container">
                <h1 className="titulo-h1-main">Botequim</h1>
                <figure>
                    <img className="icone-titulo-main" src="./imgs/presente-icon.gif" alt="Foto Allan Diogo"/>
                    <figcaption class="hidden"> Foto Allan Diogo </figcaption>
                </figure>
                <h2 className="titulo-h2-main">Liquidação</h2>
            </div>

            <div className="input-main-container">
                <form>
                    <input className="pesquisar-input" type="text" placeholder="PC’s, celulares e eletrodomesticos..."></input>
                    <button className="buscar-input">Procurar!</button>
                </form>
            </div>

            <div className="exposicao-produtos">
                <section className="secao-produtos">
                    <div className="prateleira-produto">
                        <h2 className="texto-prateleira">TV's</h2>
                        <figure>
                            <img className="prateleira-img" src="./imgs/tv-png.png" alt="Foto Allan Diogo"/>
                            <figcaption class="hidden"> Foto Allan Diogo </figcaption>
                        </figure>
                    </div>
                    <div className="prateleira-produto">
                        <h2 className="texto-prateleira">Computadores</h2>
                        <figure>
                            <img className="prateleira-img" src="./imgs/pc-png.png" alt="Foto Allan Diogo"/>
                            <figcaption class="hidden"> Foto Allan Diogo </figcaption>
                        </figure>
                    </div>
                    <div className="prateleira-produto">
                        <h2 className="texto-prateleira">Console</h2>
                        <figure>
                            <img className="prateleira-img"src="./imgs/console-png.png" alt="Foto Allan Diogo"/>
                            <figcaption class="hidden"> Foto Allan Diogo </figcaption>
                        </figure>
                    </div>
                </section>

                <section className="secao-produtos">
                    <div className="prateleira-produto">
                        <h2 className="texto-prateleira">Eletrodomésticos</h2>
                        <figure>
                            <img className="prateleira-img" src="./imgs/eletro-png.png" alt="Foto Allan Diogo"/>
                            <figcaption class="hidden"> Foto Allan Diogo </figcaption>
                        </figure>
                    </div>
                    <div className="prateleira-produto">
                        <h2 className="texto-prateleira">Dispositivos de Áudio</h2>
                        <figure>
                            <img className="prateleira-img" src="./imgs/fone-png.png" alt="Foto Allan Diogo"/>
                            <figcaption class="hidden"> Foto Allan Diogo </figcaption>
                        </figure>
                    </div>
                    <div className="prateleira-produto">
                        <h2 className="texto-prateleira">Móveis</h2>
                        <figure>
                            <img className="prateleira-img" src="./imgs/moveis-png.png" alt="Foto Allan Diogo"/>
                            <figcaption class="hidden"> Foto Allan Diogo </figcaption>
                        </figure>
                    </div>
                </section>
            </div>
        </main>
    );
}
 