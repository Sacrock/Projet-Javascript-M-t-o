function Affiche_redirige(){
  text = document.getElementById("text_id").value ;
	if (text == "") {
	   alert("Un champ n'est pas remplie");
	   return false;
	}
  let ville = "La ville demandée est bien : " + document.getElementById("text_id").value + " ?" ;
  if ( confirm( ville ) ) {
    RedirectionJavascript();
  }
}      

function RedirectionJavascript(){
  window.location.href="test2.html";
}


let temp = "$tempérture_indispo_pour_le_moment"  ;
document.getElementById("temp_id").innerHTML=temp;


let ecart = "$ecart_indispo_pour_le_moment" ;
document.getElementById("ecart_id").innerHTML=ecart;
