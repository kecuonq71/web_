function deleteUser(usernameDelete){
    var userArray = JSON.parse(localStorage.getItem('user'));
    for(var i=0; i<userArray.length;i++){
        if(userArray[i].type=='ad'&&userArray[i].username==usernameDelete){
            toast({
                title: "Thất bại!",
                message: "Tài khoản không thể xóa",
                type: "error",
                duration: 3000
            });
        }
        else if(userArray[i].username==usernameDelete){
            if(confirm('Bạn có muốn xóa tài khoản này?')){
                toast({
                    title: "Thành công!",
                    message: "Xóa tài khoản thành công",
                    type: "success",
                    duration: 3000
                });
                userArray.splice(i, 1);
            }
        }
    }
    localStorage.setItem('user',JSON.stringify(userArray)); 
    showUserList(); 
    
}

//admin edit


function editAdmin(idEdit){
    var products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    document.querySelector(".modal-ae-edit").style.display='flex';
    
    var printEdit='';
    var index ,id,brand;
    
    for(i=0;i<products.length;i++){
        if(products[i].productId==idEdit){
            var a=`
                    <div class="edit-img">
                        <img src=".${products[i].img}">
                    </div>  
                    <div class="item-body item-body-ae">
                    <p class="text">Tên sản phẩm</p>
                    <input type="text" id="namesp" value="${products[i].name}"> 
                    <div class="container-input-error errorDK5">
                        <p class="error">
                            Vui lòng tên sản phẩm
                        </p>
                    </div>  
                     </div>
                    <div class="item-body item-body-ae">
                        <p class="text">Nhập giá</p>
                        <input type="text" id="giasp" value="${products[i].price}">   
                        <div class="container-input-error errorDK6">
                            <p class="error">
                                Vui lòng nhập giá
                        </div>
                    </div>  
                    <div class="item-body item-body-ae">
                        <p class="text">Nhập đường đẫn ảnh</p>
                        <input type="file" id="myFileEdit" name="filename">
                        
                        <div class="container-input-error errorDK7">
                            <p class="error">
                                Vui lòng đường đẫn ảnh
                            </p>
                        </div>
                    </div>`;
                    printEdit+=a;
                    index=i;
                    id = products[i].productId;
                    brand = products[i].brand;
                    break;
        }
    }
    var update = `<button class="btn-confirm " onclick="updateInfo(`+index+`,`+id+`,\``+brand+`\`);">Cập nhật</button>`;
    document.getElementById("edit").innerHTML = printEdit;
    document.querySelector(".btn-confirm-ae").innerHTML =update;
}

// cập nhật
function updateInfo(index,id,brand){
    var products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    var img;
    if(document.getElementById('myFileEdit').value==null){
        img = id+'.jpg';
    }else{
        img = document.getElementById('myFileEdit').value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]
    }
    products[index]={productId: id, brand: brand,img: "./assets/img/products/"+img+"" ,name: document.getElementById("namesp").value,price:document.getElementById("giasp").value};
    localStorage.setItem('products',JSON.stringify(products)); 
    renderListEdit(1);
    closeEdit();
}


// đóng edit
function closeAeEdit(){
    document.getElementById('modal-ae-edit').style.display = "none";
}