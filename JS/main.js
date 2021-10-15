console.log('Hello World :-)')



// inView('.when_text')
// .on('enter', el => div.classList.add('red-background'))
// .on('exit', el => div.classList.remove('red-background'))


const textToRed = document.querySelector('.introduce-fund')
const graphicOne = document.querySelector('.graphic--1')

console.log(graphicOne)
console.log(textToRed)

inView('.graphic--1')
.on('enter', el => {
textToRed.classList.add('red-background')
})
.on('exit', el => {
textToRed.classList.remove('red-background')
});


