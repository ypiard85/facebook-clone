import {db} from '@/firebase'

const fbRef = db.collection('posts')


export const FacebookService = {
   
    async getPost(){
        const postDoc = await fbRef.orderBy("date", "desc").get()
        const posts = postDoc.docs.map(post => Object.create({...post.data(), id: post.id }))
        return posts
    },

    async addPost(post){
        const p = await fbRef.add(post)
        return p.id
    }
}