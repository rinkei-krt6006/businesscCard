(function (){
const businessCard = document.getElementById("prototype").innerHTML
document.getElementById("prototype").innerHTML = undefined
for(let i=0;i<4;i++){
  document.getElementById("pastarea1").innerHTML += businessCard
  document.getElementById("pastarea2").innerHTML += businessCard
}
console.log(businessCard)
})()