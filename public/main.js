const ulEle = document.getElementById('list')
// const node = document.createElement('LI')
const inpEle = document.getElementById('inpfield')
function rawhtml (value) {
  return `<li>${value} <div id='hold'><button id='edit'>edit</button> <button id='delete'>delete</button></div></li>`
}
function rawinsidehtml (value) {
  return `${value} <div id='hold'><button id='edit'>edit</button> <button id='delete'>delete</button></div>`
}
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    document.getElementById('but').click()
  }
})
function promfun () {
  while (true) {
    const editedTex = prompt('Please enter your name', 'Harry Potter')
    if (editedTex) {
      return rawinsidehtml(editedTex)
    }
  }

}

document.addEventListener('click', (event) => {
  if (event.target === document.getElementById('but')) {
    if (inpEle.value) {
      ulEle.insertAdjacentHTML('beforeend', rawhtml(inpEle.value))
      inpEle.value = ''
    }
  }
  if (event.target === document.getElementById('delete')) {
    document.getElementById('delete').parentElement.parentElement.remove()
  }
  if (event.target === document.getElementById('edit')) {
    document.getElementById('edit').parentElement.parentElement.innerHTML = promfun()
  }
})
