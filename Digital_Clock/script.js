
const  hour=document.querySelector('.hour')
const minute=document.querySelector('.minute')
const second=document.querySelector('.second')
// console.log(hour)
// console.log(minute)
// console.log(second)

function updateClock(){
    const currentTime= new Date()
   
    const currentHour=currentTime.getHours()
    // console.log(currentHour)
    const currentMinute=currentTime.getMinutes()
    // console.log(currentMinute)
    const currentSecond=currentTime.getSeconds()
    console.log(currentSecond)
    const hourDeg=(currentHour / 12) * 360
    // console.log(hourDeg)
    hour.style.transform=`rotate(${hourDeg}deg)`
    const minuteDeg=(currentMinute / 60) * 360
    // console.log(minuteDeg)
    minute.style.transform=`rotate(${minuteDeg}deg)`
    const secondDeg=(currentSecond / 60) * 360
    console.log(secondDeg)
    second.style.transform=`rotate(${secondDeg}deg)`
    
    
    
}
setInterval(updateClock,1000)

