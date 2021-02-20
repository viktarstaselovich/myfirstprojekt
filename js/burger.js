window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })
  document.querySelector('#search-form').addEventListener('click', function() {
    document.querySelector('#search-block').classList.toggle('is-active')
  })

})
