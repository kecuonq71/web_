
// Show user
function showUserList(){
	if(localStorage.getItem('user')==null){
		return false;
	}
	var userArray = JSON.parse(localStorage.getItem('user'));
	var list = '';
	for(var i=0; i<userArray.length;i++){
        var a =`<ul class="account-body">
        <li class="stt">`+(i+1)+`</li>
        <li class="tk">${userArray[i].name}</li>
        <li class="tk">${userArray[i].username}</li>
        <li class="mk">${userArray[i].password}</li>
        <li class="sdt">${userArray[i].phone}</li>
        <li class="del" onclick="deleteUser(\``+userArray[i].username+`\`);" ><i class="fas fa-trash-alt"></i></li>
        </ul>`;
        list+=a;
	}
	document.getElementById('printUser').innerHTML=list;
    
}


function showUser(){
    document.getElementById("contentProduct").style.display='none';
    document.getElementById('contentUser').style.display='flex';
    document.getElementById("contentBill").style.display='none';
    document.getElementById("contentDT").style.display='none';
    document.getElementById("contentAE").style.display='none';
    showUserList();
    
}