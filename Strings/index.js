/* 1 */
var text1 = "DelfinaMaria"
console.log (text1.toUpperCase() );

/* 2 */
var str = "DelfinaMaria ";
var res = str.substring(0,5);
console.log (res)

/* 3 */
var str = "DelfinaMaria ";
var res1 = str.substring(9,12);
console.log (res1)

/* 4 */
var obj = "delfinaMariaFonseca";
var text2 = obj.substring(0,1).toUpperCase() + obj.substring(1, ).toLowerCase()
console.log (text2)

/* 5 */
var obj2 = "Delfina Maria Fonseca";
var pos = obj2.indexOf(" ");
console.log (pos)

/* 6 */
var a = "televisor fuerTe"
var b = a.substr(0, 1).toUpperCase() + a.substr(1, a.indexOf(' ')).toLowerCase() + a.substr(9, 1) + a.substr(10, 1).toUpperCase() + a.substr(11, 10).toLowerCase();
//var lala = lil.substring(0, 1).toUpperCase() + lil.substring(1, a.indexOf(" ")).toLowerCase()+ a.substring (10, 1) + lil.substring(10, 1).toUpperCase() + lil.substring(11,6).toLowerCase();
console.log(b)

