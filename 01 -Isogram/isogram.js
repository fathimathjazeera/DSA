
function isIsogram(str){

const letters = new Set(str).size;
let result=str.toUpperCase()


if(letters ==result.length){
    console.log(true)
}else{
    console.log(false)
}


}

isIsogram("")
