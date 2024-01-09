const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const email = document.getElementById('email').value
  if (email) {
    localStorage.setItem('email', email)
    window.location.href = `./page2.html?email=${encodeURIComponent(email)}`
  } else {
    alert('Error')
  }
})
