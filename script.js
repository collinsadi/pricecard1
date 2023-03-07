let bigimage = document.getElementById('image');
let greenapple = document.getElementsByClassName('greencolor');
let yellowapple = document.getElementsById('yellowcolor');



function thisfunction(){
   document.getElementById('image2').style.display = "block";

   if ( document.getElementById('image').style.display === "block"){
    document.getElementById('image').style.display = "none";
}
if ( document.getElementById('image3').style.display === "block"){
    document.getElementById('image3').style.display = "none";
}


if ( document.getElementById('description').style.color === "red"){
    document.getElementById('description').style.color = "#DEC503";
} 

if ( document.getElementById('description').style.color === "green"){
    document.getElementById('description').style.color = "#DEC503";
} 


if ( document.getElementById('description').innerHTML === "Red Apple"){
    document.getElementById('description').innerHTML = "Yellow Apple"
} 

if ( document.getElementById('description').innerHTML === "Green Apple"){
    document.getElementById('description').innerHTML = "Yellow Apple"
} else{
    document.getElementById('description').innerHTML = "Yellow Apple"
    document.getElementById('description').style.color = "#DEC503";
} 
}




function green(){
    document.getElementById('image').style.display = "block";
    document.getElementById('description').innerHTML = "Green Apple"; 

    
    if ( document.getElementById('description').style.color === "red"){
        document.getElementById('description').style.color = "green";
    } 

    
    if ( document.getElementById('description').innerHTML === "Red Apple"){
        document.getElementById('description').innerHTML = "Green Apple"
    } 


    if ( document.getElementById('description').style.color === "#DEC503"){
        document.getElementById('description').style.color = "green";
    } else{
        document.getElementById('description').style.color = "green";
    }

    
    if ( document.getElementById('description').innerHTML === "Yellow Apple"){
        document.getElementById('description').innerHTML = "Green Apple"
    } 

    if ( document.getElementById('image2').style.display === "block"){
        document.getElementById('image2').style.display = "none";
    }
    if ( document.getElementById('image3').style.display === "block"){
        document.getElementById('image3').style.display = "none";
    }
}

function red(){
    document.getElementById('image3').style.display = "block";
    document.getElementById('description').innerHTML = "Red Apple";    
    document.getElementById('description').style.color = "red";



    if ( document.getElementById('description').style.color === "green"){
        document.getElementById('description').style.color = "red";
    } 

    
    if ( document.getElementById('description').innerHTML === "Green Apple"){
        document.getElementById('description').innerHTML = "Red Apple"
    } 



    if ( document.getElementById('description').style.color === "#DEC503"){
        document.getElementById('description').style.color = "red";
    } 

    
    if ( document.getElementById('description').innerHTML === "Yellow Apple"){
        document.getElementById('description').innerHTML = "Green Apple"
    } 


    if ( document.getElementById('image2').style.display === "block"){
        document.getElementById('image2').style.display = "none";
    } 
    if ( document.getElementById('image').style.display === "block"){
        document.getElementById('image').style.display = "none";
    } else{
        document.getElementById('image').style.display = "none";
    } 
}