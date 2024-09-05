// you can setting id and password
const id = "sample"
const password = "sample";



function login() {
   check();
   
    if(check() == true){
        move();
    }else{
        alert('パスワードかIDを間違えています');
    }

}



// you can not rewriting below code 

const move = () => {
    return location.href = "./your-site/site.html";
}
function check(){
 
    let entered_id = document.getElementById("user-id");
    let entered_password = document.getElementById("user-password");

    if(entered_id.value == id && entered_password.value == password){
        return true
    }
}