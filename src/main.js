import contactHTML from './modal'

const name = 'test name'

console.log('main.js loaded', name)

$('#contact-modal').html(contactHTML)

$(document).ready(function() {
  $('p').click(function() {
    $(this).hide()
  })
})
//
