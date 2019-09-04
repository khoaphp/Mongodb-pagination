var trang = 3;
var skip = (trang - 1) * soTin1Trang;
    
Student.find(function(err, Mang){
        if(err){ console.log("Count bi loi: " + err); }
        else{ console.log(Mang); }
}).sort({ThuTu:1}).skip(skip).limit(soTin1Trang);

    var tong = Student.find().countDocuments(function(err, result){
        if(err){ console.log("Count bi loi: " + err); }
        else{ 
            console.log("SoTin " + result);
            var sotrang = Math.ceil(result/soTin1Trang);
            console.log(sotrang);
         }
    });