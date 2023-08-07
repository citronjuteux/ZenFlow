window.addEventListener('scroll', function() {
    if (scrollY > 800) {
      document.querySelector('.navigation').classList.add('black')
    } else {
      document.querySelector('.navigation').classList.remove('black')
    }
  })