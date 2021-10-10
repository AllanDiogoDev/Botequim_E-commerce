import React from 'react';
import './aside.css';

export default  function Aside(){

    return (  
        <aside>
            <div className="container-aside"> 
                <h2> Fique por dentro de todas ofertas com exclusividade! </h2>
                <form className="form"> 
                    <input className="pesquisa-input" type="text" placeholder="Nome" />
                    <input className="pesquisa-input" type="text" placeholder="Email" />
                    <button className="busca-input" >Aceito!</button>
                </form>
            </div>
        </aside>
    );
}
 