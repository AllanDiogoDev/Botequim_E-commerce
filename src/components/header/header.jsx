import React from 'react';
import './header.css';

export default function Header(){
    return ( 
        <header id="botequim">
            <figure>
                <img className="logo-botequim" src="./imgs/Botequim-Logo.png" alt="Logo Botequim"/>
                <figcaption class="hidden"> Logo Botequim </figcaption>
            </figure>

            <nav>
                <ul>
                    <li>
                        <a href="$"> Sobre </a>
                    </li>
                    
                    <li>
                        <a href="$"> Fornecedores </a>
                    </li>

                    <li>
                        <a href="$"> Ofertas</a>
                    </li>

                    <li>
                        <a href="$"> Atend. Clientes </a>
                    </li>
                </ul>  
            </nav>

            <div className="icones">
                <figure>
                    <img className="itens-menu" src="./imgs/carrinho.png" alt="Icone Carrinho de Compras"/>
                    <figcaption class="hidden"> Icone Carrinho de Compras </figcaption>
                </figure>
                    
                <figure>
                    <img className="itens-menu2" src="./imgs/entrar.png" alt="Icone Entrar"/>
                    <figcaption class="hidden"> Icone Entrar na sua Conta</figcaption>
                </figure>  
            </div>
            <a className="btn" href="#botequim"></a>
        </header>
     );
}
