var botao = document.querySelector('.content button');
var texto1 = document.querySelector('.content small');
var texto2 =  document.querySelector('.content h1');
var conteudo = document.querySelector('.content');
var botao2 = document.querySelector('.navbar button');
botao.onclick =  function(){
	texto1.style.opacity = '0';
	texto1.style.transform = 'translateX(50%)'
	texto2.style.opacity = '0';
	texto2.style.transform = 'translateX(-50%)';
	botao.style.opacity = '0'
	// conteudo.style.left = '-75%';
}
botao2.onclick = function(){
	texto1.style.opacity = '1';
	texto1.style.transform = 'translateX(0%)'
	texto2.style.opacity = '1';
	texto2.style.transform = 'translateX(0%)';
	botao.style.opacity = '1'
}