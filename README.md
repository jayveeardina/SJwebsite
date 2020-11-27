<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="utf-8">
	<title>SJ Personal Website</title>
	<link rel="stylesheet" href="./src/main.css">
</head>
<body>
	<div class="container">
		<form class="form" id="login">
			<h1 class="form__title">Login<h1>
			<div class="form__message form__message--error">Incorrect Username/Password combination.</div>
			<div class="form__input-group">
				<input type="text" class="form__input" autofocus placeholder="Username or Email">
				<div class="form__input-error-message">This is an error message</div>
			</div>
			<div class="form__input-group">
				<input type="Password" class="form__input" autofocus placeholder="Password">
				<div class="form__input-error-message"></div>
			</div>
			<button class="form__button" type="submit">Continue</button>
		</form>
	</div>
 	<script src="./src/main.js"></script>
</body>
</html>
