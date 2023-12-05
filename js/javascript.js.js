window.addEventListener('load', function() {

    const stepsImages = document.querySelectorAll('.check-steps > div');

    for (let i = 1; i < stepsImages.length; i++) {
        stepsImages[i].style.display = 'none';
    }
});

function myFunction1(){
    document.getElementById("first").style.display ='block'
    document.getElementById("second").style.display ='none'
    document.getElementById("third").style.display ='none'
    document.getElementById("fourth").style.display ='none'
    document.getElementById("fifth").style.display ='none'
    document.getElementById("sixth").style.display ='none'
}

function myFunction2(){
    document.getElementById("first").style.display ='none'
    document.getElementById("second").style.display ='block'
    document.getElementById("third").style.display ='none'
    document.getElementById("fourth").style.display ='none'
    document.getElementById("fifth").style.display ='none'
    document.getElementById("sixth").style.display ='none'
}

function myFunction3(){
    document.getElementById("first").style.display ='none'
    document.getElementById("second").style.display ='none'
    document.getElementById("third").style.display ='block'
    document.getElementById("fourth").style.display ='none'
    document.getElementById("fifth").style.display ='none'
    document.getElementById("sixth").style.display ='none'
}

function myFunction4(){
    document.getElementById("first").style.display ='none'
    document.getElementById("second").style.display ='none'
    document.getElementById("third").style.display ='none'
    document.getElementById("fourth").style.display ='block'
    document.getElementById("fifth").style.display ='none'
    document.getElementById("sixth").style.display ='none'
}

function myFunction5(){
    document.getElementById("first").style.display ='none'
    document.getElementById("second").style.display ='none'
    document.getElementById("third").style.display ='none'
    document.getElementById("fourth").style.display ='none'
    document.getElementById("fifth").style.display ='block'
    document.getElementById("sixth").style.display ='none'
}