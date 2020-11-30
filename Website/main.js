function validate() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;

    if(name=='samantha' || password=='mahalko') {
        return true;
    }
    else {
        return false;
    }
}