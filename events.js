function rola(){
    var c= document.querySelector("#pt");
    var tam= c.getBoundingClientRect();
    var tam= Math.abs(Math.round(tam.top));
    var tela= document.querySelector("body").offsetWidth
    // document.querySelector("#saida2").innerHTML = document.querySelector("body").offsetWidth
    // document.querySelector("#saida").innerHTML= tam;

    // if(tam < 300){
    //     document.getElementById("saida").style.color= "yellow";
    // }else if(tam < 800){
    //     document.getElementById("saida").style.color= "red";
    // }else{
    //     document.getElementById("saida").style.color= "white";
    // }

    let mos = document.querySelectorAll("section")
    let s = document.querySelectorAll("#surje")

    if (tela > 900){
        if (tam >= 200 ){
            mos[1].style.backgroundPosition = "left"
            s[0].style.opacity = "1"
        }else{
            mos[1].style.backgroundPosition = "center"
            s[0].style.opacity = "0"
        }
    
        if (tam >= 700 ){
            mos[2].style.backgroundSize = "600px"
            s[1].style.opacity = "1"
        }else{
            mos[2].style.backgroundSize = "500px"
            s[1].style.opacity = "0"
        }
    
        if (tam >= 1300 ){
            mos[3].style.backgroundPosition = "right"
            s[2].style.opacity = "1"
        }else{
            mos[3].style.backgroundPosition = "center"
            s[2].style.opacity = "0"
        }
    
        if (tam >= 2000 ){
            document.querySelector("#img1").style.left = "300px"
            document.querySelector("#img2").style.left = "600px"
            s[3].style.opacity = "1"
        }else{
            document.querySelector("#img1").style.left = "0px"
            document.querySelector("#img2").style.left = "1000px"
            s[3].style.opacity = "0"
        }
    }

}

var car = 10

function carrossel(){

    if (car < -3300){
        car = 0
    }else{
        document.querySelector("#slider").style.marginLeft = car + "px"
        car -= 300
    }
}
setInterval(carrossel, 1000)

// function size(){
//     document.querySelector("#saida2").innerHTML = document.querySelector("body").offsetWidth
// }

function scroll(){
    document.querySelector("body").scrollBy(0, 500);
}