let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

let changeColor = document.querySelector('a:nth-of-type(1)')
changeColor.addEventListener('click', colorChange)
function colorChange() { 
  changeColor.classList.toggle('color')
}

let blurEffect = document.querySelector('a:nth-of-type(2)')
blurEffect.addEventListener('dblclick', blur)
function blur() {
  blurEffect.classList.toggle('blur')
}

let jumpAction = document.querySelector('a:nth-of-type(3)')
jumpAction.addEventListener('mouseenter', jumpUp)
function jumpUp() {
  jumpAction.classList.toggle('jumper')
}

let development = document.querySelector('a:nth-of-type(4)')
development.addEventListener('keydown', develop)
function develop() { 
  development.classList.toggle('rotate')
}

let sprint5 = document. querySelector('a:nth-of-type(5)')
sprint5.addEventListener('keyup', sprint)
function sprint() {
  sprint5.classList.toggle('flip')
}

let fix = document.querySelector('a:nth-of-type(6)')
fix.addEventListener('wheel', fixed)
function fixed() { 
  fix.classList.toggle('fix')
}

let the = document.querySelector('a:nth-of-type(7)')
document.addEventListener('keydown', function(event) {
  if (event.key == 'a') { the.classList.toggle('spin')
} } )




let flow = document.querySelector('a:nth-of-type(8)')
let timeout
flow.addEventListener('mousedown', function() {
  //set timer voor 1 seconde wanneer knop ingedrukt wordt 
 timeout = setTimeout(() => { 
  flows()
 }, 1000)
})

// reset timer als knop losgelaten wordt binnen 1 seconde 
flow.addEventListener('mouseup', function(){
  clearTimeout(timeout)
})

function flows() { 
  flow.classList.toggle('color')
}



let user = document.querySelector('a:nth-of-type(9)')
user.addEventListener('paste', users)
function users() { 
  user.classList.toggle('color')
}

let interFace = document.querySelector('a:nth-of-type(10)')
interFace.addEventListener('mousemove', faces)
function faces() { 
  interFace.classList.toggle('color')
}

