var div, container = document.getElementById('container')

for(let i=0; i<5; i++) {
  div = document.createElement('div')
  div.onclick = function() {
    alert('This is box #' + i)
  }
  container.appendChild(div)
}

