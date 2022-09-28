let pin = [];
let inputedvalues;
let amount;
let checker;




// to generate pin

function generate() {
    
    amount = document.querySelector('#amount').value
    let newPin;
    if (amount !=="" &&(amount.length>=3)) {
        let generatedPin= Math.floor(Math.random() *122345678909876543)
        console.log(generatedPin);
        if (airtime.value=="mtn") {
            newPin=`*556*${generatedPin}#`
        }
           if (airtime.value=="glo") {
            newPin=`*123*${generatedPin}#`
        }
        if (airtime.value=="9-mobile") {
            newPin=`*232*${generatedPin}#`
        }
        if (airtime.value=="airtel") {
            newPin=`*126*${generatedPin}#`
        }
        
        pin.push({amt:amount, card:airtime.value, code:newPin, validity:true});
        console.log(pin);
        
    }
    else if(amount.length <3 && amount!==""){
        alert("Invalid request")
    }
    else{
        alert("please enter a valid amount")
    }
    document.querySelector('#amount').value = ""   
}


// to save pin

function save() {
 

        tableD.innerHTML= ''
        pin.forEach((element,i) => {
        tableD.innerHTML +=`  <tr id=row>
                    <td data-label="S/N"> ${i+1}</td>
                    <td data-label="AIRTIME SERVICE">${element.card}</td>
                    <td data-label="AMOUNT">${element.amt}</td>
                    <td data-label="CODE">${element.code}</td>
                    <td data-label="VALIDITY"> ${element.validity==true?`<span class="text-white">VALID</span>`:`<span class="text-danger">INVALID</span>`}</td>
                    <td data-label="ACTION"><button class="btn btn-dark" onclick="delette(${i})">Delete</button></td>
                </tr>`  
});


savee= localStorage.setItem('pin', JSON.stringify(pin));   

}

// localstorage savee
get=localStorage.getItem("pin") // getting values to show
function savePin () {
if (get) {
    pin=JSON.parse(get)
    save()
}
else{
    pin=pin
}
}
savePin()

// to confirm validity

function confirm() {
checker = document.querySelector('#checker')



let seen = false;

for (let i = 0; i < pin.length; i++) {
     if (checker.value==pin[i].code && pin[i].validity == true ) {
    alert("recharge successful");
    pin[i].validity = false
    save()
    seen= true;
    setTimeout(() => {
        seen=false;
    }, 1000);
   } 
   else if (  pin[i].validity == false && checker.value==pin[i].code ){
    seen = true
    alert('used')
 }else if ( i == pin.length - 1 && seen == false) {
    alert('wrong input')
   }
}


}


// to delete per section
function delette(rmv) {
pin.splice(rmv,1)
save()
}

