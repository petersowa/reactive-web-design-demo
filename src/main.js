import './jquery-setup'

import 'bootstrap'
import 'mdbootstrap'
import 'mdbootstrap/css/mdb.min.css'
//import 'bootstrap-material-design'
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap-material-design/dist/css/bootstrap-material-design.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

console.log($, jQuery)

// import contactHTML from './modal'

const name = 'test name'

console.log('main.js loaded', name)

// $('#contact-modal').html(contactHTML)
$('#app').html(/*html*/ `<form>
<div class="form-group">
  <label for="exampleInputEmail1">Email address</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
  <label for="exampleInputPassword1">Password</label>
  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
</div>
<div class="form-check">
  <input type="checkbox" class="form-check-input" id="exampleCheck1">
  <label class="form-check-label" for="exampleCheck1">Check me out</label>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>`)

// $(document).ready(function() {
//   $('p').click(function() {
//     $(this).hide()
//   })
// })
//
