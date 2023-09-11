function fakeBin(x){
    let text=''
   const digits=[...x]

  const filtered=digits.map((digit)=>{
     if(digit < 5){
        text+= digit=0
     }else{
          text+= digit = 1
     }
  })  
     return text
   }

 console.log(  fakeBin('123456'))
 