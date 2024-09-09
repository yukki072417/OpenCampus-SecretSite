// You can setting id and password
const id = "sample"
const password = "sample";

// You can building show and hide function
function showPass() {
    let showingPassIconPath = 'assets/icons/passwordShowing.png'
    let hidingPassIconPath = 'assets/icons/passwordHiding.png'

    const $icon = $('.show-pass');
    const currentType = $('#user-password').attr('type');

    if (currentType === 'password') {
        passwordShowing($icon,showingPassIconPath);
    } else {
        passwordHiding($icon,hidingPassIconPath);
    }

}


function login() {
    // When login user, checking password and id
    check();
    if(checking() == true){
        movingSite();
    }else{
        alert('パスワードかIDを間違えています');
    }

}

// you can not rewriting below code 

function movingSite() {
    return location.href = "./your-site/site.html";
}
function checking(){
 
    let entered_id = document.getElementById("user-id");
    let entered_password = document.getElementById("user-password");

    if(entered_id.value == id && entered_password.value == password){
        return true
    }
}
function passwordShowing(icon,iconPath){
    $('#user-password').attr('type', 'text');
    icon.attr('src', iconPath);
}
function passwordHiding(icon,iconPath){
    $('#user-password').attr('type', 'password');
    icon.attr('src', iconPath);
}