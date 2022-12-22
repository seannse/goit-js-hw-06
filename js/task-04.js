const counter = {
    value: 0,

    increment() {
        this.value += 1;
    },

    decrement() {
        this.value -= 1;
    },
}

const refs = {
    incrBtn: document.querySelector('[data-action="increment"]'),
    decrBtn: document.querySelector('[data-action="decrement"]'),
    valueEl: document.querySelector('#value'),
    // targBtn: document.querySelector('[data-action="target"]'),
};

refs.decrBtn.addEventListener('click', () => {
    counter.decrement();
    refs.valueEl.textContent = counter.value;
})

refs.incrBtn.addEventListener('click', () => {
    counter.increment();
    refs.valueEl.textContent = counter.value;
})

// refs.incrBtn.addEventListener('click', (event) => {
//     console.log('targBtn has eventListener');
//     console.log(event);


//     refs.targBtn.addEventListener('click', ontargBtnClick)
// });

// refs.decrBtn.addEventListener('click', (event) => {
//     console.log('targBtn remove eventListener');
//     console.log(event);


//     refs.targBtn.removeEventListener('click', ontargBtnClick)
// });

// function ontargBtnClick(event) {
//     console.log('targBtn clicked');
// }