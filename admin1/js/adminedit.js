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
        if(products[i].productName==idEdit){
          
            var a=`
                    <div class="edit-img">
                        <img id="productImage" src=".${products[i].image}">
                    </div>  
                    <div class="item-body item-body-ae">
                    <p class="text">Tên sản phẩm</p>
                    <input type="text" id="namesp" value="${products[i].productName}"> 
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
                    `;
                    printEdit+=a;
                    index=i;
                    id = i;
                    brand = products[i].brand;
                    break;
        }
    }
    var update = `<button class="btn-confirm " onclick="updateInfo('${id}','${products[i].image}');">Cập nhật</button>`;
    document.getElementById("edit").innerHTML = printEdit;
    document.querySelector(".btn-confirm-ae").innerHTML =update;
}

// cập nhật
function updateInfo(productId,img){
    var linkImg = img;
    var productName = document.getElementById('namesp').value;
    var productPrice = +document.getElementById('giasp').value;
    console.log("Ảnh sp: -> "+linkImg + "  tên sp: "+productName+ "  giá sp: "+productPrice)
    var products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    for (var i = 0; i < products.length; i++) {
        if(i == productId){
            products[i].productName = productName;
            products[i].price = productPrice;
            break;
        }
        
    }
    localStorage.setItem('products', JSON.stringify(products));
    showAE();
    closeEdit();
}


// đóng edit
function closeAeEdit(){
    document.getElementById('modal-ae-edit').style.display = "none";
}