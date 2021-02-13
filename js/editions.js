document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.editions-input').forEach(function(hello) {
    hello.addEventListener('click', function(holla) {
      const input = holla.currentTarget.dataset.input

      document.querySelector(`[data-label="${input}"]`).classList.toggle('label-style-click')
    })
  })
})
