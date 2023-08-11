window.addEventListener('scroll', function() {
    if (scrollY >= this.screen.height - 120) {
      document.querySelector('.navigation').classList.add('black')
    } else {
      document.querySelector('.navigation').classList.remove('black')
    }
  })