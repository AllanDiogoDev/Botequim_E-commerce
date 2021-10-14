import React from 'react';
import './aside.css';

export default function Aside(){

    return (  
        <aside>
            <div className="container-aside">
                <form className="form"> 
                    <h2> Fique por dentro de todas ofertas com exclusividade! </h2>
                    <a className="a" href>
                        <img className="icon-input" src="./imgs/user-icon.png" alt="icone usuario" />
                        <input className="pesquisa-input" type="text" placeholder="Nome" />
                    </a>
                    <a className="a" href>
                        <img className="icon-input" src="./imgs/email-icon.png" alt="icone email" />
                        <input className="pesquisa-input" type="text" placeholder="Email" />
                    </a>
                    <button className="busca-input" >Aceito!</button>
                </form>
                <figure>
                    <img className="jacare" src="./imgs/jacare-icon-celular.png" alt="Icone Carrinho de Compras"/>
                    <figcaption class="hidden"> Icone Carrinho de Compras </figcaption>
                </figure>
            </div>
        </aside>
    );
}
 