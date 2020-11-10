window.onload = () => {
   detectarBrowser();
   
   
}



var esiPhone;
var esAndroid;
var esEscritorio;

function detectarBrowser() {

    var ua= navigator.userAgent;

    esiPhone = /iPhone|iPad/i.test(ua);
    esAndroid = /Android/i.test(ua);

    if(esiPhone)
    {
        console.debug("es iPhone");
       

    }else if(esAndroid)
    {
        console.debug("es Android");

    }else{
        console.debug("es Escritorio");
    }
    darClick();
}




function darClick() {

    console.debug(document.title);

    if(esiPhone)
    {
        console.debug("Dando click en Iphone");
       //Comentar esto en Debug porque genera muchas ventanas
        // document.getElementById("botonIos").click();

    }else if(esAndroid){
        console.debug("Dando click en Android");
       //Comentar esto en Debug porque genera muchas ventanas
       //Cada documento Index tiene sus links correspondientes
       //document.getElementById("botonAndroid").click();
      // document.getElementById("ar-button").click();
       
    }else{
        console.debug("No se puede cargar");
       // document.getElementById("botonHome").click();

    }

}



