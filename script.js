const envoltura = document.querySelector('.envoltura');
const carta = document.querySelector('.carta');

document.addEventListener('click', (e) => {
    if (e.target.matches('.sobre') || e.target.matches('.solapai') || e.target.matches('.solapad')|| e.target.matches('.corazon')) {
        envoltura.classList.toggle('abierto');
        envoltura.classList.add('desactivar');


        if (!carta.classList.contains('abierta')) {
            setTimeout(() => {
                carta.classList.add('mostrar-carta');
                setTimeout(() => {
                carta.classList.remove('mostrar-carta');
                    carta.classList.add('abierta');
                
            }, 500);
            }, 1000);
            
        }
    } else if (e.target.matches('.envoltura *')) {
        envoltura.classList.remove('abierto');
        envoltura.classList.remove('desactivar');
        if (carta.classList.contains('abierta')) {
            carta.classList.add('cerrado');
            setTimeout(() => {
                carta.classList.remove('cerrado');
                carta.classList.remove('abierta');
            }, 500);
        }
    }
});