const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelector(".pw_hide");

formOpenBtn.addEventListener("click" , () => home.classList.add("show"))
formCloseBtn.addEventListener("click" , () => home.classList.remove("show"))



signupBtn.addEventListener("click",(e) => {
    e.preventDefault();
    formContainer.classList.add("active");

});

loginBtn.addEventListener("click",(e) => {
    e.preventDefault();
    formContainer.classList.remove("active");

});


// gallery
function myfunc(){
    var name = document.getElementById('txt1').value;
    var email = document.getElementById('email').value;
    if(name==""){
        document.getElementById('txt1').focus();
        return false;
    }
    else if(email==""){
        document.getElementById('email').focus();
        return false;
    }
    else{
        return true;
    }
    }
    function myfunc1(){
        var maths = parseInt(document.getElementById('math').value);
        var science = parseInt(document.getElementById('science').value);
        var computer = parseInt(document.getElementById('computer').value);
    
        var sum = maths+science+computer;
        
        document.getElementById('total').value = sum;
        var percent = (sum/3);
        document.getElementById('percent').value = percent;
    
        var max=0;
        if(maths>science && maths > computer){
            max = maths;
            document.getElementById('max').value = max;
        }
        else if(science > maths && science > computer){
            max = science;
            document.getElementById('max').value = max;
        }
        else{
            max = computer;
            document.getElementById('max').value = max;
        }
        
    
    }
function func3(){
    window.open("window.html","Popup","height=200,width=200");
}
function myfunc2(){
    var name = prompt('Enter Name:');
    var country = prompt('Enter Country:');
    country = country.toLocaleLowerCase();
    country = country.trim();


    if(country == 'india'){
        alert('50% Discount for You!');
    }
    else{
        alert('No Discount For You!')
    }

}

function func4(){
    var s = document.getElementById('search').value;
    console.log(s);
    if(s == 'mean'){
        window.open("mean.html","Popup","height=200,width=200");
    }
    else if(s=='mern'){
        window.open("mern.html","Popup","height=200,width=200");
    }
    else{
        window.open("mevn.html","Popup","height=200,width=200");
    }
    
    
}
