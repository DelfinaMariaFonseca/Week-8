/* a */
var palces = ['london', 'hawai', 'costarica', 'cuba', 'panama'];

for(i=0; i<= palces.lenght; i++){
  const element = palces[i];
  alert (element);
}
console.log(palces);
/* b */

for (let i = 0; i < palces.length; i++) {
    palces[i] = palces[i][0].toUpperCase() + palces[i].substr(1, ).toLowerCase();
    console.log(palces[i])
};
/* c */
var sentence = "";
for (var i=0;i<palces.length;i++){
    sentence=palces.join('');
}
    console.log(sentence)
/* d */
var empty = [];
for (let i = 0; i < 10; i++) {
    empty[i] = i;
};
console.log(empty);
