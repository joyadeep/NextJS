import data from '../data'
export const getPost=(req,res)=>{
    const {postId}=req.query;
    const {Posts}=data;
    if(!postId)
        return res.status(400).json({error:'post id is required'})
    const post=Posts.find(value=>value.id==postId)
    res.status(200).json(post)
}

export default getPost;

