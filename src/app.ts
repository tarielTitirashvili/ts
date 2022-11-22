const message: string = 'string'

const button = document.getElementById('button')
 
if(button){
  button.addEventListener('click', ()=>{
    console.log('i was clicked')
  })
}

console.log(message)