const digitLenght = digits.length;
for(let i = 0; i < digitLenght; i++){
    digits[i].addEventListener('click', () => {
        if(initialState.action == ''){
            if(initialState.first[0] == '0'){
            initialState.first = digits[i].getAttribute('data-value');
            }
            else{
                initialState.first += digits[i].getAttribute('data-value');
            }
        display.innerHTML = initialState.first;
        }
        else{
            if(initialState.second[0] == '0'){
                initialState.second = digits[i].getAttribute('data-value');
            }
            else{
                initialState.second += digits[i].getAttribute('data-value');
            }
            display.innerHTML = initialState.second;
        }
    })
}

///add event listener for actions
const actionsLenght = actions.length;
for(let i = 0; i < actionsLenght; i++){
    actions[i].addEventListener('click', () => {
        initialState.action = actions[i].getAttribute('data-action');
        console.log(initialState.action);
    })
}

pointt.addEventListener('click', () => {
    if(initialState.first) {
        let firstt = parseFloat(initialState.first += '.' + initialState.first2); 
        // point.initialState.first.removeEventListener();
    }
    if(initialState.second) {
       let secondd = parseFloat(initialState.second += '.' + initialState.second2);
    //    point.initialState.second.removeEventListener();
    }

})
changeZnach.addEventListener('click', () => {
    let x = -1;
    if(initialState.first) {
        initialState.first = initialState.first * x;
    }
    if(initialState.second){
        initialState.second = initialState.second * x;

    }
})


backspase.addEventListener('click', () => {
if(display.innerHTML == initialState.first){
    if(initialState.first.length == 1 || initialState.first.length ==2 && initialState.first.indexOf('-') !== -1)
        {
        initialState.first=0;
        }
    else{   if(initialState.first.slice(-2).indexOf('-') !== -1)
                initialState.first= initialState.first.slice(0, -2);
            else initialState.first = initialState.first.slice(0, -1);
            display.innerHTML = initialState.first;
        }
}   else{
    if(initialState.second.length == 1 || initialState.second.length ==2 && initialState.second.indexOf('-') !== -1)
        {
        initialState.second=0;
        }
    else{    if(initialState.second.slice(-2).indexOf('-') !== -1)
                initialState.second = initialState.second.slice(0, -2);
            else initialState.second = initialState.second.slice(0, -1);
            display.innerHTML = initialState.second;
        }
    }
})

clear.addEventListener('click', () => {
    initialState.first= '';
    initialState.second= '';
    initialState.first2= '';
    initialState.second2= '';
    initialState.action='';
    initialState.result= '';
    display.innerHTML = '';
})

//add event listener for button of result
equally.addEventListener('click', () => {
    let readyFirst = parseFloat(initialState.first);
    let readySecond = parseFloat(initialState.second);
    let x = -1;
        switch (initialState.action) {
            case 'plus':
            display.innerHTML = readyFirst + readySecond;
                break;
            case 'minus':
                display.innerHTML = readyFirst - readySecond;
                break;
            case 'multiply':
                display.innerHTML = readyFirst * readySecond;
            break;
            case 'division':
                display.innerHTML = readyFirst / readySecond;
            break;
            case 'kvadrat':
                display.innerHTML = readyFirst * readyFirst;
            break;
            case 'prozent':
                display.innerHTML = readyFirst - (readyFirst /100) * readySecond;
            break;
                default:
                    break;
        }
        if(equally != 0){
            initialState.first = equally;
    }

    initialState.action = '';
    initialState.first = '0';
    initialState.second = '0';
})