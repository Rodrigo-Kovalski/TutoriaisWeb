var botao = document.querySelector('.content button');
var texto1 = document.querySelector('.content small');
var texto2 =  document.querySelector('.content h1');
var conteudo = document.querySelector('.content');
var botao2 = document.querySelector('.navbar button');
var sidebarElement = document.querySelector('.side-bar');
botao.onclick =  function(){
	texto1.style.opacity = '0';
	texto1.style.transform = 'translateX(50%)'
	texto2.style.opacity = '0';
	texto2.style.transform = 'translateX(-50%)';
	botao.style.opacity = '0'
	// conteudo.style.left = '-75%';
	sidebarElement.style.position = 'absolute';	
	sidebarElement.style.animation = 'barra 1s linear';
	sidebarElement.style.opacity = '0';
}
botao2.onclick = function(){
	texto1.style.opacity = '1';
	texto1.style.transform = 'translateX(0%)'
	texto2.style.opacity = '1';
	texto2.style.transform = 'translateX(0%)';
	botao.style.opacity = '1';
	sidebarElement.style.opacity = '0.7';
	sidebarElement.style.position = 'fixed'
}

var linksInternos = document.querySelector('social-links a');

function scrollTo(element){
	document.querySelector(element).scrollIntoView({behavior:"smooth"})
}

document.querySelector("#goBeach").addEventListener('click', function(event){
	event.preventDefault();
	scrollTo("#beach");
})
document.querySelector("#goDori").addEventListener('click', function(event){
	event.preventDefault();
	scrollTo("#dori");
})

document.querySelector(".beach button").addEventListener('click', function(){
	var ativar = document.querySelector('.dolphins');
	ativar.style.display = 'block';
})