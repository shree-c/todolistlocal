
const ulEle = document.getElementById('list')
const inpEle = document.getElementById('inpfield')
function rawhtml(value) {
  return `<li>${value} <div id='hold'><button id='edit'>edit</button> <button id='delete'>delete</button></div></li>`
}
function rawinsidehtml(value) {
  return `${value} <div id='hold'><button id='edit'>edit</button> <button id='delete'>delete</button></div>`
}
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    document.getElementById('but').click()
  }
})
function promfun(event) {
  while (true) {
    const editedTex = prompt('Please enter your name', 'Harry Potter')
    if (editedTex) {
    let xhre = new XMLHttpRequest()
    xhre.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        event.target.parentElement.parentElement.innerHTML =  rawinsidehtml(this.responseText)
      }
    }
    xhre.open("POST", "data", true)
    xhre.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhre.send(`da=${editedTex}`)
    return
    }
  }

}
document.addEventListener('click', (event) => {
  if (event.target.id === 'but') {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        ulEle.insertAdjacentHTML('beforeend', rawhtml(this.responseText))
      }
    }
    xhr.open("POST", "data", true)
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(`da=${inpEle.value}`)
    inpEle.value = ''
  }
  if (event.target.id === 'delete') {
    event.target.parentElement.parentElement.remove()
  }
  if (event.target.id === 'edit') {
    promfun(event)
  }
})
