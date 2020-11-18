// não aceita repetição/não indexada
const times = new Set();
times.add('Flamengo');
times.add('São Paulo').add('Palmeiras').add('Cruzeiro');
times.add('Internacional');
times.add('Flamengo');

console.log(times);
console.log(times.size);
console.log(times.has('flamengo'));
console.log(times.has('Flamengo'));
times.delete('Cruzeiro');
console.log(times.has('Cruzeiro'));

const animais = ['Gato', 'Cachorro', 'Lobo', 'Urso', 'Gato'];
const animaisSet = new Set(animais);
console.log(animaisSet);