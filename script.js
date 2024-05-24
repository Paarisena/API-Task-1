let select = document.querySelectorAll('.currency')
let btn = document.getElementById('btn')
let input = document.getElementById('input')
fetch("https://api.frankfurter.app/currencies")
.then((res)=> res.json())
.then((res)=>displaDropDown(res))

function displaDropDown(res){
     let curr1 = (Object.entries(res))
     for(let i=0;i<curr1.length;i++){
     let out = `<option value="${curr1[i][0]}">${curr1[i][0]}</option>`
    select[0].innerHTML+= out
    select[1].innerHTML+= out
     }
}
               
btn.addEventListener('click',()=>{
    let curr2 = select[0].value
    let curr3 = select[1].value
    let inputVal = input.value
    if(curr2===curr3)
    alert("Same currency warning")
else
convert(curr2,curr3,inputVal)
})

function convert(curr2,curr3,inputVal){
const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${inputVal}&from=${curr2}&to=${curr3}`)
  .then(resp => resp.json())
  .then((data) => {
    document.getElementById('result').value = Object.values(data.rates)[0] 
})
}

