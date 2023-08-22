
document.getElementById("Add").onclick=function() {
    myfunction();
};
input = document.getElementById("inputbox");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter"){
      event.preventDefault();
      document.getElementById("Add").click();
    }
  });

var count =0;
function myfunction(){
    count = count + 1;
    var innerdiv = document.createElement("div");
    innerdiv.setAttribute("id","taskbox"+count);
    innerdiv.innerHTML= count + " " + document.getElementById("inputbox").value;
    var rmvbtn = document.createElement("button");
    rmvbtn.innerHTML = "Remove";
    rmvbtn.setAttribute("id","btn"+count);
    document.getElementById("inputbox").value="";
    document.getElementById("listdiv").appendChild(innerdiv);
    document.getElementById("taskbox"+count).appendChild(rmvbtn);
}

document.getElementById("Clearall").onclick=function(){
    clearfunction();
}

function clearfunction(){
    const element = document.getElementById("listdiv");
    count = 0;
    document.getElementById("inputbox").value="";
    element.innerHTML="";
}

function rmvfunction(){
    const element = document.getElementById("taskbox1");
    element.innerHTML="";
}

document.getElementById("btn2").onclick=function(){
    rmvfunction();
}

