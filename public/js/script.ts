const qS = (el: string) => document.querySelector(el);
const qSa = (el: string)=>document.querySelectorAll(el);

qSa('.item--image').forEach(item => {
    item.addEventListener('click', showDate)
});

function showDate(e: any){
    let itemDice = e.target.closest('.item').querySelector('.item--dice')
    if(itemDice.style.display == 'flex') {
        itemDice.style.opacity = 0
        setTimeout(() => {
            itemDice.style.display = 'none'
        }, 350);
    }else {
        itemDice.style.opacity = 0
        itemDice.style.display = 'flex'
        setTimeout(() => {
            itemDice.style.opacity = 1
        }, 200);
    }
};

