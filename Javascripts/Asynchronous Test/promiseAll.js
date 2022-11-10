fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err=>console.log(err))

let promise1=Promise.resolve(100)

let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("success")
    },3000)
})

let promise3=fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())

Promise.all([promise1,promise2,promise3]).then(data=>console.log(data))