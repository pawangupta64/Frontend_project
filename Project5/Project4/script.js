var tl = gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.2,
    duration:0.5,
    delay:0.2,
    
})
 
tl.from("#count",{
    opacity:0,
    onStart: function(){
         var count = document.querySelector("#count h4");
 var counting = 0;
setInterval(function(){
  if(counting<100){
    counting++
    count.innerHTML = counting
  }
  else{
    count.innerHTML = counting
  }
},33)
    }
})

tl.to(".line h2",{
    animationName:'anime',
    opacity:1
})

tl.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:4
})

tl.from("#page1",{
    y:1500,
    opacity:0,
    delay:0.25,
    ease:Power4
})

tl.to("#loader",{
    display:"none"
})

tl.from(".nav-part1 h1, .nav-part2 h4 , #nav" ,{
    y:-150,
    ease:Power4

})

tl.from("#hero1 h1, #hero2 h1 , #hero4 h1",{
    y:150,
    stagger:0.2,
    // delay:0.3,
    // duration:0.5,
    ease:Power4
})
tl.from(".text #hero3 h3",{
    y:150,
    // stagger:0.2,
    // delay:0.3,
    // duration:0.5,
    ease:Power4
})


document.addEventListener("mousemove",function(dets){
    gsap.to("#crsr",{
        left:dets.x,
        top:dets.y
    })
})


// Shery.makeMagnet(" #nav .nav-part2 h4");
