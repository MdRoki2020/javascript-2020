function timeNow(){
    dateObject=new Date();
    
    var currentTimeNow=dateObject.getHours() +":"+ dateObject.getMinutes() +":"+ dateObject.getSeconds() +" PM";
    document.getElementById("time").innerHTML=currentTimeNow;

}
setInterval(timeNow,1000);
