
	// Referenciando os elementos que serão necessários
	var listElement = document.querySelector("#toDoList ul");
	var inputElement = document.querySelector("#toDoList input");
	var buttonElement = document.querySelector("#toDoList button");

	var todos = JSON.parse(localStorage.getItem('list-todos')) || [];


	// Adicionando linhas no corpo da nossa lista

	function renderTodos(){
		// Limpa a lista
		listElement.innerHTML = '';

		// Para para item da lista todos
		for (todo of todos){
			//Cria um novo elemento LI
			var toDoElement = document.createElement('li');
			// Transforma o item da lista em um texto
			var toDoText = document.createTextNode(todo);
			// Adiciona o texto dentro do elemento li criado

			var linkElement = document.createElement('a');
			linkElement.setAttribute('href',"#");

			var pos = todos.indexOf(todo);
			linkElement.setAttribute('onclick', 'deleteToDo('+ pos +')');

			var linkText = document.createTextNode('Excluir');
			linkElement.appendChild(linkText);


			toDoElement.appendChild(toDoText);
			toDoElement.appendChild(linkElement);
			// Adiciona a li com o texto à ul referenciada no começo
			listElement.appendChild(toDoElement);
		}
	}

	renderTodos();

	function addToDo(){
		var toDoText = inputElement.value;
		//Adiciona um novo item ao final da lista
		if(toDoText != ''){
			todos.push(toDoText);
			inputElement.value = '';
			renderTodos();
			saveToStorage();
		}else{
			alert("Escreva uma tarefa!");
		}
	}

	buttonElement.onclick = addToDo;

	function deleteToDo(pos){
		todos.splice(pos,1);
		renderTodos();
		saveToStorage();
	}

	function saveToStorage(){
		localStorage.setItem('list-todos', JSON.stringify(todos));
	}