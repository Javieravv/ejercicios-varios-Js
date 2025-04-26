console.clear()
console.log("EJERCICIOS CON GROUP BY")

const personas = [
    {
      "nombres": "Juan",
      "apellidos": "Pérez",
      "edad": 34,
      "ciudad": "Madrid",
      "profesion": "Ingeniero",
      "sexo": "masculino"
    },
    {
      "nombres": "María",
      "apellidos": "Gómez",
      "edad": 28,
      "ciudad": "Barcelona",
      "profesion": "Diseñadora",
      "sexo": "femenino"
    },
    {
      "nombres": "Carlos",
      "apellidos": "López",
      "edad": 45,
      "ciudad": "Sevilla",
      "profesion": "Médico",
      "sexo": "masculino"
    },
    {
      "nombres": "Ana",
      "apellidos": "Martínez",
      "edad": 30,
      "ciudad": "Málaga",
      "profesion": "Profesora",
      "sexo": "femenino"
    },
    {
      "nombres": "Luis",
      "apellidos": "Rodríguez",
      "edad": 22,
      "ciudad": "Murcia",
      "profesion": "Arquitecto",
      "sexo": "masculino"
    },
    {
      "nombres": "Sofía",
      "apellidos": "Hernández",
      "edad": 29,
      "ciudad": "Madrid",
      "profesion": "Psicóloga",
      "sexo": "femenino"
    },
    {
      "nombres": "Pedro",
      "apellidos": "Díaz",
      "edad": 40,
      "ciudad": "Barcelona",
      "profesion": "Programador",
      "sexo": "masculino"
    },
    {
      "nombres": "Laura",
      "apellidos": "Fernández",
      "edad": 33,
      "ciudad": "Sevilla",
      "profesion": "Ingeniero",
      "sexo": "femenino"
    },
    {
      "nombres": "Diego",
      "apellidos": "Sánchez",
      "edad": 27,
      "ciudad": "Málaga",
      "profesion": "Diseñadora",
      "sexo": "masculino"
    },
    {
      "nombres": "Elena",
      "apellidos": "Ruiz",
      "edad": 31,
      "ciudad": "Murcia",
      "profesion": "Médico",
      "sexo": "femenino"
    },
    {
      "nombres": "Juan",
      "apellidos": "Pérez",
      "edad": 25,
      "ciudad": "Madrid",
      "profesion": "Ingeniero",
      "sexo": "masculino"
    },
    {
      "nombres": "María",
      "apellidos": "Gómez",
      "edad": 30,
      "ciudad": "Barcelona",
      "profesion": "Diseñadora",
      "sexo": "femenino"
    },
    {
      "nombres": "Carlos",
      "apellidos": "López",
      "edad": 22,
      "ciudad": "Madrid",
      "profesion": "Ingeniero",
      "sexo": "masculino"
    },
    {
      "nombres": "Ana",
      "apellidos": "Martínez",
      "edad": 28,
      "ciudad": "Sevilla",
      "profesion": "Médico",
      "sexo": "femenino"
    },
    {
      "nombres": "Luis",
      "apellidos": "Rodríguez",
      "edad": 35,
      "ciudad": "Barcelona",
      "profesion": "Diseñadora",
      "sexo": "masculino"
    },
    {
      "nombres": "Sofía",
      "apellidos": "Hernández",
      "edad": 27,
      "ciudad": "Málaga",
      "profesion": "Profesora",
      "sexo": "femenino"
    },
    {
      "nombres": "Pedro",
      "apellidos": "Díaz",
      "edad": 40,
      "ciudad": "Madrid",
      "profesion": "Arquitecto",
      "sexo": "masculino"
    },
    {
      "nombres": "Laura",
      "apellidos": "Fernández",
      "edad": 33,
      "ciudad": "Murcia",
      "profesion": "Psicóloga",
      "sexo": "femenino"
    },
    {
      "nombres": "Diego",
      "apellidos": "Sánchez",
      "edad": 29,
      "ciudad": "Barcelona",
      "profesion": "Programador",
      "sexo": "masculino"
    },
    {
      "nombres": "Elena",
      "apellidos": "Ruiz",
      "edad": 31,
      "ciudad": "Sevilla",
      "profesion": "Médico",
      "sexo": "femenino"
    },
    {
      "nombres": "Juan",
      "apellidos": "Pérez",
      "edad": 25,
      "ciudad": "Madrid",
      "profesion": "Ingeniero",
      "sexo": "masculino"
    },
    {
      "nombres": "María",
      "apellidos": "Gómez",
      "edad": 30,
      "ciudad": "Barcelona",
      "profesion": "Diseñadora",
      "sexo": "femenino"
    },
    {
      "nombres": "Carlos",
      "apellidos": "López",
      "edad": 22,
      "ciudad": "Madrid",
      "profesion": "Ingeniero",
      "sexo": "masculino"
    },
    {
      "nombres": "Ana",
      "apellidos": "Martínez",
      "edad": 28,
      "ciudad": "Sevilla",
      "profesion": "Médico",
      "sexo": "femenino"
    },
    {
      "nombres": "Luis",
      "apellidos": "Rodríguez",
      "edad": 35,
      "ciudad": "Barcelona",
      "profesion": "Diseñadora",
      "sexo": "masculino"
    }
  ]

// console.log(personas)
// const personasCiudad = Object.groupBy( personas, persona => {
//     return persona.ciudad
// } )

const personasSexo = Object.groupBy( personas, persona => {
    return persona.nombres
})

// console.log(personasCiudad)
console.log(personasSexo)
