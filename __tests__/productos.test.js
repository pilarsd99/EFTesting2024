const filtrarProductos = require('../js/productos');

// Escribir los tests debajo
describe('filtrarProductos', () => {
    // Datos de prueba
    const productosTest = [
        {
            "id": "abrigo-01",
            "titulo": "Campera 1",
            "imagen": "./img/campera-01.jpg",
            "categoria": "camperas",
            "precio": 1000
        },
        {
            "id": "abrigo-05",
            "titulo": "Campera 5",
            "imagen": "./img/campera-05.jpg",
            "categoria": "camperas",
            "precio": 1000
        },
        {
            "id": "camiseta-08",
            "titulo": "Remera 8",
            "imagen": "./img/remera-08.jpg",
            "categoria": "remeras",
            "precio": 1000
        },
        {
            "id": "pantalon-05",
            "titulo": "Pantalón 05",
            "imagen": "./img/pantalon-05.png",
            "categoria": "pantalones",
            "precio": 1000
        }
    ];

    test('Manejo de array vacio', ()=>{
        const resultado = filtrarProductos([],'pantalones');
        expect(resultado).toHaveLength(0);
    });
    test('Manejo de categoría no existente', ()=>{
        const resultadoOtro = filtrarProductos(productosTest,'gorros');
        expect(resultadoOtro).toHaveLength(0);
    });
    test('filtra correctamente por categoría camperas', () => {
        const resultadoCamperas = filtrarProductos(productosTest, 'camperas');
        expect(resultadoCamperas).toHaveLength(2);
        expect(resultadoCamperas).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ categoria: 'camperas' })
            ])
        );
    });
       // Test para que falle la funcion
    test('filtra correctamente por categoría camperas', () => {
        const resultadoCamperas = filtrarProductos(productosTest,'CAMPERAS');
        expect(resultadoCamperas).toHaveLength(2);
        expect(resultadoCamperas).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ categoria: 'CAMPERAS' })
            ])
        );
    }); 
});
