import data from '../data'
const post=(req,res)=>{
const {Posts}=data;
if(!Posts)
    return res.status(404).json({message:'cannot find Post data'})
res.status(200).json(Posts)
}

export default post;