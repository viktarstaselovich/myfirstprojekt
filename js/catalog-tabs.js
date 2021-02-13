document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog-painter-link').forEach(function(catalogLink) {
    catalogLink.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog-left').forEach(function(tabContent) {
        tabContent.classList.remove('catalog-left-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog-left-active')
      })
  })
  document.querySelectorAll('.ui-widget-content a').forEach(function(catalogLink) {
    catalogLink.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.ui-widget-content a').forEach(function(changeLink) {
        changeLink.classList.remove('catalog-painter-link-active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('catalog-painter-link-active')
      })
  })
})
