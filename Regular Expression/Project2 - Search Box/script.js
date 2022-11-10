const dataBox = document.getElementById('data');
const searchBox = document.getElementById('search');
const display = document.getElementById('display');

const searchContent = function(){
    const inputData = dataBox.value;
    const searchKey = searchBox.value;

    const regex = new RegExp(searchKey, 'gi');
    const htmlCode = inputData.replace(regex, (match)=>`<span class='highlighted'>${match}</span>`)
    display.innerHTML = htmlCode;
}