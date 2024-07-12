document.write("<div class='tabelas'> ");

document.write("<h1>Trabalho de WEB II</h1>");

document.write("<h3><b><a href='sobre.html'>Sobre o trabalho</a><b></h3><br>");
document.write("</div> ");

document.write('<hr class=" linha">');

document.write("<h2><b>Clique F5 para atualizar os números de TODAS as matrizes!!!!!<b></h2>");
 
document.write('<hr class=" linha">');

document.write("<h1><b>Soma de Matrizes<b></h1><br>");

var m1 = new Array();

m1.push([0, 0]);
m1.push([0, 0]);

m1[0][0] = Math.ceil(Math.random() * 100);

m1[0][1] = Math.ceil(Math.random() * 100);

m1[1][0] = Math.ceil(Math.random() * 100);


m1[1][1] = Math.ceil(Math.random() * 100);

document.write("<div class = 'tabelas'> ");
document.write("<div> ");

document.write("<table border = '1' > ");

for (var l = 0; l < m1.length; l++) {
    document.write("<tr>");
    for (var c = 0; c < m1[l].length; c++) {
        document.write('<td>' + m1[l][c] + "</td>");
    }
    document.write("</tr>");
}
document.write('</table>');
document.write("</div> ");
document.write("<div> ");
document.write("<b id='tamanho'> + </b>");
document.write("</div> ");
document.write("<div> ");

console.table(m1);



var m2 = new Array();


m2.push([0, 0]);
m2.push([0, 0]);

m2[0][0] = Math.ceil(Math.random() * 100);

m2[0][1] = Math.ceil(Math.random() * 100);


m2[1][0] = Math.ceil(Math.random() * 100);


m2[1][1] = Math.ceil(Math.random() * 100);


document.write("<table border = '1' > ");

for (var l = 0; l < m2.length; l++) {
    document.write("<tr>");
    for (var c = 0; c < m2[l].length; c++) {
        document.write('<td>' + m2[l][c] + "</td>");
    }
    document.write("</tr>");
}
document.write('</table>');

document.write('</div>');

document.write('</div>');
console.table(m2);

document.write("<h1>Resultado: </h1>");

var m3 = new Array();


m3.push([0, 0]);
m3.push([0, 0]);

m3[0][0] = m1[0][0] + m2[0][0];

m3[0][1] = m1[0][1] + m2[0][1];


m3[1][0] = m1[1][0] + m2[1][0];

m3[1][1] = m1[1][1] + m2[1][1];



document.write("<table border = '1' > ");

for (var l = 0; l < m3.length; l++) {
    document.write("<tr>");
    for (var c = 0; c < m3[l].length; c++) {
        document.write('<td>' + m3[l][c] + "</td>");
    }
    document.write("</tr>");
}
document.write('</table>');

document.write('</div>');

document.write('</div>');
console.table(m3);

document.write('<hr class=" linha">');

document.write("<h1><b>Subtração de Matrizes<b></h1><br>");

var m4 = new Array();

m4.push([0, 0]);
m4.push([0, 0]);

m4[0][0] = Math.ceil(Math.random() * 100);

m4[0][1] = Math.ceil(Math.random() * 100);

m4[1][0] = Math.ceil(Math.random() * 100);

m4[1][1] = Math.ceil(Math.random() * 100);

document.write("<div class = 'tabelas'> ");
document.write("<div> ");

document.write("<table border = '1' > ");

for (var l = 0; l < m4.length; l++) {
    document.write("<tr>");
    for (var c = 0; c < m4[l].length; c++) {
        document.write('<td>' + m4[l][c] + "</td>");
    }
    document.write("</tr>");
}
document.write('</table>');
document.write("</div> ");
document.write("<div> ");
document.write("<b id='tamanho'> - </b>");
document.write("</div> ");
document.write("<div> ");

console.table(m4);



var m5 = new Array();


m5.push([0, 0]);
m5.push([0, 0]);

m5[0][0] = Math.ceil(Math.random() * 100);

m5[0][1] = Math.ceil(Math.random() * 100);

m5[1][0] = Math.ceil(Math.random() * 100);

m5[1][1] = Math.ceil(Math.random() * 100);


document.write("<table border = '1' > ");

for (var l = 0; l < m5.length; l++) {
    document.write("<tr>");
    for (var c = 0; c < m5[l].length; c++) {
        document.write('<td>' + m5[l][c] + "</td>");
    }
    document.write("</tr>");
}
document.write('</table>');

document.write('</div>');

document.write('</div>');
console.table(m5);

document.write("<h1>Resultado: </h1>");

var m6 = new Array();


m6.push([0, 0]);
m6.push([0, 0]);

m6[0][0] = m4[0][0] - m5[0][0];

m6[0][1] = m4[0][1] - m5[0][1];

m6[1][0] = m4[1][0] - m5[1][0];

m6[1][1] = m4[1][1] - m5[1][1];



document.write("<table border = '1' > ");

for (var l = 0; l < m6.length; l++) {
    document.write("<tr>");
    for (var c = 0; c < m6[l].length; c++) {
        document.write('<td>' + m6[l][c] + "</td>");
    }
    document.write("</tr>");
}
document.write('</table>');

document.write('</div>');

document.write('</div>');
console.table(m6);

document.write("<h3>AVISO: A matriz resultado da subtração de matrizes, pode dar números negativos, pela questão de que algum número da 1ª matriz possa ser menor do que o da 2ª matriz </h3>");

document.write('<hr class=" linha">');

document.write("<h1><b>Multiplicação de Matrizes<b></h1><br>");

var m7 = new Array();

m7.push([0, 0]);
m7.push([0, 0]);

m7[0][0] = Math.ceil(Math.random() * 40);

m7[0][1] = Math.ceil(Math.random() * 40);

m7[1][0] = Math.ceil(Math.random() * 40);

m7[1][1] = Math.ceil(Math.random() * 40);

document.write("<div class = 'tabelas'> ");
document.write("<div> ");

document.write("<table border = '1' > ");

for (var l = 0; l < m7.length; l++) {
    document.write("<tr>");
    for (var c = 0; c < m7[l].length; c++) {
        document.write('<td>' + m7[l][c] + "</td>");
    }
    document.write("</tr>");
}
document.write('</table>');
document.write("</div> ");
document.write("<div> ");
document.write("<b id='tamanho'> x </b>");
document.write("</div> ");
document.write("<div> ");

console.table(m7);



var m8 = new Array();


m8.push([0, 0]);
m8.push([0, 0]);

m8[0][0] = Math.ceil(Math.random() * 40);

m8[0][1] = Math.ceil(Math.random() * 40);

m8[1][0] = Math.ceil(Math.random() * 40);

m8[1][1] = Math.ceil(Math.random() * 40);


document.write("<table border = '1' > ");

for (var l = 0; l < m8.length; l++) {
    document.write("<tr>");
    for (var c = 0; c < m8[l].length; c++) {
        document.write('<td>' + m8[l][c] + "</td>");
    }
    document.write("</tr>");
}
document.write('</table>');

document.write('</div>');

document.write('</div>');
console.table(m8);

document.write("<h1>Resultado: </h1>");

var m9 = new Array();


m9.push([0, 0]);
m9.push([0, 0]);

for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
      for (var k = 0; k < 2; k++) {
        m9[i][j] += m7[i][k] * m8[k][j];
      }
    }
  }

document.write("<table border = '1' > ");

for (var l = 0; l < m9.length; l++) {
    document.write("<tr>");
    for (var c = 0; c < m9[l].length; c++) {
        document.write('<td>' + m9[l][c] + "</td>");
    }
    document.write("</tr>");
}
document.write('</table>');

document.write('</div>');

document.write('</div>');
console.table(m9);