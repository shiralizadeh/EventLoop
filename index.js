setTimeout(() => {
    clickMe.innerText = Date.now();
    console.log('timer 1');
});

setTimeout(() => {
    clickMe.innerText = Date.now();
    console.log('timer 2');
});

requestAnimationFrame(() => console.log('req'))