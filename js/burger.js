window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })
  document.querySelector('#search-form').addEventListener('click', function() {
    document.querySelector('#search-block').classList.toggle('is-active')
  })


  document.querySelectorAll('.header-art-btn').forEach(function(artList) {
    artList.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      // console.log(path)

      document.querySelector(`[data-target="${path}"]`).classList.toggle('header-art-is-open')
    })
  })

  document.querySelectorAll('.catalog-language-item').forEach(function(catalogLang) {
    catalogLang.addEventListener('click', function(catalog) {
      const lang = catalog.currentTarget.dataset.lang

      document.querySelectorAll('.catalog-content').forEach(function(tabContent) {
        tabContent.classList.remove('catalog-content-active')
      })
      document.querySelector(`[data-catalog="${lang}"]`).classList.add('catalog-content-active')
      })
  })
  document.querySelectorAll('.catalog-language-item').forEach(function(catalogLang) {
    catalogLang.addEventListener('click', function(catalog) {
      const lang = catalog.currentTarget.dataset.lang

      document.querySelectorAll('.catalog-language-item').forEach(function(changeLang) {
        changeLang.classList.remove('catalog-language-active')
      })
      document.querySelector(`[data-lang="${lang}"]`).classList.add('catalog-language-active')
      })
  })


  document.querySelectorAll('.catalog-autor-link').forEach(function(catalogLink) {
    catalogLink.addEventListener('click', function(authors) {
      const author = authors.currentTarget.dataset.author

      document.querySelectorAll('.catalog-content-left').forEach(function(tabContent) {
        tabContent.classList.remove('catalog-left-active')
      })
      document.querySelector(`[data-authorimg="${author}"]`).classList.add('catalog-left-active')
      })
  })
  document.querySelectorAll('.ui-widget-content a').forEach(function(catalogLink) {
    catalogLink.addEventListener('click', function(authors) {
      const author = authors.currentTarget.dataset.author

      document.querySelectorAll('.ui-widget-content a').forEach(function(changeLink) {
        changeLink.classList.remove('catalog-author-link-active')
      })
      document.querySelector(`[data-author="${author}"]`).classList.add('catalog-author-link-active')
      })
  })

  document.querySelector('.events-btn').addEventListener('click', function() {
    document.querySelector('.events-blocks-list').classList.add('event-blocks-active')
    document.querySelector('.events-btn').classList.add('event-btn-none')
  })
})
