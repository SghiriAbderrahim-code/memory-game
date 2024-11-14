var level = 1;
var RandomArr = [];
var check = false;
var click = 0;
var start = document.getElementById('start');
start.addEventListener('click', randArr);
var cells = document.querySelectorAll('.cell');
cells.forEach((cell,i)=>{

    cell.addEventListener('click', ()=>{
        console.log(click);
        if(check){
if(RandomArr[click] === i){
    cells[i].style.backgroundColor= 'rgb(2, 250, 2)';
    click++;
    if(click >=level+2){
        check = false;
setTimeout(()=>{
    level++;
cells.forEach((elem)=>{
    elem.style='';
})
document.getElementById('level').innerHTML=level;
start.innerHTML='start';
start.disabled = false;
RandomArr = [];
click = 0;
},2000)

    }
}else{
    cells[i].style.backgroundColor= 'red';
    RandomArr.forEach((e)=>{
    cells[e].style.opacity= 0.5;
    });
    check = false;
    setTimeout(()=>{   
    cells.forEach((elem)=>{
        elem.style='';
    });
    start.innerHTML='start';
    start.disabled = false;
    RandomArr = [];
    click= 0;
    },2000)
}
    }
    });

});
function randArr(){
    start.innerHTML='∅';
    start.disabled = true;
    while (RandomArr.length < level+2) {
        let val = Math.floor(Math.random()*9);
        if(!RandomArr.includes(val)){
RandomArr.push(val);
        }
    }
    display();
}

async function display(){
    let rank = 0;
   let set = setInterval(async ()=>{
    if (rank >= RandomArr.length) {
        
        clearInterval(set);
        check = true;
        
    }
cells[RandomArr[rank]].style.opacity= 0.5;
const sett = await setTimeout(()=>{
    cells[RandomArr[rank]].style.opacity= 1;
    rank++;
},600);
console.log(rank);
    },2000);
    
}








