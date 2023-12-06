// Show don hang
function showDonHang(){

    itemArray = JSON.parse(localStorage.getItem('giohang'));
}


//Close Gio Hang Edit
function closeGioHangEdit(){
    document.querySelector('.modal').style.display='none';
}


// Show Gio Hang Edit
function showGioHangEdit(){
    var sumPrice=0;
    document.querySelector('.gio-hang-modal').style.display = 'flex';
    var item1 = JSON.parse(localStorage.getItem('item1'));
    var printItem = '';
    if(item1.length==null){
        return false;
    }
    // var donhangsub = JSON.parse(localStorage.getItem('donhangsub'));
    
    // <div class="dh-ct">${donhangsub[i].madh}</div>
    for(i=0;i<item1.length;i++){
        var a =`   <div class="item">
            <div class="gh-img">
            <img src=".${item1[i].img}">
            </div>
            <p class="gh-name">${item1[i].name}</p>
            <p class="gh-price">${item1[i].price}</p>
            <p id="soluong" >1</p> 
            <p class="gh-sumPrice">${item1[i].price}</p>
        </div>`;
        
        sumPrice += item1[i].price;
        printItem+=a;
    }
    var donhang = JSON.parse(localStorage.getItem('donhang'));
    
    for(i=0;i<donhang.length;i++){
        var btn = `<button class="btn-confirm" onclick="confirmDonHangAdmin(\``+donhang[i].madh+`\`);">Xác nhận đơn hàng</button>`;
        
    }
    var sum = '<p class="sum">Tổng tiền:</p> <p class="price">'+sumPrice+'</p>';
    document.getElementById('gio-hang').innerHTML = printItem;
    document.getElementById("thanhtien").innerHTML = sum;
    document.querySelector('.confirm-item').innerHTML = btn;
 
}


// Show bill
function showAdminBill(){
    document.getElementById("contentProduct").style.display='none';
    document.getElementById('contentUser').style.display='none';
    document.getElementById("contentBill").style.display='flex';
    document.getElementById("contentDT").style.display='none';
    document.getElementById("contentAE").style.display='none';
    showBil();
    // taodulieudonhang();
}
function showBil(){
    
    var donhangsub = JSON.parse(localStorage.getItem('donhangsub'));
    var list='';
	for(var i=0; i<donhangsub.length;i++){
        if(i==donhangsub.length-1){
            var o= `<ul class="bill-body">
                <li class="bill-ct">${donhangsub[i].madh}</li>
                <li class="bill-day">${donhangsub[i].ngay}</li>
                <li class="bill-name">${donhangsub[i].ten}</li>
                <li class="bill-price">${donhangsub[i].gia}</li>
                <li class="bill-thongtin`+i+`">Chưa xác nhận</li>
                <li class="bill-ct bill-ct2" onclick="showGioHangEdit();"><a>Chi tiết</a></li>
                </ul>`
        }else{

            var o= `<ul class="bill-body">
                    <li class="bill-ct">${donhangsub[i].madh}</li>
                    <li class="bill-day">${donhangsub[i].ngay}</li>
                    <li class="bill-name">${donhangsub[i].ten}</li>
                    <li class="bill-price">${donhangsub[i].gia}</li>
                    <li class="bill-thongtin`+i+`">Đã xác nhận <i class="fas fa-check-circle"></i></li>
                    <li class="bill-ct bill-ct2" onclick="showGioHangEdit();"><a>Chi tiết</a></li>
                    </ul>`
        }

        list+=o;
	}
	document.getElementById('printBill').innerHTML=list;
}

