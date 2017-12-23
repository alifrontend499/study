window.onload = function () {
// basic styling
  (function () {
    var bodtyStyle = 'font-family:calibri;margin:0;font-size: 20px;'
    document.querySelector('body').style.cssText = bodtyStyle
    var elem = document.getElementById('heading')
    elem.style.cssText = 'padding:10px 15px;text-transform:uppercase;text-align:center;'
    elem.innerHTML = '<h1>Js example</h1>'
  })()
  var output = document.querySelector('.output')
  output.style.cssText = 'background-color:gray;padding:5px 15px;color: #fff;font-size: 1em;';
// main js
// display date
  // (function () {
  //   var today, mm, dd, yy, monthsNames
  //   today = new Date()
  //   dd = today.getDate()
  //   mm = today.getMonth()
  //   monthsNames = ['January', 'Februry', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  //   yy = today.getFullYear()
  //   // console.dir(today)
  //   output.innerHTML += monthsNames[mm] + '-' + dd + '-' + yy + '</br>'
  //   output.innerHTML += monthsNames[mm] + '/' + dd + '/' + yy
  // })()
  // finding area of the triangle
  // function area (base, height) {
  //   return `The area of the triangle is : ${1 / 2 * base * height} sq.cm`
  // }
  // output.innerHTML += area(6, 4)
  // rotating the string
  (function () {
    function rightAlign (str) {
      var mainStr = str.split('')
      var listing = ''
      // console.log(mainStr.length)
      for (var i = mainStr.length - 1; i >= 0; i--) {
        listing += mainStr[i]
      }
      return listing
    }
    output.innerHTML += rightAlign('w3resource')
  })()
  // canvas
}
