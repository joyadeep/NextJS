import data from './data'
const trending=(req,res)=>{
const {Trending}=data;
if(!Trending)
    return res.status(404).json({message:'cannot find trending data'})
res.status(200).json(Trending)
}

export default trending;