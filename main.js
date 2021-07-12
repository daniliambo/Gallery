const h1 = document.createElement('h1')
const main = document.createElement('main')
const ul = document.createElement('ul')


document.body.appendChild(h1)
document.body.appendChild(main)
main.appendChild(ul)


h1.textContent = 'Photo Galery Example'

for (i = 1;i < 6;i++) {
  pic = 'images/pic' + i + '.jpg'
  console.log(pic)
  li = document.createElement('li')
  img = document.createElement('img')
  ul.appendChild(li)
  li.appendChild(img)
  img.setAttribute('src', pic)
}

arr = document.querySelectorAll('li')

arr.forEach(el => {
  el.onclick = (e) => {
    mainsrc = ul.firstChild.children[0].getAttribute('src')
    oursrc = el.children[0].getAttribute('src')
    e.target.setAttribute('src', mainsrc)
    ul.firstChild.children[0].setAttribute('src', oursrc)
  }
})