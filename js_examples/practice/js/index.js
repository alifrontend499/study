window.onload = function () {
// basic styling
  (function () {
    var bodtyStyle = 'font-family:calibri;margin:0;'
    document.querySelector('body').style.cssText = bodtyStyle
    var elem = document.getElementById('demo')
    elem.style.cssText = 'padding:10px 15px;text-transform:uppercase;text-align:center;'
    elem.innerHTML = '<h1>Js example</h1>'
  })()
// main js
  var inputVal = document.querySelector('.name')
  var getForm = document.querySelector('#get_data')
  getForm.addEventListener('submit', printData)
  function printData (e) {
    e.preventDefault()
    getForm.innerHTML = 'Hi ' + inputVal.value
  }

  var person = {
    'firstName': 'Ali',
    'lastName': 'Mir',
    'address': {
      'city': 'Jalandhar',
      'state': 'Punjab'
    },
    'isFromState': function (stateName) {
      if (stateName === this.address.state) {
        console.log('Yes')
      } else {
        console.log('No')
      }
      return 'Hello'
    }
  }
  person.isFromState('Punjab')
}
