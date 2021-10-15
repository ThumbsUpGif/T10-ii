console.log('Hello World :-)')


const paragraphs = document.querySelectorAll('.anim1')

observer = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `anim1 .6s ${entry.target.dataset.delay} forwards ease`
            observer.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

paragraphs.forEach(paragraph => {
    observer.observe(paragraph)
})

const subheadings = document.querySelectorAll('.anim2')

observer = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `anim2 0.3s ${entry.target.dataset.delay} forwards ease`
            observer.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

subheadings.forEach(subheading => {
    observer.observe(subheading)
})

paragraphs.forEach(paragraph => {
    observer.observe(paragraph)
})

const images = document.querySelectorAll('.anim3')

observer = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `anim3 .8s ${entry.target.dataset.delay} forwards ease-out`
            observer.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

images.forEach(image => {
    observer.observe(image)
})

const boxes = document.querySelectorAll('.anim4')

observer = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `anim4 .6s ${entry.target.dataset.delay} forwards ease`
            observer.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

boxes.forEach(box => {
    observer.observe(box)

})


const graphics = document.querySelectorAll('.anim5')

observer = new IntersectionObserver((entries) => {
console.log(entries);

entries.forEach(entry => {
if (entry.intersectionRatio > 0) {
    entry.target.style.animation =
        `anim5 1s ${entry.target.dataset.delay} forwards linear`
    observer.unobserve(entry.target)
} else {
    entry.target.style.animation = `none`;
}
})
})

graphics.forEach(graphic => {
observer.observe(graphic)
})        


const icons = document.querySelectorAll('.anim6')

observer = new IntersectionObserver((entries) => {
console.log(entries);

entries.forEach(entry => {
if (entry.intersectionRatio > 0) {
    entry.target.style.animation =
        `results-svg 0.6s ${entry.target.dataset.delay} forwards linear`
    observer.unobserve(entry.target)
} else {
    entry.target.style.animation = `none`;
}
})
})

icons.forEach(icon => {
observer.observe(icon)
})        

