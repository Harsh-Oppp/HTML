document.getElementById("h1").innerHTML = "Hi"
alert("Hi Aadya")

function changetext(){
    document.getElementById("p1").innerHTML = "YO"
}
let user;

function hai(){
    user = document.getElementById("label").value;
    console.log(user)
    document.getElementById("p3").innerHTML = "Hello " + user
}
function hypotenuse(){
    j = document.getElementById("base").value;
    h = document.getElementById("height").value;
    j = Number(j)
    h = Number(h)
    c = Math.sqrt(Math.pow(j,2) + Math.pow(h,2))  
    document.getElementById("p2").innerHTML = "Hypotenuse is " + c
}
let e = 0;
document.getElementById("counter").innerHTML = e
function increase(){
    e +=1
    document.getElementById("counter").innerHTML = e
}
function DECREASE(){
    e -=1
    document.getElementById("counter").innerHTML = e
}
function reset(){
    e =0
    document.getElementById("counter").innerHTML = e
}
function verify(){
    f = document.getElementById("Username").value;
    g = f.length
    if (g<5){
        u = "Username is too short"
    }

    else if (g>20){
        u = "Username is too long"
    }
    else {
        u = "Username is okay"
    }
    document.getElementById("verify").innerHTML = u
}
