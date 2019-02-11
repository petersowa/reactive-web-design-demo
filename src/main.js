import './jquery-setup'

import 'bootstrap'
import 'mdbootstrap'
import 'mdbootstrap/css/mdb.min.css'
//import 'bootstrap-material-design'
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap-material-design/dist/css/bootstrap-material-design.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const appLayout = /*html*/ `
<div class="container z-depth-2 align-middle mt-3 p-3"><h3>Get Stock Quote</h3>
<form class="md-form">

<input type="text" id="stock-sym" placeholder="" class="form-control"></input>
<label for="stock-sym">Stock Symbol</label>
</form>
<div id='stock-quote'></div></div>

`

$('#app').append(appLayout)
$('form').submit(e => {
  e.preventDefault()
  const sym = $('#stock-sym').val()
  //$('#stock-quote').append(sym)
  $('#stock-sym').val('')
  getQuote(sym)
})

function updateQuoteDisplay(data) {
  $('#stock-quote').html(/*html*/ `
    <table class="table">
    <thead>
    <tr>
    <th colspan="2">Stock Data: ${data.companyName}</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>Latest Price<td>
    <td>${data.latestPrice}<td>
    </tr>
    <tr>
    <td>Change Percent<td>
    <td>${data.changePercent}<td>
    </tr>
    <tr>
    <td>Open Price<td>
    <td>${data.open}<td>
    </tr>
    <tr>
    <td>Close Price<td>
    <td>${data.close}<td>
    </tr>
    <tr>
    <td>PE Rates<td>
    <td>${data.peRatio}<td>
    </tr>
    <tbody>
    </table>
  `)
}

function getQuote(sym = 'aapl') {
  $.ajax({
    type: 'GET',
    url: `https://api.iextrading.com/1.0/stock/${sym}/quote`,
    success: function(resp) {
      updateQuoteDisplay(resp)
    },
    error: function() {
      console.error('unable to fetch data')
    },
  })
}
