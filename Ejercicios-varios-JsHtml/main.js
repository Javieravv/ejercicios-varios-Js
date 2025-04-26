console.log("Hola...Nuevo Div")

const fragment = document.createDocumentFragment()
const seccion = document.getElementById('seccion')

for (let i = 0; i < 100; i++) {
    const newDiv = document.createElement('div')
    newDiv.textContent = `${i+1}`
    newDiv.classList.add('div')
    fragment.appendChild(newDiv)
    seccion.appendChild(fragment)
}

// document.body.appendChild(fragment)

