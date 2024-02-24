
const monthEle=document.querySelector('.month h1')
const dateEle=document.querySelector('.month p')
const daysEle=document.querySelector('.days')

const monthIn=new Date().getMonth()
const months=[
    "jan","feb","mar","apr","may","jun","jul","aug","sept","oct","nov","dec"
]

monthEle.innerHTML=months[monthIn]
dateEle.innerHTML=new Date().toDateString()

const lastDay=new Date(new Date().getFullYear(),monthIn+1,0).getDate()
console.log(lastDay)
const firstDay=new Date(new Date().getFullYear(),monthIn,1).getDay()-1
console.log(firstDay)

let days=" "

for(let i=firstDay ;i>0;i--){
    days+=`<div class='empty'></div>`
}
for(let i=1 ;i<=lastDay ;i++){
    if(i===new Date().getDate()){
          days+=`<div class='today'>${i}</div>`
    }else{
         days+=`<div>${i}</div>`
    }
   
}

daysEle.innerHTML=days