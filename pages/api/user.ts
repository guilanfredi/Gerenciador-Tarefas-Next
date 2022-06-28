import type {NextApiRequest, NextApiResponse} from 'next';
import {DefaultMessageResponse} from "../../types/DefaultMessageResponse";
import {UserModel} from "../../models/UserModel";
import { connect } from '../../middlewares/connectToMongoDB'

//export default = exporta só uma coisa
//export const exporta vários, nominalmente
const registerEndpoint =  async (req: NextApiRequest, res: NextApiResponse<DefaultMessageResponse>) => {
    try {
        // console.log(req.method);
        if(req.method === 'POST'){
            const {name, email, password} = req.body;
            if (!name || name.trim().length < 2){
                return res.status(400).json({error: 'Nome não é válido!'})
            }

            if (!email || email.trim().length < 5 || (!email.includes('@') && !email.includes('.'))){
                return res.status(400).json({error: 'E-mail não é válido!'})
            }

            if (!password || password.trim().length < 6){
                return res.status(400).json({error: 'Senha deve ter pelo menos 6 caracteres!'})
            }
            const user = {
                name,
                email,
                password
            };

            await UserModel.create(user);
            return res.status(200).json({msg: "Usuário criado com sucesso!"});
        }

        return res.status(405).json({error: "Método informado não existe!"});
    }catch (e) {
        console.log('Error on create user:', e);
        return res.status(500).json({error: "Não foi possível cadastrar o usuário, entre em contato com o dev que fez isso"});
    }
}

export default connect(registerEndpoint);