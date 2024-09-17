var em=document.getElementById("em");
var pwd=document.getElementById("pwd");

var err3=document.getElementById("err3");

var btn1=document.getElementById("btn1");
btn1.addEventListener('click',function callback1(callback){
    

        callback();
    
    })


    

function validate(){


    if((em.value=="admin") && (pwd.value==12345))
        {
       location.href = 'http://127.0.0.1:5500/index.html';
        return false;

    }


else
{
    err2.innerText="invalid registration";

    return false;

}
}


callback1(validate);





//callback1(validate);


