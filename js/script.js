(function() {
	var test ={
		enteredLogin: '',
		enteredPass: '',		
		testName: 'Тест по верстке!',
		userAnswers: [],
		questionsList: [
		{
			question: 'Почему в браузере не отображается текст, расположенный между тегами &lt;!-- и --&gt;?',
			answerVariants: [
			{
				answer: 'Потому что таких тегов не существуэт и браузер их игнорируетю',
				right: false
			},
			{
				answer: 'Это команды для поисковых систем, а не для браузеров',
				right: false
			},
			{
				answer: 'Это коментарий к коду и потому он не выводится',
				right: true
			}
			]
		},
		{
			question: 'Содержимое какого элемента можно увидеть в окне браузера?',
			answerVariants: [
			{
				answer: '&lt;br&gt;',
				right: false
			},
			{
				answer: '&lt;title&gt;',
				right: true
			},
			{
				answer: '&lt;meta&gt;',
				right: false
			},
			{
				answer: '&lt;body&gt;',
				right: true
			}
			]
		},
		{
			question: 'Какое утверждение наиболее подходит к случаю, когда тег &lt;p&gt; располагается в контейнере &lt;head&gt;?',
			answerVariants: [
			{
				answer: 'Код HTML не пройдет валидацию',
				right: true
			},
			{
				answer: 'Содержимое тега &lt;head&gt; не будет отображаться на веб-странице',
				right: false
			},
			{
				answer: 'Браузер выдаст сообщение об ошибке',
				right: false
			}
			]
		},
		{
			question: 'Какое написание тега из приведенных вариантов правильное?',
			answerVariants: [
			{
				answer: '&lt;/tag&gt;',
				right: false
			},
			{
				answer: '&lt;tag&gt;',
				right: true
			},
			{
				answer: '&lt;tag\\&gt;',
				right: false
			}
			]
		},
		{
			question: 'Какое значение атрибута width тега &lt;img&gt; является ошибочным?',
			answerVariants: [
			{
				answer: '34.5%',
				right: false
			},
			{
				answer: '1097',
				right: false
			},
			{
				answer: '120%',
				right: true
			}
			]
		},
		{
			question: 'Как задать стиль у тега &lt;div class="iddqd"&gt;DOOM&lt;/div&gt;?',
			answerVariants: [
			{
				answer: 'div.iddqd { color: red }',
				right: true
			},
			{
				answer: 'div[iddqd] { color: red }',
				right: false
			},
			{
				answer: 'div=iddqd { color: red }',
				right: false
			}
			]
		},
		{
			question: 'Какое выражение написано корректно?',
			answerVariants: [
			{
				answer: 'font-size: blue',
				right: false
			},
			{
				answer: 'width: "auto"',
				right: false
			},
			{
				answer: 'border: none',
				right: true
			},
			{
				answer: 'color: yellow',
				right: true
			}
			]
		},
		{
			question: 'Требуется задать цвет заголовка зеленым. Какое стилевое свойство подойдет для этой цели?',
			answerVariants: [
			{
				answer: 'font-family',
				right: false
			},
			{
				answer: 'color',
				right: true
			},
			{
				answer: 'font-color',
				right: false
			}
			]
		},
		{
			question: 'К какому селектору следует применить свойство margin, чтобы изменить отступы на веб-странице?',
			answerVariants: [
			{
				answer: 'HTML',
				right: false
			},
			{
				answer: 'META',
				right: false
			},
			{
				answer: 'BODY',
				right: true
			}
			]
		},
		{
			question: 'Какое имя класса написано правильно?',
			answerVariants: [
			{
				answer: 'pink-floyd',
				right: true
			},
			{
				answer: '1layer',
				right: false
			},
			{
				answer: 'Яndex',
				right: false
			},
			{
				answer: 'red123',
				right: true
			}
			]
		}
		],
		showLoginForm: function () {
			var loginForm = document.createElement('form'),
				inputLogin = document.createElement('input'),
				inputPass = document.createElement('input'),
				labelLogin = document.createElement('label'),
				labelPass = document.createElement('label'),
				inputSubmit = document.createElement('input'),
				wrapper;				

				loginForm.className = 'login-form';				

				inputLogin.setAttribute('type', 'text');
				inputLogin.setAttribute('id', 'login');

				inputPass.setAttribute('type', 'password');
				inputPass.setAttribute('id', 'pass');

				inputSubmit.setAttribute('type', 'submit');
				inputSubmit.setAttribute('value', 'Залогинится');

				labelLogin.setAttribute('for', 'login');
				labelPass.setAttribute('for', 'pass');
				labelLogin.innerHTML = 'Логин:';
				labelPass.innerHTML = 'Пароль:';				

				wrapper = document.createElement('div');
				wrapper.className = 'il-wrap';
				loginForm.appendChild(wrapper);
				wrapper.appendChild(labelLogin);
				wrapper.appendChild(inputLogin);				

				wrapper = document.createElement('div');
				wrapper.className = 'il-wrap';
				loginForm.appendChild(wrapper);
				wrapper.appendChild(labelPass);
				wrapper.appendChild(inputPass);

				document.body.appendChild(loginForm);
				loginForm.appendChild(inputSubmit);

				loginForm.addEventListener('submit', function(e) {
					e.preventDefault();
					if(test.submitHandler()){
						test.showRulesPage();
					};
				});
		},
		submitHandler: function() {
			var login, pass;
			login = document.getElementById('login').value;
			pass = document.getElementById('pass').value;
			if (login != 0 && pass != 0) {
				this.enteredLogin = login;
				this.enteredPass = pass;
				var form = document.getElementsByClassName('login-form');
				form[0].parentNode.removeChild(form[0]);
				return true;
			} else {
				alert('Заполните все поля!!!');
				return false;
			}			
		},
		showRulesPage: function() {
			var wrapper = document.createElement('div'),
				rule = document.createElement('p'),
				next = document.createElement('a');

			wrapper.className = 'wrapper';
			rule.className = 'test-rules';
			next.className = 'lets-go';

			wrapper.appendChild(rule);
			wrapper.appendChild(next);
			document.body.appendChild(wrapper);

			rule.innerHTML = 'Здравствуйте ' + this.enteredLogin + ', предупреждаем вас что некоторые вопросы в тесте имеют несколько верных вариантов ответа!!!';
			next.setAttribute('href', '#');
			next.innerHTML = 'Поехали';

			next.addEventListener('click', function() {
				wrapper.removeChild(rule);
				wrapper.removeChild(next);
				test.showPageWithQuestion();
			});
		},
		showPageWithQuestion: function() {
			var testForm = document.createElement('form'),
				qList = document.createElement('ul'),
				submit = document.createElement('input'),
				next = document.createElement('a'),
				counter = 0;

			submit.setAttribute('type', 'submit');
			testForm.className = 'test-form';
			testForm.appendChild(qList);
			document.getElementsByClassName('wrapper')[0].appendChild(testForm); 

			for (var i = 0; i < this.questionsList.length; i++) {
				var qItem = document.createElement('li'),
					qText = document.createElement('p');

				qItem.appendChild(qText);
				qList.appendChild(qItem);

				qText.innerHTML = this.questionsList[i].question;
				for (var j = 0; j < this.questionsList[i].answerVariants.length; j++) {
					var ansWrap = document.createElement('div'),
						checkAns = document.createElement('input'),
						span = document.createElement('span');

					ansWrap.className = 'ans-wrap';
					qItem.appendChild(ansWrap);

					checkAns.setAttribute('type','checkbox');
					ansWrap.appendChild(checkAns);
					
					span.innerHTML = this.questionsList[i].answerVariants[j].answer;
					ansWrap.appendChild(span);
				};
			};

			next.className = 'next';
			next.setAttribute('href', '#');
			next.innerHTML = 'Следующий вопрос';
			testForm.appendChild(next);
			qList.getElementsByTagName('li')[0].className = 'visible';

			next.addEventListener('click', function(){
				if ( counter < qList.getElementsByTagName('li').length - 2) {
					test.nextQuestionHandler(qList);
					counter++;
				} else if (counter === qList.getElementsByTagName('li').length - 2) {
					test.nextQuestionHandler(qList);
					next.innerHTML = 'Подсчитать результаты';
					counter++;
				} else {
					test.nextQuestionHandler(qList);
					next.parentNode.removeChild(next);
					test.showRezults();				
				};				
			});
		},
		nextQuestionHandler: function(qList) {
			var curent = qList.querySelector('.visible'),
				all = qList.querySelectorAll('li');

			for (var i = 0; i < all.length; i++) {
				if (all[i].className == 'visible') {
					var flag = true,
						checkboxes = all[i].getElementsByTagName('input');					

					for (var j = 0; j < checkboxes.length; j++){
						if (flag && (checkboxes[j].checked == this.questionsList[i].answerVariants[j].right)) {
							flag = true;
						} else {
							flag = false;
						};						
					};

					this.userAnswers.push(flag);					
				};
			};	
			for (var i = 0; i < all.length - 1; i++) {
				if (all[i].className == 'visible') {
					all[i].className = '';
					all[i+1].className = 'visible';
					break;
				};
			};
		},
		showRezults: function() {
			var rezult = document.createElement('p'),
				rightAnswNum,
				quest = document.body.querySelectorAll('li');

			for (var i = 0; i < quest.length; i++){
				var check = quest[i].querySelectorAll('input');
				for(var j = 0; j < check.length; j++){
					if (this.questionsList[i].answerVariants[j].right){
						check[j].parentNode.querySelector('span').className = 'rightAnswer';
					};
				};

				if (this.userAnswers[i]){
					quest[i].querySelector('p').className = 'right';
				} else {
					quest[i].querySelector('p').className = 'wrong'
				}
			};

			rightAnswNum =  document.body.querySelectorAll('.right').length;
			for (var i = 0; i < quest.length; i++) {
				quest[i].className = 'visible';
			};

			rezult.className = 'rezult-text';
			rezult.innerHTML = 'Ваш результат ' + rightAnswNum + ' из ' + quest.length;

			document.body.querySelector('.wrapper').appendChild(rezult);
		}
	};
	test.showLoginForm();
})();