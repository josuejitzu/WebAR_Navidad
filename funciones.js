window.onload = () => {
   detectarBrowser();
   //console.   log(isMobile);
   
}

//const modelViewer = document.querySelector("model-viewer");

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




    // document.querySelector("viewer").addEventListener('ar-status', (event) => {
    //     if(event.detail.status === 'failed'){
    //     //   const error = document.querySelector("#error");
    //     //   error.classList.remove('hide');
    //     //   error.addEventListener('transitionend',(event) => {
    //     //     error.classList.add('hide');
    //     //   });
    //     }
    //     if(event.detail.status =='session-started')
    //     {
    //         console.log("session-started");
    //     }
    // });


// (() => {
//     var checkExist = setInterval(function() {
//      if (document.querySelector("#viewer-singleton") != null) {
//         modelViewer = document.querySelector("#viewer-singleton");
//         modelViewer.activateAR();
//         clearInterval(checkExist);
//      }
//   }, 100);
//   })();




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



// var isMobile = 
// {
//     Windows: function() {
//         return /IEMobile/i.test(navigator.userAgent);
//     },
//     Android: function() {
//         return /Android/i.test(navigator.userAgent);
//     },
//     BlackBerry: function() {
//         return /BlackBerry/i.test(navigator.userAgent);
//     },
//     iOS: function() {
//         return /iPhone|iPad|iPod/i.test(navigator.userAgent);
//     },
//     any: function() {
//         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
//     }
// };