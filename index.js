

document.getElementById("log").addEventListener("click", function(){
    
    const ad= document.getElementById("add");
    const at = ad.value;
    const pas = document.getElementById("pass");
    const pa= pas.value;
    console.log(pa); 



    if (at== "admin" && pa=="admin123"){
      alert("log in successful");
      window.location.assign("/log.html")
    
    } else {
        alert("log in failed");
        return;
    }

    




})




