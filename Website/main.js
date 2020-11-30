function validate() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;

    if(name=='' || password=='') {
        document.getElementById("form__message--error").innerText = "All fields are required";
        return false;
    }
    else if (name!='samantha' || password!= 'mahalko') {
        document.getElementById("form__message--error").innerText = " Incorrect Email or Password";
        return false;
    }

    else {
        return true;
    }
}