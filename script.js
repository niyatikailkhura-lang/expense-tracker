
console.log("js is working");
let button=document.getElementById("mybutton");
button.addEventListener("click",function(){
    let amount=document.getElementById("amount").value
    let category=document.getElementById("category").value
    let date=document.getElementById("date").value
    let expenses=document.getElementById("expenses");
    let card=document.createElement("div");
    card.className="card";
    card.innerHTML=`
    <h3>${category}</h3>
    <p>💰 Amount: ₹${amount}</p>
    <p>📅 Date:${date}</p>
    <button class="delete-button">delete🗑️</button>
    `
    if(amount=="" || date=="" || category==""){
        alert("please fill complete details");
        return;
    }
    card.querySelector(".delete-button").addEventListener("click",function(){
        card.remove();
    });
    expenses.appendChild(card);
   
    console.log(amount);
    console.log(category);
    console.log(date);
});