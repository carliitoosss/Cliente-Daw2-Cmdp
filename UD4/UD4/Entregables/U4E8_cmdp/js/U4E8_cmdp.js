class Email {
 enviar() {
 console.log("Enviando un correo electrónico");
 }
}
class SMS {
 enviar() {
 console.log("Enviando un SMS");
 }
}
class WhatsApp {
 enviar() {
 console.log("Enviando un WhatsApp");
 }
}
class Telegram {
 enviar() {
 console.log("Enviando un Telegram");
 }
}
const notificacion1 = new Email();
const notificacion2 = new SMS();
notificacion1.enviar();
notificacion2.enviar();
console.log("------------Clase fábrica------------")
class FabricaNotificaciones {
    static crear(tipo) {
    if (tipo === "Email") {
        return new Email();
    } else if (tipo === "SMS") {
        return new SMS();
    } else if (tipo === "WhatsApp") {
        return new WhatsApp();
    } 
    else if(tipo === "Telegram"){
        return new Telegram();
    }else {
        throw new Error("Tipo de notificación no válido");
    }
    }
}
const aviso1 = FabricaNotificaciones.crear("Email");
const aviso2 = FabricaNotificaciones.crear("SMS");
const aviso3 = FabricaNotificaciones.crear("WhatsApp");
const aviso4 = FabricaNotificaciones.crear("Telegram");
aviso1.enviar();
aviso2.enviar();
aviso3.enviar();
aviso4.enviar();

try {
    const aviso = FabricaNotificaciones.crear("Instagram");
    aviso.enviar();
} catch (error) {
    console.log(error.message);
}