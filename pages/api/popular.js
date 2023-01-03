import data from './data'
const popular=(req,res)=>{
const {Popular}=data;
if(!Popular)
    return res.status(404).json({message:'cannot find Popular data'})
res.status(200).json(Popular)
}

export default popular;