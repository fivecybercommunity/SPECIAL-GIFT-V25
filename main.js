let i=0;
let index=5

document.getElementsByClassName("slide")[1].style.display = "none";
document.getElementsByClassName("slide")[2].style.display = "none";
document.getElementsByClassName("slide")[3].style.display = "none";
document.getElementsByClassName("slide")[4].style.display = "none";


function slider(arr){
    document.getElementsByClassName("slide")[i].style.display = "none";
    if(arr==="next"){
        i++;
    }else{
        i--;
    }
    i= i>=index ? 0: i<0? index:i;
    document.getElementsByClassName("slide")[i].style.display = "block";
}