let myPopWindow = document.getElementById("my-pop");
var submited = false;
document.getElementById("my-pop-btn").addEventListener("click",function(){
    myPopWindow.classList.add("pop-up")
})
document.getElementById("popback").addEventListener("click",function(){
    myPopWindow.classList.remove("pop-up")
})
let myMobileMenu = document.getElementById("mobile-nav");
document.getElementById("my-burger").addEventListener("click", function(){
    myMobileMenu.classList.add("mobile-nav-active");
})
document.getElementById("my-back-btn").addEventListener("click", function(){
    myMobileMenu.classList.remove("mobile-nav-active");
})
/*animation*/
function contentAnimation(){
    var tl = gsap.timeline();
    tl.from('section.act', {duration: 1.5, translateY: 50, opacity: 0})
    tl.to('img', {clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"})
}
function pageTransition(){
    var tl = gsap.timeline();
    tl.to('section.we', {duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2})
    tl.to('section.we', {duration: .5, scaleY: 0,transformOrigin: "bottom left", stagger: .1, delay: .1})
}
function delay(n){
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}
barba.init({
    sync: true,
    transitions :[{
        async leave(data){
            const done = this.async;
            pageTransition();
            await DelayNode(1500);
            done();
        },
        async enter(data){
            contentAnimation();
        },
        async once(data){
            contentAnimation();
        }
    }]
})
  