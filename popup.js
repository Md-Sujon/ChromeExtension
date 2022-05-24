const actions = Array.from(
    document.querySelectorAll('[data-action]')
    );
let counter = localStorage.getItem('counter') || 0;
document.querySelector('.counter-value').innerText = counter;


actions.forEach(action =>{
    action.addEventListener('click',() =>{
        const Type = action.dataset.action;
        
switch(Type){
    case 'increase':
        counter++;
        localStorage.setItem('counter',counter);
        break;
    case 'decrease':
            counter--;
            localStorage.setItem('counter',counter);
             break;
    case 'reset':
        counter = 0;
        localStorage.clear();
        break;
}
document.querySelector('.counter-value').innerText = counter;
    });
});





