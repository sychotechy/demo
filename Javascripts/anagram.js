const string1 = "Mary";
const string2 = "army";

console.log(isAnagram(string1,string2));

function isAnagram(string1, string2){
    const str1 = string1.toLowerCase();
    const str2 = string2.toLowerCase();
    const newStr1 = str1.split('').sort().join('');
    const newStr2 = str2.split('').sort().join('');
    return newStr1 === newStr2;
}