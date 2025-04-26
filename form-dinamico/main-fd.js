console.log('Formulario dinámico...')

const fragment = document.createDocumentFragment()
const listitemsForm = document.getElementById('listitems-form')
const btnAgregar = document.getElementById('btn-agregar')
const btnEnviar = document.getElementById('btn-enviar')

const eliminarItem = () => {
    console.log('Eliminaremos un Item...')
}

const leerInputs = () => {
    /*
    // Este fue mi código
    let listDirecciones = [], listEmails = [], data = []
    const direcciones = document.querySelectorAll('.direccion')
    const emails = document.querySelectorAll('.email')
    direcciones.forEach( direccion => listDirecciones.push(direccion.value))
    emails.forEach( email => listEmails.push( email.value) )
    listDirecciones.forEach( (item, index) => {
        data.push({
            'indice': index,
            'direccion': item,
            'email': listEmails[index]
        })
    })
    console.log(data)*/

    const data = [];
    const elementosItemForm = document.querySelectorAll('.item-form'); // Obtener todos los .item-form

    elementosItemForm.forEach((itemForm, index) => {
        const inputDireccion = itemForm.querySelector('.direccion');
        const inputEmail = itemForm.querySelector('.email');

        if (inputDireccion && inputEmail) { // Verificar si los inputs existen
            data.push({
                indice: index,
                direccion: inputDireccion.value,
                email: inputEmail.value
            });
        }
    });

    console.log(data);

}

const crearInputs = () => {
    console.log('Creamos una nueva entrada...')
    const newDiv = document.createElement('div')
    newDiv.classList.add('item-form')
    newDiv.innerHTML = `
        <article>
            <div>
                <label for="">Dirección</label>
                <input type="text" class="direccion">
            </div>
            <div>
                <label for="">Correo electrónico</label>
                <input type="email" class="email">
            </div>
        </article>
        <div class="eliminar">
            <button class="btn btn-eliminar" type="reset">Eliminar</button>
        </div>
    `
    fragment.appendChild(newDiv)
    listitemsForm.appendChild(fragment)

    listitemsForm.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-eliminar')) {
            console.log('PENSAMOS ELIMINAR ESTE NODO...')
            const itemForm = event.target.closest('.item-form')
            if (itemForm) {
                itemForm.remove()
            }
        }
    })
}

btnAgregar.addEventListener('click', (event) => {
    event.preventDefault()
    crearInputs()
})

btnEnviar.addEventListener('click', (event) => {
    event.preventDefault()
    leerInputs()
})



crearInputs()