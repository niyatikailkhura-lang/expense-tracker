localStorage.setItem("test", "Hello");
let expenselist=JSON.parse(localStorage.getItem("expenses"))||[];
let expenses=document.getElementById("expenses");
console.log(expenselist);
let total=0;
let totalElement = document.getElementById("total");
for(let i=0;i<expenselist.length;i++){
    let expense=expenselist[i];
    total += expense.amount;
    totalElement.textContent = `Total: ₹${total}`;
    let card=document.createElement("div");
    card.className="card";
    card.innerHTML=`
    <h3>${expense.category}</h3>
     <p>💰 Amount: ₹${expense.amount}</p>
    <p>📅 Date:${expense.date}</p>
    <button class="delete-button">delete🗑️</button>`
     card.querySelector(".delete-button").addEventListener("click",function(){
        expenselist.splice(i, 1);
        total -= expense.amount;
        localStorage.setItem("expenses", JSON.stringify(expenselist));
        totalElement.textContent = `Total: ₹${total}`;
        card.remove();
    });
    expenses.appendChild(card);
}
totalElement.textContent=`Total: ₹${total}`;
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
     let expense={
        amount:Number(amount),
        category:category,
        date:date};
        expenselist.push(expense);
        console.log(expenselist);
        console.log(JSON.stringify(expenselist));
        localStorage.setItem("expenses",JSON.stringify(expenselist));
    card.querySelector(".delete-button").addEventListener("click",function(){
        card.remove();
    });
    expenses.appendChild(card);
    localStorage.setItem("test","hello");
   
    console.log(amount);
    console.log(category);
    console.log(date);
});