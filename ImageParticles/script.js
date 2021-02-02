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
  ctx.clearRect(0,0,canvas.width, canvas.height)

  class Particle {
    constructor(x, y, color, size) {
      this.x = x + canvas.width/2 - png.width * 2
      this.y = y + canvas.height/2 - png.height * 2
      this.color = color
      this.size = size
      this.baseX = x + canvas.width/2 - png.width * 2
      this.baseY = y + canvas.height/2 - png.height * 2
      this.density = Math.random() * 10 + 2
    }
  }
}