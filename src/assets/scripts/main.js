// This triggers only when landing on the website
document.addEventListener('DOMContentLoaded', function () {

    // This interval makes sure the images have loaded 
    // before initialisation of the BackgroundCheck script
    const checkExist = setInterval(function() {
      const images = document.querySelector('.image-background-check')
      if (images) {
         clearInterval(checkExist);
         BackgroundCheck.init({
          targets: '.target',
          images: '.image-background-check'
        })
        // To make sure the script refreshes on landing on the page
        BackgroundCheck.refresh()
      }
   }, 100); // check every 100ms
    
  //  on mobile: to test if wheel triggered event is enough 
    document.addEventListener('touchend', function () {
      BackgroundCheck.refresh()
    })
    
    // To test without: does wheel triggered event enough?
    document.addEventListener('scrollend', function () {
      console.log('scroll')
      BackgroundCheck.refresh()
    })

    // In order to allow horizontal scroll to trigger the refresh
    let wheelEventEndTimeout = null
    document.addEventListener('wheel', function () {
      clearTimeout(wheelEventEndTimeout);
      wheelEventEndTimeout = setTimeout(() => {
        BackgroundCheck.refresh()
      }, 60)
    })
  })


