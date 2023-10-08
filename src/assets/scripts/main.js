document.addEventListener('DOMContentLoaded', function () {

    console.log(document.querySelector('.thumbnails'))
    const checkExist = setInterval(function() {
      const images = document.querySelector('.thumbnails')
      if (images) {
         console.log("Exists!", images);
         clearInterval(checkExist);
         BackgroundCheck.init({
          targets: '.target',
          images: '.thumbnails'
        })
        BackgroundCheck.refresh()
      }
   }, 100); // check every 100ms

    

    document.addEventListener('touchend', function () {
      BackgroundCheck.refresh()
    })
    
    document.addEventListener('scrollend', function () {
      console.log('scroll')
      BackgroundCheck.refresh()
    })

    let wheelEventEndTimeout = null
    document.addEventListener('wheel', function () {
      clearTimeout(wheelEventEndTimeout);
      wheelEventEndTimeout = setTimeout(() => {
        BackgroundCheck.refresh()
      }, 60)
    })
  })

