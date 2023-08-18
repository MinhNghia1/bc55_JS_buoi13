/**
 * Đầu Vào
 * -Ngày làm numberDay
 * -Lương 1 ngày 100.000
 * Xử lý
 * - tạo biến Tổng  tong = 0;
 * - tao bien numberDay 
 * - tạo biến oneDay = 100.000
 * - Dom tới nút Tính 
 * - Dom tới numberDay
 * Show kết quả
 * -  tong = oneDay * numberDay
 */

var tong = 0;

var btnSalary = document.getElementById("btnSalary");
btnSalary.onclick = function () {
    var numberDay = document.getElementById("numberDay").value;
    var numberMonney = document.getElementById("numberMonney").value;
    tong = numberDay * numberMonney ;
   
    ketQua = "ket qua la :" + tong;
    var divThongBao = document.getElementById("thongBao");

    divThongBao.innerText = ketQua;

}

/**
 * Đầu vào
 * - người dùng nhập 5 số có biến là tbNumber
 * Xử Lý
 * - tong = 0;
 * -Dom tới nút btnTrungBinh 
 * -Dom tới 5 cai id tbNumber để lấy value
 * -tong = (tbNumber1 + tbNumber2 + tbNumber3 + tbNumber4 + tbNumber5)/5
 * Đầu ra
 * - ketQua1 = "trung binh của 5 số là : " + tong ;+;
 */
var tong = 0;
var btnTrungBinh = document.getElementById("btnTrungBinh");
btnTrungBinh.onclick = function () {
    var tbNumber1 = document.getElementById("tbNumber1").value;
    var tbNumber2 = document.getElementById("tbNumber2").value;
    var tbNumber3 = document.getElementById("tbNumber3").value;
    var tbNumber4 = document.getElementById("tbNumber4").value;
    var tbNumber5 = document.getElementById("tbNumber5").value;

    tbNumber1 = Number(tbNumber1);
    tbNumber1 = Number(tbNumber1);
    tbNumber2 = Number(tbNumber2);
    tbNumber3 = Number(tbNumber3);
    tbNumber4 = Number(tbNumber4);
    tbNumber5 = Number(tbNumber5);

    tong = (tbNumber1 + tbNumber2 + tbNumber3 + tbNumber4 + tbNumber5)/5;

    
    
    var ketQua1 = "trung binh cua 5 so la :" + tong ;
    var divThongBaoTB = document.getElementById("thongBaoTB");
    divThongBaoTB.innerText = ketQua1;
}

/**
 * Đầu vào 
 * -nhập số tiền mong muốn 
 * Xử Lý
 * - tong = 0;
 * - tạo biến uSD = 23500;
 * - Dom tới btnUSD
 * - DOm tới moneyUSD để lấy value
 * - tong = moneyUSD * uSD ;
 * show ket qua 
 * ketQua2 = "số tiền là : " + tong;
 */

var tong = 0;
var uSD = 23500;

var btnUSD = document.getElementById("btnUSD")
btnUSD.onclick = function () {
    var moneyUSD = document.getElementById("moneyUSD").value;
    tong =  moneyUSD * uSD;
    
    var ketQua2 = "số tiền là :" + tong;
    var divThongBaoVND = document.getElementById("thongBaoVND");
    divThongBaoVND.innerText = ketQua2;
}

/**
 * Đầu Vào 
 * - nhập chiều dài chieuDai
 * - nhập chiều rộng chieuRong
 * Xử Lý
 * - tạo biến chuVi = 0;
 * - tạo biến dienTich = 0;
 * -Dom tới nút btn 
 * -Dom tới chieuDai để lấy value
 * -Dom tới chieuRong để lấy value
 * - chuVi = (chieuDai + chieuRong)*2
 * - dienTich = chieuDai * chieuRong
 * Show kết quả
 * - ketQua3 = "chu vi là " + chuVi;
 * - ketQua4 = "diện tích là " + dienTich;
 */

var chuVi = 0;
var dienTich = 0;

var btnHCN = document.getElementById("btnHCN");
btnHCN.onclick = function () {
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;
    chieuDai = Number(chieuDai);
    chieuRong = Number(chieuRong);
    chuVi = (chieuDai + chieuRong)*2;
    dienTich = chieuDai * chieuRong;
    var ketQua3 = "chu vi là " + chuVi;
    var ketQua4 = "diện tích là " + dienTich;

    var divThongBaoCV = document.getElementById("thongBaoCV");
    divThongBaoCV.innerText = ketQua3

    var divThongBaoDT = document.getElementById("thongBaoDT");
    divThongBaoDT.innerText = ketQua4
}

/**
 * Đầu vào
 * - nhập só numberKySo
 * Xử lý
 * -lấy đơn vị hang chục là hangChuc =  numberKySo / 10 (Math.floor())
 * -lấy hang đơn vị là hangDV = numberKySo % 10
 * tong = hangChuc  + hangDV
 * Show ketqua
 * ketQua5 = "Tổng của 2 ký số là " + tong;
 */
var tong = 0;
var btnKySo = document.getElementById("btnKySo");
btnKySo.onclick = function () {
    var numberKySo = document.getElementById("numberKySo").value;
    var hangChuc =  Math.floor(numberKySo / 10);
    var hangDV = numberKySo % 10;
    tong = hangChuc  + hangDV;
    var ketQua5 = "Tong la : " + tong;
    var divThongBaoKySo = document.getElementById("thongBaoKySo");
    divThongBaoKySo.innerText = ketQua5;

}