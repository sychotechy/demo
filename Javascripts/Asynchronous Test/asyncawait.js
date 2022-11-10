let posts = [{ "title": "First Post" }, { "title": "Second Post" }]

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            resolve("post added")
        }, 2000)
    })
}

function viewPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.forEach((post) => {
                console.log(post.title);
            })
        }, 1000)
    })
}

async function init() {
    let result=  await createPost({"title":"post3"})
    viewPost()
}
init()