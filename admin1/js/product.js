
function createProduct() {
    if (localStorage.getItem('products') == null) {
        var products = [
            { productName: "", category: 'Jordan', price: 123, image: '', quantity: 1 },

        ];

        localStorage.setItem('products', JSON.stringify(products));
        this.renderList();
    }
}



// Them sản phẩm
function showAdd() {
    document.getElementById("contentProduct").style.display = 'flex';
    document.getElementById('contentUser').style.display = 'none';
    document.getElementById("contentBill").style.display = 'none';
    document.getElementById("contentDT").style.display = 'none';
    document.getElementById("contentAE").style.display = 'none';

}
function isEmpty(s) {
    if (s == '') return true;
    return false;
}
function xemtruoc() {
    const productName = document.getElementById('tensp').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('myFile').value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    console.log(image)
    const category = document.getElementById('brand').value;
    if (isEmpty(productName) && isEmpty(price) && isEmpty(image) && isEmpty(category)) {

        document.querySelector('.errorDK5').style.display = "flex";
        document.querySelector('.errorDK6').style.display = "flex";
        document.querySelector('.errorDK7').style.display = "flex";
        document.querySelector('.errorDK8').style.display = "flex";
        document.getElementById('ma').focus();
    }
    else if (isEmpty(productName)) {

        document.querySelector('.errorDK5').style.display = "flex";
        document.querySelector('.errorDK6').style.display = "none";
        document.querySelector('.errorDK7').style.display = "none";
        document.querySelector('.errorDK8').style.display = "none";
        document.getElementById('tensp').focus();
    } else if (isEmpty(price)) {

        document.querySelector('.errorDK5').style.display = "none";
        document.querySelector('.errorDK6').style.display = "flex";
        document.querySelector('.errorDK7').style.display = "none";
        document.querySelector('.errorDK8').style.display = "none";
        document.getElementById('price').focus();
    } else if (isEmpty(image)) {

        document.querySelector('.errorDK5').style.display = "none";
        document.querySelector('.errorDK6').style.display = "none";
        document.querySelector('.errorDK7').style.display = "flex";
        document.querySelector('.errorDK8').style.display = "none";
        document.getElementById('image').focus();
    }
    var a = '';
    if (!isEmpty(productName) && !isEmpty(price) && !isEmpty(image) && !isEmpty(category)) {
        var s = `
            <img src="./img/`+ image + `" alt="" class="product-img">
                <div class="product-decr">
                <p class="product-name">`+ productName + `</p>
                <p class="product-price">`+ price + `</p>
                <button onclick="" class="buy-btn">Thêm vào giỏ hàng</button>
            </div>`
        a += s;
    }
    document.getElementById("product-body").innerHTML = a;
}
function addProduct() {
    const productName = document.getElementById('tensp').value;
    const price = document.getElementById('price').value;
    const category = document.getElementById('brand').value;
    const imageElement = document.getElementById('myFile');
    const imageValue = imageElement ? imageElement.value : null;
    const image = imageValue && imageValue.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/) ? imageValue.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1] : null;
    const quantity = 1;
    var products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    if(isEmpty(productName)) {
        alert("Vui lòng nhập tên sản phẩm.");
    }else if(isEmpty(price)){
        alert("Vui lòng nhập giá sản phẩm.");
    }else if(isNaN(price)){
        alert("Giá sản phẩm phải là số.");
    }else if(price <=0 ){
        alert("Giá sản phẩm phải lớn hơn 0.");
    }
    if( image == null){
        alert("Vui lòng chọn ảnh sản phẩm!")
    }else {
        console.log(image);
    }
    console.log(image);
    if (!isEmpty(productName) && !isEmpty(price) && !isEmpty(image) && !isEmpty(category)) {
        var pd1;
        pd1 = { productName: productName, category: category, price: price, image: "./img/" + image + "", quantity: 1 };
        // products.data.push(pd1);
        //console.log(pd1);
        products.push(pd1);
        toast({
            title: "Thành công!",
            message: "Đã thêm sản phẩm",
            type: "success",
            duration: 3000
        });
        localStorage.setItem('products', JSON.stringify(products));
    }
}


// Sửa Xóa sp
function showAE() {
    document.getElementById("contentProduct").style.display = 'none';
    document.getElementById('contentUser').style.display = 'none';
    document.getElementById("contentBill").style.display = 'none';
    document.getElementById("contentDT").style.display = 'none';
    document.getElementById("contentAE").style.display = 'flex';

    renderListEdit(1);
}
function renderListEdit(sotrang) {
    var products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    var sosp1trang = 4;
    var tongsotrang = Math.ceil(products.length / sosp1trang);
    var page = '';
    for (i = 1; i <= tongsotrang; i++) {
        var a = `<a class="page pageae" id="` + i + `" onclick="renderListEdit(` + i + `);">` + i + `</a>`;
        page += a;
    }
    page = `<div class="page-body">` + page + `</div>`;
    document.getElementById("pages").innerHTML = page;
    var batdau = (sotrang - 1) * sosp1trang;
    var end = []; end[0] = 0
    for (i = 1; i < tongsotrang; i++) {
        end[i] = end[i - 1] + sosp1trang;
    }
    end[tongsotrang] = products.length;
    var productContents = '';
    for (i = batdau; i < end[sotrang]; i++) {
        var a = `<div class="item">
                    <div class="ae-img">
                        <img src="${products[i].image}">
                    </div>
                    <p class="ae-name">${products[i].productName}</p>
                    <p class="ae-price">${products[i].price}</p>
                    <div class="act act-a" onclick="editAdmin(${products[i].productName});"><a href="#" class="ae-edit">Sửa</a></div>
                    <div class="act" onclick="deleteAdmin(${products[i].productName});">
                        <i class="fas fa-trash-alt"></i>  
                    </div>
                </div>`;
        productContents += a;
    }
    document.getElementById('printAE').innerHTML = productContents;
    document.getElementById(sotrang).style = "background-color: #000;color: white;";
}

function deleteAdmin(idDelete) {
    var products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    for (i = 0; i < products.length; i++) {
        if (products[i].productName == idDelete) {
            if (confirm('Bạn có muốn xóa sản phẩm này?')) {
                toast({
                    title: "Thành công!",
                    message: "Xóa sản phẩm thành công",
                    type: "success",
                    duration: 3000
                });
                products.splice(i, 1);
            }
        }
    }
    localStorage.setItem('products', JSON.stringify(products));
    renderListEdit(1);
}