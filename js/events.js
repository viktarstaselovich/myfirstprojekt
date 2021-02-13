document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.event-button').addEventListener('click', function() {
    document.querySelector('.event1920').classList.add('event-blocks-active')
    document.querySelector('.event-button').classList.add('event-button-none')
  })
})
