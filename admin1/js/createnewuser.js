
// Create New User
function createNewUser(){
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    const phone = document.getElementById('phone').value;
    const name = document.getElementById('name').value;
    if(name==""){
        document.querySelector(".errorDK3").style.display='block';
        document.getElementById('name').focus();
        return;
    }
    if(user == "" || user.length < 5 ){
        document.querySelector(".errorDK").style.display = 'block';
        document.getElementById('user').focus();
        return;
    }
    if(pass == ""||pass.length<6){
        document.querySelector(".errorDK").style.display = 'none';
        document.querySelector(".errorDK1").style.display = 'block';
        document.getElementById('pass').focus();return;
    }
    if(phone.length<10||phone==""){
        document.querySelector(".errorDK").style.display = 'none';
        document.querySelector(".errorDK2").style.display = 'block';
        document.querySelector(".errorDK1").style.display = 'none';
        document.querySelector(".errorD3").style.display = 'none';
    }
    else{
        var userArray = JSON.parse(localStorage.getItem('user'));
        if(user=="admin"){
            toast({
                title: "Thất bại!",
                message: "Không thể đăng ký tài khoản này",
                type: "error",
                duration: 3000
            });
            return;
        }
        var user1 ={username: document.getElementById("user").value, password: document.getElementById('pass').value,name: name, phone: phone,type: 'kh'};
        userArray.push(user1);
        toast({
            title: "Thành công!",
            message: "Đã thêm tài khoản",
            type: "success",
            duration: 3000
            });
        localStorage.setItem('user',JSON.stringify(userArray));   
    }    
    showUserList();
    
}