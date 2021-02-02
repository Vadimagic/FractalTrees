const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const particleArray = []

const mouse = {
  x: null,
  y: null,
  radius: 100
}

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x + canvas.clientLeft/2
  mouse.y = e.y + canvas.clientTop/2
})

const drawImage = () => {
  let imageWidth = png.width
  let imageHeight = png.height
  const data = ctx.getImageData()
}