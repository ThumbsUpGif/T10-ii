console.log('Hello World :-)')


const paragraphs = document.querySelectorAll('.anim1')

observer = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `anim1 .5s ${entry.target.dataset.delay} forwards ease`
            observer.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

paragraphs.forEach(paragraph => {
    observer.observe(paragraph)
})


/// GENERAL

///// H3 items ////
const subheadings = document.querySelectorAll('.anim-subheading')

observer = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `anim-subheading 0.3s ${entry.target.dataset.delay} forwards ease`
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

subheadings.forEach(subheading => {
    observer.observe(subheading)
})


///// all spacers /////

const spacers = document.querySelectorAll('.anim-spacer')

observer = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `anim-spacer 1s ${entry.target.dataset.delay} forwards ease`
            observer.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

spacers.forEach(spacer => {
    observer.observe(spacer)
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


// SECTION 2 - When

const whens = document.querySelectorAll('.anim-when')

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

whens.forEach(when => {
    observer.observe(when)
})


const colourBox2 = document.querySelectorAll('.about__colourbox')

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

colourBox2.forEach(boxII => {
observer.observe(boxII)
})    



// SECTION 3 - You

///// Green colourbox //////

const colourBox3 = document.querySelectorAll('.you__colourbox')

observer = new IntersectionObserver((entries) => {
console.log(entries);

entries.forEach(entry => {
if (entry.intersectionRatio > 0) {
    entry.target.style.animation =
        `anim5 1s ${entry.target.dataset.delay} animation-iteration-count:1 forwards linear`
    observer.unobserve(entry.target)
} else {
    entry.target.style.animation = `none`;
}
})
})

colourBox3.forEach(boxIII => {
observer.observe(boxIII)
})       







// SECTION 4 - Results

////List Items //////

const listItems = document.querySelectorAll('.anim-list-item')

observer = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation =
                `anim-list-item .4s ${entry.target.dataset.delay} forwards ease`
            observer.unobserve(entry.target)
        } else {
            entry.target.style.animation = `none`;
        }
    })
})

listItems.forEach(listItem => {
    observer.observe(listItem)
})


////Icons inside List Items //////

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
