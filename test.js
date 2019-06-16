const { StillCamera } = require('pi-camera-connect')

const stillCamera = new StillCamera()

stillCamera.takeImage().then(image => {
  fs.writeFileSync('still-image.jpg', image)
})
