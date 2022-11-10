// let p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("promise call");
//         //resolve("success")
//         reject(new Error("invalid input"))
//     },2000)
// })
// p.then(x=>console.log(x)).catch(x=>console.log(x,"error"))


let posts=[{"title":"First Post"},{"title":"Second Post"}]

function createPost(post){
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        posts.push(post)
        resolve("post added")
    },2000)
 })  
}

function viewPost(){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        posts.forEach((post)=>{
                console.log(post.title);
        })
    },1000)
   })
}
createPost({"title":"Third Post"}).then(x=>viewPost()).then().catch(x=>console.log(x))