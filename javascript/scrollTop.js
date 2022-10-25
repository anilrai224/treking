let calScrollValue = ()=>{
    let top = document.getElementById('scrollUp');
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight-document.documentElement.clientHeight;
    let scrollValue = Math.round(pos*100)/calcHeight;
    if(pos > 100){
        top.style.display = "flex";
    }else{
        top.style.display = "none";
    }
    top.addEventListener('click',()=>{
        document.documentElement.scrollTop = 1;
    })
    top.style.background = `conic-gradient(#000 ${scrollValue}% , #d7d7d7 ${scrollValue}%)`
};
window.onscroll = calScrollValue;
window.onload = calScrollValue;