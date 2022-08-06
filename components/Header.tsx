import React from "react";

export const Header = () => {

    const userName = localStorage.getItem('userName');
    return (
        <div className="container-header">
            <img src="/logo.svg" alt="Logo FIAP" className="logo"/>
            <button><span>+</span> Adicionar Tarefa</button>
            <div className="mobile">
                <span>Olá, {userName}</span>
                <img src="/exit-mobile.svg" alt="Sair"/>
            </div>
            <div className="desktop">
                <span>Olá, {userName}</span>
                <img src="/exit-mobile.svg" alt="Sair"/>
            </div>
        </div>
    )
}