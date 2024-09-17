var txt1=document.getElementById('txt1');
var count=0;
var max=5;
function change(){

    console.log("button clicked");
    var xhttp=new XMLHttpRequest();//initialize the request-step1

xhttp.onreadystatechange =function()//step4 checking the ready state and status

{
if(this.readyState == 4 && this.status==200){


    console.log(this.responseText);
    
    
    var data=JSON.parse(this.responseText)

    let val= "";
    
    for (let i=0; i<data.length;i++)
        val +=`<li id="myUL" class="checked">${data[i].title}<br><input class="check" type="checkbox"><label>completed</li>`
    txt1.innerHTML =val;

    function abc(){
        return new Promise((resolve,reject)=>{


    var checks = document.querySelectorAll(".check");
    var max = 5;
    for (var i = 0; i < checks.length; i++)
      checks[i].onclick = selectiveCheck;
    function selectiveCheck (event) {
      var checkedChecks = document.querySelectorAll(".check:checked");
      if (checkedChecks.length >= max + 1)
      {
resolve();
       
alert("Congrats. 5 Tasks have been Successfully Completed ");
    return false;

    }
}
}).then(message=>{

    console.log("select checkbox");
});

}
abc();
}
};
xhttp.open("GET","data.txt",true);//create request-step2
xhttp.open("GET","data.json",true);//create request-step2


    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);//create request-step2
     xhttp.send(); //send request-step3
}