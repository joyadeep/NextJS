import conn from '../../../database/conn';
import { getUsers } from '../../../database/controller';


const handler=async(req,res)=>{
    conn().then(()=>{res.status(500).json({error:"cannot connect api/users"})});

    const{method}=req;

    switch(method){
        case 'GET':
            getUsers(req,res);
            break;
        case 'POST':
            res.status(200).json({method,name:'POST request'})
            break;
        case 'PUT':
            res.status(200).json({method,name:'PUT request'})
            break;
        case 'DELETE':
            res.status(200).json({method,name:'DELETE request'})
            break;
        default:
            res.status(405).json({message:"only GET POST PUT and DELETE are allowed"})
            break
    }
}

export default handler;