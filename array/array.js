console.log(typeof Array, typeof new Array, typeof []);

let animais = new Array('Cachorro', 'Gato', 'Raposa');
console.log(animais);

animais = ['Cachorro', 'Gato', 'Lobo'];
console.log(animais[0]);
console.log(animais[1]);
console.log(animais[2]);
console.log(animais[3]);

animais[3] = 'Raposa';
animais.push('Tigre');
console.log(animais.length);

animais[9] = 'Urso';
console.log(animais.length);
console.log(animais[8] === undefined);

console.log(animais);
animais.sort();
console.log(animais);

animais = ['Cachorro', 'Gato', 'Lobo'];
animais.splice(1, 1, 'Raposa');
console.log(animais);