import type {NextApiRequest, NextApiResponse} from 'next';
import {DefaultMessageResponse} from "../../types/DefaultMessageResponse";

export default (req: NextApiRequest, res: NextApiResponse<DefaultMessageResponse>) =>{
    if (req.method === 'POST'){

        const {login, password} = req.body;

        if (login === 'luheagsilva@gmail.com' && password === 'Senha@123'){
            return res.status(200).json({msg: 'Login autenticado!'})
        }

        return res.status(200).json({error: 'Credenciais inválidas!'})
    }
    return res.status(405).json({error: 'Método informado não é permitido!'})
}

//Tipo de request por arquivo no Next: Criar pasta com nome 'login' e criar arquivo .ts com o nome _post