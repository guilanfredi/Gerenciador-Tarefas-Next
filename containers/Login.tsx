

import React from "react";

export const Login = () => {
    //Tag específica do React quando não se quer usar div, por exemplo. (<>)
    return (
        // <>
            <div className="container-login">
                <img src="/logo.svg" alt="Logo FIAP" className="logo"/>
                <form>
                    <div className="input">
                        <img src="/mail.svg" alt="Informe seu Login"/>
                        <input type="text" placeholder="Login"/>
                    </div>
                    <div className="input">
                        <img src="/lock.svg" alt="Informe sua senha"/>
                        <input type="password" placeholder="Senha"/>
                    </div>
                    <button>Login</button>
                </form>
            </div>
        // </>
    );
}