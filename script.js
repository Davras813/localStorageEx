// localStorage.setItem("llave", `$([1,2,3])`)
localStorage.setItem("llave", [1,2,3])

let consulta = [
        {
            username: "carlosReact",
            password: "react1ero",
            email: "ilobreact@mail.com",
            active: true
        },
        {
            username: "danielaBootstrap",
            password: "compaq",
            email: "sweet@mail.com",
            active: false
        }
    ]

    let jsonString = JSON.stringify(consulta[0]);
    console.log(jsonString);

    // let arrayString=consulta.toString()
    let arrayString=JSON.parse()
    console.log(arrayString)

    //Se le solicita al aspirante la construcción de un formulario con las siguientes características.
    //1. Nombres y apellidos.
    //2. Aspiración salarial.
    //3. Correo electrónico.
    //4. Genero.
    //5. Cargo a ocupar (Entre los cargos disponibles: Desarrollador, Gerente de proyecto, Líder administrativo, Conductor, Otro). En caso dado de que se seleccione la opción otro, se habilita un nuevo campo que le permita al usuario escribir el cargo.    
    // Al dar click el boton guardar, este debe almacenar en un objeto tipo JsOn, dentro de una lista y deberá vaciar el formulario para un nuevo registro.
    //Restricciones, todos los campos deben ser obligatorios, 
    //6. 