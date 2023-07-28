const mongoose = require('mongoose');
const User = require('../models/user')
const Post = require('../models/post');
const comment = require('../models/comment');


module.exports.create = async (req, res) => {
    
    try {
        const posts = await Post.create({
            Content : req.body.content, 
            user: req.user._id
            
        });

        res.redirect('back');
    } catch (err) {
        console.log('Error in storing post:', err);
        return ;
    }
};
// module.exports.destroy = async(req , res)=>{
// try{
//     let post = await Post.findById(req.param.id);
//     //we have used .id bcoz it return string which is compareable
//     //agar ._id user karte to vo string nahi hota or hmm use b nahi kar 
//     //pate
//     if(post.user == req.user.id){
//         post.remove();
//         comment.deleteMany({post:req.param.id} , (err)=>{
//             return res.redirect('back');
//         });
//     }
// }catch(err){
//     console.log(`err in getting post`, err);
//     return res.redirect('back');
// }
   
        
// };
module.exports.destroy = async function (req, res) {
    try {
        //exec use kara hai bcoz ya promise return karta h 
        // hme pta karna h ki isme kuch aya b hia vapas ya nahi toh exec use krna hoga
      const post = await Post.findById(req.params.id).exec();
  
      if (!post) {
        console.log('Post not found');
        return res.redirect('back');
      }
  
      if (post.user.toString() === req.user.id) {
        await post.deleteOne().exec();
        await comment.deleteMany({ post: req.params.id }).exec();
        return res.redirect('back');
      } else {
        return res.redirect('back');
      }
    } catch (err) {
      console.error('Error in getting post:', err);
      return res.redirect('back');
    }
  };
  
  
  
  
  
  
  










