const navbar = document.querySelector('.navbar')
let lastScrollTop = 0 // Variabel untuk menyimpan posisi scroll terakhir
const delta = 5 // Jumlah piksel untuk deteksi scroll

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY

  // Menangani navbar blur saat di-scroll
  if (currentScroll > 50) {
    navbar.classList.add('scrolled')

    // Menyembunyikan navbar saat menggulir ke bawah
    if (Math.abs(currentScroll - lastScrollTop) >= delta) {
      if (currentScroll > lastScrollTop) {
        navbar.style.transform = 'translateY(-100%)' // Menyembunyikan navbar
      } else {
        navbar.style.transform = 'translateY(0)' // Menampilkan navbar
      }
    }
  } else {
    navbar.classList.remove('scrolled')
    navbar.style.transform = 'translateY(0)' // Pastikan navbar terlihat saat di atas
  }

  lastScrollTop = currentScroll // Update posisi scroll terakhir
})

document.addEventListener('DOMContentLoaded', function () {
  var faqCards = document.querySelectorAll('.faq-card')

  faqCards.forEach(function (card) {
    card.addEventListener('click', function () {
      var answer = this.querySelector('.faq-answer')

      if (this.classList.contains('active')) {
        this.classList.remove('active')
        answer.style.maxHeight = null
      } else {
        this.classList.add('active')
        answer.style.maxHeight = answer.scrollHeight + 'px'
      }
    })
  })
})

// scroll button details car
document.addEventListener('DOMContentLoaded', function () {
  const leftButton = document.querySelector('.scroll-button.left')
  const rightButton = document.querySelector('.scroll-button.right')
  const scrollContainer = document.querySelector('.grid-images')

  leftButton.addEventListener('click', function () {
    scrollContainer.scrollBy({
      left: -200 /* Adjust this value to control the scroll distance */,
      behavior: 'smooth'
    })
  })

  rightButton.addEventListener('click', function () {
    scrollContainer.scrollBy({
      left: 200 /* Adjust this value to control the scroll distance */,
      behavior: 'smooth'
    })
  })
})


// Terms and Conditions Popup
document.querySelectorAll('#terms-btn').forEach(function (button) {
  button.addEventListener('click', function (event) {
    event.preventDefault()
    document.getElementById('terms-popup').style.display = 'flex'
  })
})

// Hide the popup if clicked outside of the card
window.addEventListener('click', function (event) {
  const popup = document.getElementById('terms-popup')
  if (event.target === popup) {
    popup.style.display = 'none'
  }
})


