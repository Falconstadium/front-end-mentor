const container = document.getElementById('main_content')
const thanks = document.getElementById('thanks_content')
const submitBtn = document.getElementById('submit')
const btn = document.querySelectorAll('#btn')
const rates = document.getElementById('rating')

submitBtn.addEventListener("click", () => {
  thanks.style.display = 'block'
  container.style.display = 'none'
})

btn.forEach((rate) => {
  rate.addEventListener("click", () => {
    rates.textContent = rate.textContent
  })
})