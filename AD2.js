object.onclick = function i(){
    var x=document.getElementById("AD");
    var t=' ';
    var b;
    for(b=0;b<9;b+1){
      t+=x.elements[i].value+"<br>";
    }
  document.getElementById("endr").innerHTML=t; 
};