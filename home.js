
var months="";
for(month=1; month<=12; month++){
    months += `<option>${month}</option>`;
}
document.getElementById("months").innerHTML=months;


var user1 = {
    name: 'Fatima',
    age: 21,
    email: 'fatemajabr20@gmail.com',
    city: 'Nablus'
}
var user2 = {
    name: 'Tariq',
    age: 31,
    email: 'tariq@gmail.com',
    city: 'Qalqilia'
}
document.getElementById("name1").textContent=user1.name;
document.getElementById("age1").textContent=user1.age;
document.getElementById("email1").textContent=user1.email;
document.getElementById("city1").textContent=user1.city;
document.getElementById("name2").textContent=user2.name;
document.getElementById("age2").textContent=user2.age;
document.getElementById("email2").textContent=user2.email;
document.getElementById("city2").textContent=user2.city;

