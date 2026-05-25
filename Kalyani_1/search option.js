function searchPaper(){
let input=document.getElementById("search").value.toLowerCase();
let papers=document.getElementsByTagName("li");

for(let i=0;i<papers.length;i++){
if(papers[i].innerText.toLowerCase().includes(input)){
papers[i].style.display="";
}
else{
papers[i].style.display="none";
}
}
}