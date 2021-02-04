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
  let imageWidth = image.width
  let imageHeight = image.height
  const data = ctx.getImageData(0,0,imageWidth, imageHeight)
  ctx.clearRect(0,0,canvas.width, canvas.height)

  class Particle {
    constructor(x, y, color, size) {
      this.x = x + canvas.width/2 - image.width * 2
      this.y = y + canvas.height/2 - image.height * 2
      this.color = color
      this.size = size
      this.baseX = x + canvas.width/2 - image.width * 2
      this.baseY = y + canvas.height/2 - image.height * 2
      this.density = (Math.random() * 10) + 2
    }

    draw() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.closePath()
      ctx.fill()
    }

    update() {
      ctx.fillStyle = this.color

      let dx = mouse.x - this.x
      let dy = mouse.y - this.y
      let distance = Math.sqrt(dx * dx + dy * dy)
      let forceDirectionX = dx / distance
      let forceDirectionY = dy / distance

      const maxDistance = 100;

      let force = (maxDistance - distance) / maxDistance

      if (force < 0) {
        force = 0
      }

      let directionX = (forceDirectionX * force * this.density * 0.6)
      let directionY = (forceDirectionY * force * this.density * 0.6)

      if (distance < mouse.radius + this.size) {
        this.x -= directionX
        this.y -= directionY
      } else {
        if (this.x !== this.baseX) {
          let dx = this.x - this.baseX
          this.x -= dx/20
        }
        if (this.y !== this.baseY) {
          let dy = this.y - this.baseY
          this.y -= dy/20
        }
      }
      this.draw()
    }
  }

  function init() {

    for (let y = 0, y2 = data.height; y < y2; y++) {
      for (let x = 0, x2 = data.width; x < x2; x++) {
        if (data.data[(y * 4 * data.width) + (x * 4) + 3] > 128) {
          let positionX = x
          let positionY = y
          let color = "rgb(" + data.data[(y * 4 * data.width) + (x * 4)] + ","
                               + data.data[(y * 4 * data.width) + (x * 4) + 1] + ","
                               + data.data[(y * 4 * data.width) + (x * 4) + 2] + ")"
          particleArray.push(new Particle(positionX * 4, positionY * 4, color, 2))
        }
      }
    }
  }

  function animate() {
    requestAnimationFrame(animate)
    ctx.fillStyle = 'rgba(0,0,0,.05)'
    ctx.fillRect(0,0,innerWidth, innerHeight)

    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].update()
    }
  }
  init()
  animate()

  window.addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
    init()
  })
}

const image = new Image()
image.src = "data:image/png;base64,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"

window.addEventListener('load', (e) => {
  debugger
  ctx.drawImage(image, 0, 0)
  drawImage()
})