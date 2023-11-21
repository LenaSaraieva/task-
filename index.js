// Вставить пропущенные логические операторы
//  var a = ""; var b = 7; var c = null; var d = 2; var e; alert( a c 
//     /*ЛО */ b d ); // 2 alert( e /*ЛО */ c && b /*ЛО */ d ); // null alert( e /*ЛО */ c /*ЛО */ b /*ЛО */ e /*ЛО */ d); // 7 ЛО - логический оператор

var a = "";
var b = 7;
var c = null;
var d = 2;
var e;

alert(a || c && b || d); //2
alert( e  c && b d); //null
alert( e  c  b  e  d); //7
