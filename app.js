const hexList=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const button=document.getElementsByClassName("bgGenBtn")[0];
const division=document.getElementById("bg-generator");
button.addEventListener("click",change);
function change(){
    let hex="#";
    for(let i=0;i<6;i++){
        let rand=Math.floor(Math.random()*hexList.length);
        hex+=hexList[rand]
    }
    division.style.backgroundColor=hex;
}