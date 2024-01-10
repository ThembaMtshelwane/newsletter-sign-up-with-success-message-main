const form = document.querySelector('form')
const errrorMessage = document.getElementById('error-message')
const emailBackground = document.getElementById('email')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const email = document.getElementById('email').value
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (emailRegex.test(email)) {
    errrorMessage.classList.remove('error-message')
    emailBackground.classList.remove('error-background')
    localStorage.setItem('email', email)
    window.location.href = `./page2.html?email=${encodeURIComponent(email)}`
  } else {
    errrorMessage.textContent = 'Valid email required'
    errrorMessage.classList.add('error-message')
    emailBackground.classList.add('error-background')
  }
})
