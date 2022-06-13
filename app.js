const photo = document.querySelector('.photo');
const aphoto = document.querySelector('.aphoto');

const pressed = [];
const apressed = [];
const secretCode = 'paskudek';
const cypher = 'albunia'
document.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);
if (pressed.join('').includes(secretCode)) {
   photo.classList.add('active');
   aphoto.classList.remove('active');
} else {
    cornify_add();
    photo.classList.remove('active');
}
})
document.addEventListener('keyup', (e) => {
    apressed.push(e.key);
    apressed.splice(-cypher.length -1, apressed.length - cypher.length);
if (apressed.join('').includes(cypher)) {
   aphoto.classList.add('active');
   photo.classList.remove('active');
} else {
    cornify_add();
    aphoto.classList.remove('active');
}
})