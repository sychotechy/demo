const dataContainer = document.getElementById('data-container');
let htmlCode = '';

fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>{
    console.log(data);
    /* data.forEach(function(item){
        console.log(`Username : ${item.username}\nEmail : ${item.email}`);
        htmlCode+= `<h3>Username : ${item.username}</h3>\n
        <h3>Email : ${item.email}</h3> <hr>
        `;
    })
    dataContainer.innerHTML = htmlCode; */
    for(let i=0;i<5;i++){
        htmlCode += `<h3>Username : ${data[i].username}</h3>\n
        <h3>Email : ${data[i].email}</h3> <hr>
        `;
    }
    dataContainer.innerHTML = htmlCode;
});