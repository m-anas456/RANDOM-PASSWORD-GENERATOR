let genpassbtn = document.querySelector("button")
const inputbox1 = document.querySelector("#box1")
const inputbox2 = document.querySelector("#box2")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]


function getrandomchar(){ //for getting any random character
    let randomchar = Math.floor(Math.random() * characters.length) //for getting random character index value 
    return characters[randomchar] //returning a random charcater from characters array for eg characters[5 //any random number] so character[5]=F
}

let passwordlen = 6

function getrandompass(passlen){
    let password = ""; // Reset password for each call
    for (let i = 0; i < passlen; i++) {
        password += getrandomchar();
    }
    return password;
}

console.log(getrandompass(passwordlen))
genpassbtn.addEventListener("click",()=>{
    inputbox1.value = getrandompass(passwordlen)
    inputbox2.value = getrandompass(passwordlen)
    
})

inputbox1.value = ""
inputbox2.value = ""