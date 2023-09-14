export function formatPrice(stringPrice) {
    if (typeof stringPrice === 'number') {
        stringPrice = stringPrice.toFixed(2); // Redondeamos el número a 2 decimales
        const partes = stringPrice.split('.');
        const parteEntera = partes[0];
        const parteDecimal = partes[1];

        let resultado = '';
        let contador = 0;

        for (let i = parteEntera.length - 1; i >= 0; i--) {
            resultado = parteEntera[i] + resultado;
            contador++;
            if ((contador % 3 === 0) && i !== 0) {
                resultado = '.' + resultado;
            }
        }

        stringPrice = resultado + ',' + parteDecimal;

        return stringPrice;
    } else {
        return 'Por favor, proporciona un número válido.';
    }
}
