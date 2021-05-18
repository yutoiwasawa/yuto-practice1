const target = document.getElementById('hoberButton');

target.addEventListener('mouseover',()=>{
target.style.background = 'blue';
console.log('hober');
},false);

target.addEventListener('mouseleave',()=>{
    target.style.background = 'rgb(250, 116, 116)';
    console.log('hober2');
    },false);
