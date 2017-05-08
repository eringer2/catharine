//Ambos os códigos abaixo executam a mesma coisa, porém a produtividade final de uma das formas é claramente melhor. Porém em contrapartida, jQuery é mais lento e diminui a velocidade de processamento do código final. USE COM MODERAÇÃO!

//javascript:

/*
var valorSelecionado;
var elemento = document.getElementsByTagName('input');
for(var n=0;n<elemento.length;n++){
  if(elemento[n].type=='radio'&&
  elemento[n].name=='esporte'&&
  elemento[n].checked){
  valor Selecionado=elemento[n].value;
  }
}
*/

//jQuery:

/*
var valor=$('input[name="esporte"]:checked').val();
*/
