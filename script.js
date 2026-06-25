
console.log("js is working");
let button=document.getElementById("mybutton");
button.addEventListener("click",function(){
    let amount=document.getElementById("amount").value
    let category=document.getElementById("category").value
    let date=document.getElementById("date").value
    let expenses=document.getElementById("expenses");
    expenses.innerHTML+=amount+'|'+category+'|'+date+"<br>";
    console.log(amount);
    console.log(category);
    console.log(date);
});