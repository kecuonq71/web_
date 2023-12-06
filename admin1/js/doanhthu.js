
// Doanh thu
function showDT(){
    document.getElementById("contentProduct").style.display='none';
    document.getElementById('contentUser').style.display='none';
    document.getElementById("contentBill").style.display='none';
    document.getElementById("contentDT").style.display='flex';
    document.getElementById("contentAE").style.display='none';

    showDoanhThu();
}
function closeEdit(){
    document.querySelector(".modal-ae-edit").style.display='none';
}
function showDoanhThu(){
    var donhangsub = JSON.parse(localStorage.getItem('donhangsub'));
    var list='';
    var price=0;
	for(var i=0; i<donhangsub.length;i++){
        var a = `<ul class="bill-body dt-body">
                <li class="dh-ct">${donhangsub[i].madh}</li>
                <li class="dh-day">${donhangsub[i].ngay}</li>
                <li class="dh-name">${donhangsub[i].ten}</li>
                <li class="dh-price">${donhangsub[i].gia}</li>
            </ul>`;
        list+=a;
        price+=donhangsub[i].gia;
    }
    var sum = '<p class="sum sumDT">Doanh thu:</p> <p class="price">'+price+'</p>';
    document.getElementById('printDT').innerHTML=list;
    document.getElementById("thanhtien").innerHTML = sum;
}
