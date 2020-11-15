var dic = {
    key1:["id-html","70"],
    key2:["id-css","60"],
    key3:["id-react","30"],
    key4:["id-js","40"],
    key6:["id-office","90"],
    key7:["id-python","80"],
    key8:["id-java","90"],
    key9:["id-mysql","60"],
    key10:["id-cpp","40"],
    key11:["id-c","60"],
    key12:["id-photoshop","70"],
}

var timer = 2000;
var i = 0;
var max = $('#c > li').length;
    $("#c > li").eq(i).addClass('bord');
    buscaId( $("#c > li").eq(i)[0].id)
    

setInterval(function(){ 
    $("#c > li").eq(i).removeClass('bord');

    if (i < max-1) {
        i = i+1; 
    }
    else { 
        i = 0; 
    }  
    $("#c > li").eq(i).addClass('bord');
    buscaId($("#c > li").eq(i)[0].id)
}, timer);

function buscaId(idElemento){
    for(var i in dic){
        if(dic[i][0] == idElemento){
        var elemento = document.getElementById("line-container");
        var elemento2 = document.getElementById("line-container2");
        var restante = 100 - dic[i][1];
        var porcentaje = dic[i][1];
        var porcentaje_str = porcentaje.toString()+"%";
        var restante_str = restante.toString()+"%";
        elemento.style.width = porcentaje_str;
        elemento2.style.width = restante_str;
        //elemento.removeAttribute("style")
        //elemento.style.backgroundColor = "red";
        //elemento.setAttribute("style","background-color: red;")
        //var intro = document.getElementById(dic[i]);
        //intro.style.color = '#FF00FF';
        }
    }
}

/* var sobremi = document.getElementById("id-cpp");
var afectado = document.getElementById("nombre-h");
console.log(afectado)
sobremi.addEventListener("mouseover", () => {
  afectado.setAttribute("style","visibility: visible;");
}
  , false);
sobremi.addEventListener("mouseout", () => {
    //afectado.className = "row"; 
    afectado.setAttribute("style","visibility: hidden;");
  }
  , false); */
