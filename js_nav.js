window.onload = function() {
    set_time()};
   
    function set_time(){
        var d = new Date();
        var hours = d.getHours();
        var mins = d.getMinutes();
        var secs = d.getSeconds();
    
        if(hours<10){
            hours = "0" + hours;
        }
        if(mins<10){
            
            mins = "0" + mins;
        }
        if(secs<10){

            secs = "0" + secs;
        }
   
    document.getElementById("tm_oc").innerHTML = hours+":"+mins+":"+secs;

}
setInterval(set_time, 1000);

function side_tr(){
    let gt=document.getElementById('side').style.left=0;

}
function close_side(){
    let gt=document.getElementById('side').style.left='-210px';


}


