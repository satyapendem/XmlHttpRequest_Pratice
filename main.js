var counter = 1;
var btn = document.getElementById("parse");
var show_div = document.getElementById("content");
btn.addEventListener("click",show);
function show(){
var httpObj = new XMLHttpRequest();
 httpObj.open('GET','https://learnwebcode.github.io/json-example/animals-'+counter+'.json');

 httpObj.onload = function(){

    var data =JSON.parse(httpObj.responseText);
    render(data);
 }

 httpObj.send();
 counter++;
 if(counter>3)
 {
 	btn.style.visibility = 'hidden';
 }
}

function render(data){
    var htmlString = "";
	for(i=0;i<data.length;i++){
      htmlString+="<p>"+data[i].name + "is a" +data[i].species +"likes"
      for(j=0;j<data[i].foods.likes.length;j++){
      	htmlString +=data[i].foods.likes[j];
      }
	}
	show_div.innerHTML = htmlString;
}