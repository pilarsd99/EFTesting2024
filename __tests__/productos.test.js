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

    test('filtra correctamente por categoría camperas', () => {
        const resultadoCamperas = filtrarProductos(productosTest, 'camperas');
        expect(resultadoCamperas).toHaveLength(2);
        expect(resultadoCamperas).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ categoria: 'camperas' })
            ])
        );
    });
    test('Filtrar correctamente por categoría remeras', ()=>{
        const resultadoRemeras = filtrarProductos(productosTest,'remeras');
        expect(resultadoRemeras).toHaveLength(1);
        expect(resultadoRemeras).toEqual(
            expect.arrayContaining([
                expect.objectContaining({categoria:'remeras'})
            ])
        );
    });
    test('Filtrar correctamente por categoría pantalones', ()=>{
        const resultadoPantalones = filtrarProductos(productosTest,'pantalones');
        expect(resultadoPantalones).toHaveLength(1);
        expect(resultadoPantalones).toEqual(
            expect.arrayContaining([
                expect.objectContaining({categoria:'pantalones'})
            ])
        );
    });
});
