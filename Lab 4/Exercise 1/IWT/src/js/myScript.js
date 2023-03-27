function d() {
    document.write("hello");
}

function loadData(x) {
    if(btn1 == x)
    {
        document.getElementById("imgView").src = "./images/img2.jpg";
        document.getElementById("para").innerHTML = "The iPhone XS is a smartphone developed by Apple and released in 2018. It has a 5.8-inch OLED display, a glass back and stainless steel frame, and is water-resistant. The phone has a dual-camera system, with a 12-megapixel wide-angle lens and a 12-megapixel telephoto lens, and can shoot 4K video at up to 60 frames per second. It is powered by Apple's A12 Bionic chip and runs on the iOS 12 operating system. The phone is available in three colors: gold, silver, and space gray. The iPhone XS was succeeded by the iPhone 11 series in 2019."
    }
    else if(btn2 == x)
    {
        document.getElementById("imgView").src = "./images/img3.jpg";
        document.getElementById("para").innerHTML = "The iPhone XS Max is a larger version of the iPhone XS, released by Apple in 2018. It has a 6.5-inch OLED display, which is the largest display ever on an iPhone. Like the iPhone XS, it has a glass back and stainless steel frame, and is water-resistant. The phone has a dual-camera system, with a 12-megapixel wide-angle lens and a 12-megapixel telephoto lens, and can shoot 4K video at up to 60 frames per second. It is powered by Apple's A12 Bionic chip and runs on the iOS 12 operating system. The phone is available in three colors: gold, silver, and space gray. The iPhone XS Max was succeeded by the iPhone 11 Pro Max in 2019."
    }
    else if(btn3 == x)
    {
        document.getElementById("imgView").src = "./images/img4.png";
        document.getElementById("para").innerHTML = "There is no iPhone 8s Plus. The iPhone 8 Plus is a smartphone developed and sold by Apple Inc. It was released on September 22, 2017, and was the eleventh generation of iPhone models. Here are some details about the iPhone 8 Plus:"
    }
    else if(btn4 == x)
    {
        document.getElementById("imgView").src = "./images/img5.jpg";
        document.getElementById("para").innerHTML = "The iPhone SE is a budget smartphone developed by Apple Inc. It was first released on April 24, 2020, and is a successor to the original iPhone SE released in 2016. Here are some details about the iPhone SE:"
    }
    else 
    {
        alert("Invalid!!!");
    }
}

function priceForInLoop() {
    var phone = [];
    phone["IPhone Xs"] = "$1,349";
    phone["IPhone Xs max"] = "$1,349";
    phone["IPhone 8s Plus"] = "$599";
    phone["IPhone SE"] = "$399";

    var list = "List of Average prices (Using for in loop)<br/>"

    for(var item in phone){
        list += item + " : " +phone[item] + "<br/>";
    }

    document.getElementById("para").innerHTML = list;
}

function priceHigher() {
    var phone = [];
    phone["IPhone Xs"] = 1349;
    phone["IPhone Xs max"] = 1349;
    phone["IPhone 8s Plus"] = 599;
    phone["IPhone SE"] = 399;

    var list = "List of Average prices (Using for in loop)<br/>"

    for(var item in phone){
        if (phone[item]  > 1000 ) {
            list += item + " : " +phone[item] + "<br/>";
        }
    }

    document.getElementById("para").innerHTML = list;

}

function priceLower() {
    var phone = [];
    phone["IPhone Xs"] = 1349;
    phone["IPhone Xs max"] = 1349;
    phone["IPhone 8s Plus"] = 599;
    phone["IPhone SE"] = 399;

    var list = "List of Average prices (Using for in loop)<br/>"

    for(var item in phone){
        if (phone[item]  <= 800 ) {
            list += item + " : " +phone[item] + "<br/>";
        };
    }

    document.getElementById("para").innerHTML = list;

}