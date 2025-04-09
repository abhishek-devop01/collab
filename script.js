var btn = document.querySelector('button')
var body = document.querySelector('body')

btn.addEventListener('click', function() { 
   var img = document.createElement('img')
   var x = Math.floor(Math.random() * 100)
   var y = Math.floor(Math.random() * 100)
   var rot = Math.floor(Math.random() * 360)

    img.setAttribute('src', 'https://images.unsplash.com/photo-1634455257140-b5ab16f0770e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVuc3BhbHNofGVufDB8fDB8fHww')
     img.style.height = '200px'
    img.style.width = '200px'
    img.style.left = x + '%'
     img.style.top = y + '%'
     img.style.transform = 'rotate(' + rot + 'deg)'
    img.style.position = 'absolute'

    body.appendChild(img)

});