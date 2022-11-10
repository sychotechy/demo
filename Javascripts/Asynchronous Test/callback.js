let posts=[{"title":"First Post"},{"title":"Second Post"}]

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post)
        callback()
    },2000)
}

function viewPost(){
    setTimeout(()=>{
        posts.forEach((post)=>{
                console.log(post.title);
        })
    },1000)
}

createPost({"title":"Third Post"},viewPost)
// viewPost()