'use strict';
(function(){
	var getSelector = function (index) {
		switch(index) {
			case 0:
			case 1:
				return '#modal-one';
			case 2:
			case 3:
				return '#modal-two';
			case 4:
			case 5:
				return '#modal-three';
			default:
				 return '#modal-one';
		}
	}
	var showModal = function(event, i){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.add('show');
		var selector = getSelector(i)
		document.querySelector(selector).classList.add('show'); // 2. x -> y
	};
	var modalLinks = document.querySelectorAll('.show-modal');
	modalLinks.forEach(function(arg1, index) {
		arg1.addEventListener('click', function() {
			  showModal(event, index);
		});
	});
	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
	};
	var closeButtons = document.querySelectorAll('.modal .close');
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}
	document.querySelector('#modal-overlay').addEventListener('click', hideModal);
	var modals = document.querySelectorAll('.modal');
	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}
})();