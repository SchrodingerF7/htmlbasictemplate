 
var usuario = "1234";
		var codigoAcesso = "9999";


		function Login() {

			var login = document.getElementById('login').value;
			var senha = document.getElementById('senha').value;


			if (usuario == login) {

				if(codigoAcesso == senha) {

					alert('Login realizado com sucesso!');

				} else {

					alert('Senha incorreta. Tente novamente!');

				}

			} else {

				alert('Usuário não encontrado. Tente novamente!');

			}

		}
