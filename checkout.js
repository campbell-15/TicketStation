//property validating the inputs
const validation ={

    validNumber:false,
    validCvv:false, 
    validMonth:false,
    validYear:false

};
//Adding event listener for payment button using a styled class
 const openPopup = document.getElementById("btn-pay");
 const closePopup = document.getElementById("btn-ok");
 const popup = document.getElementById("popup-id");

//opening popup
openPopup.addEventListener("click", () => {
    popup.classList.add("open-popup");

    clearForm();
});

//closing popup
closePopup.addEventListener("click", () => {
    popup.classList.remove("open-popup");
});


//setting up the function for time left!
const startTimer = (duration, display) =>{
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10?  "0" + seconds : seconds;

        //if statement
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000 );
}

window.onload = function () {
    let Minutes = 60 * 3,
    display = document.querySelector('#time');
    startTimer(Minutes,display);
};


//validating the cvv on the card
const validateCvv = () => {
    let cvv = document.getElementById("cvv").value;
    //if statement
    if(parseInt(cvv) < 3){
        document.getElementById("cvv-error").innerHTML = "Invalid CVV";
        validation.validCvv = false;
        document.getElementById("cvv-error").style.color = "red";
    
    }
    else{
        document.getElementById("cvv-error").innerHTML = "";
        validation.validCvv = true;
    }
}


//Validating the month on card
const validateMonth = () => {
    let month = document.getElementById("exp-month").value;
    
     // Display a message based on the validity of the card month    
    if (parseInt(month) < 1 || parseInt(month) > 12){
        document.getElementById("month-error").innerHTML = "Invalid Month"; 
        validation.validMonth = false;
        document.getElementById("month-error").style.color= "red";
    }
    else{
        document.getElementById("month-error").innerHTML = "";
        validation.validMonth = true;
    }
}


//validating the year on card
const validateYear = () => {
    let year = document.getElementById("exp-year").value;

     // Display a message based on the validity of the card year    
    if (parseInt(year) < new Date().getFullYear()){
        document.getElementById("year-error").innerHTML = "Invalid Year";
        validation.validYear = false;
        document.getElementById("year-error").style.color = "red";
    }
    else{
        document.getElementById("year-error").innerHTML = "";
        validation.validYear = true;
    }
}

//function validating the card number
const validateCard = () => { 
    // Retrieve the card number from the input field             
    let cardNumber = document.getElementById('credit-card').value; 

    // Remove spaces and dashes for easier processing            
    cardNumber = cardNumber.replace(/\s|-/g, ''); 

    // Check if the card number is valid using Luhn's Algorithm             
    let isValid = luhnCheck(cardNumber);  

    // Display a message based on the validity of the card number             
    if(isValid == false) {
        document.getElementById("card-error").innerHTML = "Invalid Card Number"; 
        validation.validNumber = false; 
        document.getElementById("card-error").style.color = "red";
    } 
    else{          
        document.getElementById("card-error").innerHTML = ""; 
        validation.validNumber = true;
    }       
 }         

const luhnCheck = (cardNumber) => { 
    var sum = 0;             
    var shouldDouble = false;             
    // Iterate through the card number from right to left             
    for (var i = cardNumber.length - 1; i >= 0; i--) {                
            var digit = parseInt(cardNumber.charAt(i));                 
            if (shouldDouble) {                     digit *= 2; 
            // Double every second digit                     
            if (digit > 9) {                         digit -= 9; 
                // Subtract 9 if the doubled digit is greater than 9                    
                }                
        }                 
                sum += digit;                 
                shouldDouble = !shouldDouble; 
                // Alternate the flag             
    }             
    // A valid card number will have a total sum that is a multiple of 10             
    return (sum % 10) === 0;         
}


 
//function to activate the payment button
const authorisePayment = () => {
    const cardNumber = document.getElementById("credit-card").value.trim();
        const cardName = document.getElementById("card-name").value.trim();
        const cardCvv = document.getElementById("cvv").value.trim();
        const cardMonth = document.getElementById("exp-month").value.trim();
        const cardYear = document.getElementById("exp-year").value.trim();

      document.getElementById("btn-pay").disabled = !(cardNumber&& cardName&& cardCvv&& cardMonth&& cardYear&& validation.validNumber&& validation.validCvv&& validation.validMonth&& validation.validYear);

}

//function to clear the form after payment
const clearForm = () =>{
    let element = document.getElementById("registration-form");          
    element.reset();


 //disable pay button after payment
    document.getElementById("btn-pay").disabled = true;
    
}

 //Event listener to show card inforrmation on the virtual card
 //append card number to virtual card......................................................
 document.getElementById('credit-card').addEventListener('keyup', function(){
    document.querySelector('.last-digit').innerHTML = this.value;
 }); 
//append card name holder input to virtual card.............................................
document.getElementById('card-name').addEventListener('keyup', function() {
    document.querySelector('.name-holder').innerHTML = this.value;
});

//append expiration month input to virtual card............................................
document.getElementById('exp-month').addEventListener('keyup', function() {
    document.querySelector('.exp-month').innerHTML = this.value;
});

//append expiration year input to virtual card.........................................
document.getElementById('exp-year').addEventListener('keyup', function() {
    document.querySelector('.exp-year').innerHTML = this.value;
});

//Event listener for text amount on the checkout page
document.addEventListener('DOMContentLoaded', function () {             
    document.getElementById('price').textContent = '$'+ sessionStorage.getItem("paymentAmount"); 
    }); 