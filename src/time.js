const hora = () => {
    let today = new Date();
    let mm = String(today.getMinutes()).padStart(2, '0'); 
    let hr = String(today.getHours()).padStart(2, '0'); 
    let ss = String(today.getSeconds()).padStart(2, '0'); 
    today = `${hr}:${mm}:${ss}`;
    return today;
}

const fechaCompleta = () => {
    let array = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    const fecha = new Date();
    let day = array[fecha.getDay()];
    let Hora = hora();  
    
    const fechafinal = `${day} ${fecha.getDate()} ${fecha.getFullYear()} ${Hora}`;
    return fechafinal;
}

export default {hora, fechaCompleta};