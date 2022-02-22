function removeContactAccept01(){
    let contacto = document.getElementById("contactRow01");
    let boton = document.getElementById("contactButtonRow01");
    let numConnections = document.getElementById("numConections");
    numConnections.innerHTML = parseInt(numConnections.innerHTML) + 1;
    let numConnReq = document.getElementById("numConnReq");
    numConnReq.innerHTML = parseInt(numConnReq.innerHTML) - 1;
    contacto.remove();
    boton.remove();
}

function removeContactCancel01(){
    let contacto = document.getElementById("contactRow01");
    let boton = document.getElementById("contactButtonRow01");
    let numConnReq = document.getElementById("numConnReq");
    numConnReq.innerHTML = parseInt(numConnReq.innerHTML) - 1;
    contacto.remove();
    boton.remove();
    console.log(contacto)
}

function removeContactAccept02(){
    let contacto = document.getElementById("contactRow02");
    let boton = document.getElementById("contactButtonRow02");
    let numConnections = document.getElementById("numConections");
    numConnections.innerHTML = parseInt(numConnections.innerHTML) + 1;
    let numConnReq = document.getElementById("numConnReq");
    numConnReq.innerHTML = parseInt(numConnReq.innerHTML) - 1;
    contacto.remove();
    boton.remove();
}


function removeContactCancel02(){
    let contacto = document.getElementById("contactRow02");
    let boton = document.getElementById("contactButtonRow02");
    let numConnReq = document.getElementById("numConnReq");
    numConnReq.innerHTML = parseInt(numConnReq.innerHTML) - 1;
    contacto.remove();
    boton.remove();
}

function ChangeName(){
    let nombre = document.getElementById("userName");
    nombre.innerHTML = "Jhonny Quiliche";
    console.log(nombre)
}