$(document).ready(function(){

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills-ratings__counter'),
    indicators = document.querySelectorAll('.skills-ratings__indicator');

counters.forEach( (item, i) => {
    indicators[i].style.width = item.innerHTML;
});

		function valideForms(form){
			$(form).validate({
				rules: {
					name: {
						required: true,
						minlength: 2
					},
					email: {
						required: true,
						email: true
					},
					check: {
						required: true
					}
				},
				messages: {
					name: {
						required: "Пожалуйста, введите своё имя",
						minlength: jQuery.validator.format("Введите {0} символа!")
					},
					email: {
						required: "Пожалуйста, введите свою почту",
						email: "Неправильно введён адрес почты"
					},
					check: {
						required: "Необходимо поставить галочку"
					}
				}
			});
		};

		valideForms('.contacts__form');



		$('form').submit(function(e) {
			e.preventDefault();
					
			if (!$(this).valid()) {
				return;
			}

			$.ajax({
				type: "POST",
				url: "mailer/smart.php",
				data: $(this).serialize()
			}).done(function() {
				$(this).find("input").val("");
				// $('#consultation, #order').fadeOut();
				// $('.overlay, #thanks').fadeIn('slow');
				$('form').trigger('reset');
			});
			return false;
		});

});