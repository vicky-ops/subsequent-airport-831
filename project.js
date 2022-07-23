

let input = document.getElementById("searchtab")

input.addEventListener("keyup",(el)=>{
if(el.keyCode===13){
    // console.log(el.target.value)
    window.location.href="page2.html"
}

})


// slider js
let left = 1 ;
let right = 5 ;

function show(){
    for(let i=left ; i<=right ;i++){
        document.getElementById("c"+i).style.display="inline-block";
    }
}

function moveleft(){
if(left<=3 && right <=7)
{


document.getElementById("c"+left).style.display="none"
left+=1;
right+=1;

for(let i=left ; i<=right ;i++){
        document.getElementById("c"+i).style.display="inline-block";
    }

}
else 
    return ;
 

}

function moveright(){
if(left>= 2 && right >=6)
{


document.getElementById("c"+right).style.display="none"
left-=1;
right-=1;

for(let i=left ; i<=right ;i++){
        document.getElementById("c"+i).style.display="inline-block";
    }

}
else 
    return ;
 

}

var splide = new Splide( '.sp2', {
    type   : 'loop',
    perPage: 4,
    perMove: 4,
  } );
  
  splide.mount();