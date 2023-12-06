window.onload=function(){
    createAdmin();
    createProduct();
    // taodulieudonhang
}
// Create admin
var userArray = [];
function createAdmin(){
    if(localStorage.getItem('user')==null){
        var user = {username: 'admin', password: 'admin',name: 'Zesta', phone: '0909999999', type: 'ad'};
        userArray.push(user);
        localStorage.setItem('user',JSON.stringify(userArray));
    }
    
}


// Admin xác nhận

function confirmDonHangAdmin(madh){
    document.querySelector('.gio-hang-modal').style.display = 'flex';
    var donhangsub = JSON.parse(localStorage.getItem('donhangsub'));

    var s='';
    var k=0;
    for(i=0;i<donhangsub.length;i++){
        if(donhangsub[i].madh==madh){
            k=i
            var a = `Đã xác nhận <i class="fas fa-check-circle"></i>`;
            s+=a;
            break;
        }
    }
    document.querySelector('.bill-thongtin'+k+'').innerHTML=s;
    closeGioHangEdit();
    localStorage.removeItem("item1");
    localStorage.removeItem("donhang");

}
