function prueba() {
    let bebidas = [
        { id: 1, nombre: 'Jagger', cantidad: 200, precio: 1500 },
        { id: 2, nombre: 'Cerveza', cantidad: 300, precio: 200 },
        { id: 3, nombre: 'Vino', cantidad: 400, precio: 50 },
        { id: 4, nombre: 'Ron', cantidad: 200, precio: 800 },
        { id: 5, nombre: 'Whisky', cantidad: 180, precio: 1000 },
        { id: 6, nombre: 'Gin', cantidad: 500, precio: 1200 },
        { id: 7, nombre: 'Vodka', cantidad: 1000, precio: 900 },
        { id: 8, nombre: 'Tequila', cantidad: 120, precio: 300 },
    ];

    let objetoEjemplo = {
        propiedad1: 'valor1',
        propiedad2: 'valor2',
        propiedad3: ['elemento1', 'elemento2', 'elemento3'],
        propiedad4: { subpropiedad1: 'subvalor1', subpropiedad2: 'subvalor2' },
        propiedad5: 100,
        propiedad6: true,
    };

    bebidas.sort((a, b) => a.precio - b.precio);

    let producto = prompt('Ingrese la bebida');
    let suma = 0;

    while (producto.toUpperCase() !== 'ESC') {
        let bebidaEncontrada = bebidas.find((bebida) => bebida.nombre.toLowerCase() === producto.toLocaleLowerCase());

        if (bebidaEncontrada) {
            suma += bebidaEncontrada.precio;
            console.log(bebidaEncontrada.nombre + ': $' + bebidaEncontrada.precio);
            console.log('Stock disponible: ' + bebidaEncontrada.cantidad);
            alert('Bebida encontrada, valor: $' + bebidaEncontrada.precio);
        } else {
            alert('Bebida no encontrada. Se ignorará el producto: ' + producto);
            console.log('Bebida no encontrada. Se ignorará el producto: ' + producto);
        }

        producto = prompt('Ingrese la bebida');
    }

    alert('El total a gastar es: $' + suma);
}

prueba();