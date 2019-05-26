'use strict';
(function(){
	
	var showModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.add('show');
		document.querySelector(x).classList.add('show'); // 2. x -> y
		document.getElementById("result").innerHTML += ' var x: ' + x + ', var i: ' + i + '<br>'; // 2. x -> y
	};
	
	var modalLinks = document.querySelectorAll('.show-modal');
	for (var i = 0; i < modalLinks.length; i++) {
		modalLinks[i].addEventListener('click', showModal);
		var x = modalLinks[i].getAttribute("href"); // 1.
		//var x = document.getElementsByTagName("a") // 2.
		//var y = x.getAttribute("href"); // 2.
	};

	//for (var i = 0; i < modalLinks.length; i++) { // 3.
	//	var y = modalLinks[i].getAttribute("href"); // 3.
	//} // 3.

// addEventListener poza pętlą
// 1/ funkcja w drugirj pętli
// 2. przenieść getAttrib do showModal
// 3. obiekt/tablica
// 4. if w pierwszej / drugiej pętli?


	//var x = document.getElementsByTagName("a")[5].getAttribute("href");  // DZIAŁA


	// Dodajemy też funkcję zamykającą modal, oraz przywiązujemy ją do kliknięć na elemencie z klasą "close". 

	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
	};
	
	var closeButtons = document.querySelectorAll('.modal .close');
	
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}
	
	// Dobrą praktyką jest również umożliwianie zamykania modala poprzez kliknięcie w overlay. 
	
	document.querySelector('#modal-overlay').addEventListener('click', hideModal);
	
	// Musimy jednak pamiętać, aby zablokować propagację kliknięć z samego modala - inaczej każde kliknięcie wewnątrz modala również zamykałoby go. 
	
	var modals = document.querySelectorAll('.modal');
	
	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}
})(); 