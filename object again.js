var phone={

    name:"Samsung",
    price:110000,
    tax:25,
    color:"gray-white",
    ram:16,

    adbanner: function(amaderdiscount){

        var phoneprice=this.price;
        var tax=this.tax;
        var pricewithtax= phoneprice/100*tax+phoneprice;

        var mydiscount=amaderdiscount;
        var reducemoney=pricewithtax/100*mydiscount;
        var Finalprice=pricewithtax-reducemoney;
        return Finalprice;
    }

}

document.querySelector("#name").innerHTML=phone.name;
document.querySelector("#price").innerHTML=phone.price;
document.querySelector("#color").innerHTML=phone.color;
document.querySelector("#ram").innerHTML=phone.ram;
document.querySelector("#banner").innerHTML=phone.adbanner(10);