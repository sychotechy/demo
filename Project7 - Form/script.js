var productList = [];

function ProductData(productName,productCategory,productPrice){
    this.productName = productName;
    this.productCategory = productCategory;
    this.productPrice = productPrice;
}


document.querySelector('button').addEventListener('click',function(){
    var productName = document.querySelectorAll('input')[0].value;
    var productCategory = document.querySelectorAll('input')[1].value;
    var productPrice = document.querySelectorAll('input')[2].value;

    var product = new ProductData(productName,productCategory,productPrice);

    productList.push(product);

    console.log(productList);

    print();
    
    document.querySelectorAll('input')[0].value = '';
    document.querySelectorAll('input')[1].value = '';
    document.querySelectorAll('input')[2].value = '';
})

function print(){
    for(var i=0;i<productList.length;i++){
        console.log("Product Number : "+(i+1));
        console.log("Product Name : "+productList[i].productName);
        console.log("Category : "+productList[i].productCategory);
        console.log("Price : "+productList[i].productPrice);
    }
}

document.querySelectorAll('button')[1].addEventListener('click',function(){
    addElements();
})

var i=0;
function addElements(){
    while(productList.length>i){
        var divNode = document.createElement('div');
        divNode.classList.add("show-card");
        document.getElementById('container-show').appendChild(divNode);
        
        // var headingNode = document.createElement('h1');
        // headingNode.textContent = 'Product '+(i+1);
        // document.getElementsByClassName('show-card')[i].appendChild(headingNode);

        document.getElementsByClassName('show-card')[i].innerHTML = `<h1>Product ${i+1}</h1>\n
        <h3>Product Name : ${productList[i].productName}</h3>\n
        <h3>Category : ${productList[i].productCategory}</h3>\n
        <h3>Price : ${productList[i].productPrice}</h3>\n
        `;



        // document.getElementById('container-show').innerHTML = `<div class='show-card'>\n
        // <h1>Product ${i+1}</h1>\n
        // <div class='product-details'>\n
        //     <h3>Product Name : ${productList[i].productName}</h3>\n
        //     <h3>Category : ${productList[i].productCategory}</h3>\n
        //     <h3>Price : ${productList[i].productPrice}</h3>\n
        // </div>
        // </div>`;
        i = i+1;
    }
}


        // <div class="show-card">
        //     <h1>Product 1</span></h1>
        //     <div class="product-details">
        //         <h3>Product Name : Iphone</h3>
        //         <h3>Category : Smart Phone</h3>
        //         <h3>Price : 150000</h3>
        //     </div>
        // </div>