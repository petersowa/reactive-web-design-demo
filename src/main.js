const name = 'test name'

console.log('main.js loaded', name)

$(document).ready(function() {
  $('p').click(function() {
    $(this).hide()
  })
})
