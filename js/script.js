'use strict';
(function(){
	
	var showModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.add('show');
		document.querySelector(x).classList.add('show'); // 2. x -> y
		document.getElementById("result").innerHTML += '<br> var x: ' + x + ', var index: ' + index; // 2. x -> y

	};
	
	var modalLinks = document.querySelectorAll('.show-modal');

	var logModalLinksIndex = function(modalLinksIndex) {
		console.log('modalLinksIndex:', modalLinksIndex);
		document.getElementById('result2').innerHTML += '<br> modalLinksIndex: '+ modalLinksIndex;




	modalLinks.forEach(function(arg1, index) {
		arg1.addEventListener('click', function() {
			  logModalLinksIndex(index);
			  showModal(event);
		});
	});

/*
	for (var i = 0; i < modalLinks.length; i++) {
		modalLinks[i].addEventListener('click', showModal);
		var x = modalLinks[i].getAttribute("href"); // 1.
	};
*/

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