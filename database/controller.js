import User from '../model/userSchema';

const getUsers=async(req,res)=>{
    try {
        const users=await User.find();
        if(!users)
            return res.status(404).json({error:'empty data'})
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({error:'cannot get users'})
    }
}

export {getUsers}