let i=0;

document.getElementsByClassName("slide")[1].style.display = "none";
document.getElementsByClassName("slide")[2].style.display = "none";

function slider(arr){
    document.getElementsByClassName("slide")[i].style.display = "none";
    if(arr==="next"){
        i++;
    }else{
        i--;
    }
    i= i>=3 ? 0: i<0? 2:i;
    document.getElementsByClassName("slide")[i].style.display = "block";
}