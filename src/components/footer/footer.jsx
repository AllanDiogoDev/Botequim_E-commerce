import React from 'react';
import './footer.css';

export default function Footer(){
    return (  
        <footer>
            <section className="section-1">
                <div className="container">
                    <div className="infos">
                        <h2 className="h2-footer"> Botequim </h2>
                        <h3 className="h3-footer"> Velocidade, qualidade e segurança nos seus produtos e entregas! </h3>
                    </div>

                    <div className="bandeiras">
                        <h4 className="h4-footer"> FORMAS DE PAGAMENTOS </h4>
                        <div>
                            <figure>
                                <img className="bandeira-img" src="./imgs/cartoes-bandeira.png" alt="Bandeiras cartão"/>
                                <figcaption class="hidden"> Icone Bandeiras de Cartão </figcaption>
                            </figure>
                            <figure>
                                <img className="bandeira-img2" src="./imgs/cartoes-bandeiras2.png" alt="Bandeiras cartão"/>
                                <figcaption class="hidden"> Icone Bandeiras de Cartão </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-2">
                <div className="criador-div">
                    <div>
                        <h2 className="h2-criador">Criado por Allan Diogo <span>&#129333;&#127996;</span></h2>
                        <h2 className="h3-criador">Campinas - 2021  &#9749;</h2>
                    </div>
                </div>
            </section>
        </footer>
    );
}
 
