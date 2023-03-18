//alert("it works");

var  x = true;
let popup = () =>{



    if(x == true){

        
        document.getElementById("pops").style.opacity =1;
        document.getElementById("pops").style.zIndex = 10;
        x = false;
        
    }else{
        document.getElementById("pops").style.opacity =0;
        document.getElementById("pops").style.zIndex = -10;
        x = true;
    }
}

