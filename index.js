dateOfBirth=document.querySelector("#date-of-birth");
luckyNumber=document.querySelector("#lucky-number");
checkButton=document.querySelector("#check-button");
Message=document.querySelector("#show-message");



function compareValues(sum,luckyNumber){

   
    if(sum%luckyNumber===0){
        

       Message.innerText=("Birthday is lucky 🤪")
    } else{
        
        Message.innerText=("Birthday is not lucky 🤪")
    }
}


function calculateBirthdayLucky(){

    var number=luckyNumber.value
    var dob=dateOfBirth.value

    if (dob && number){
    var sum =calculateSum()
    compareValues(sum , luckyNumber.value)
    }else{
        Message.innerText=("Please enter both the fields")
    }
    
    

}


function calculateSum(){
    var dob=dateOfBirth.value
    var dob = dob.replaceAll("-","")
    let sum=0
    for (let i=0; i<dob.length; i++){
        sum=sum + (Number(dob.charAt(i)))
    }
    return sum
}



checkButton=addEventListener("click",  calculateBirthdayLucky


   
)