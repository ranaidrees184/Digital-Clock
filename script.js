let mylabel=document.getElementById("label");

update();
setInterval(update, 1000);
function update(){

    let date = new Date();
    mylabel.innerHTML= toformat(date);

    function toformat(date){
        let hours= date.getHours();
        let minutes =date.getMinutes();
        let seconds = date.getSeconds();
        let amorpm =hours<= 12 ? "am":"pm";
       hours= zero(hours);
        minutes=zero(minutes);
       seconds= zero(seconds);
        return `${hours}: ${minutes} : ${seconds}  ${amorpm}`;
    }

    function zero(time){
       time= time.toString();
       return time.length<2 ? `0${time}`:time;
    }

}