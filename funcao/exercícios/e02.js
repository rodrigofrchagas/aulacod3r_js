function classificarTriangulo (x, y, z) {
    if (x === y && x === z && y === z) {
        return 'Equilátero';
    }
    else if (x === y || y === z || x === z) {
        return 'Isóceles';
    }
    else if (x !== y && y!== z && z !== x) {
        return 'Escaleno';
    }
    else {
        return 'Operação inválida';
    }
}

console.log(classificarTriangulo(3, 3, 3));