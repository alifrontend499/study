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
  output.style.cssText = 'background-color:gray;padding:5px 15px;color: #fff;font-size: 1em;'
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
  // (function () {
  //   function rightAlign (str) {
  //     var mainStr = str.split('')
  //     var listing = ''
  //     // console.log(mainStr.length)
  //     for (var i = mainStr.length - 1; i >= 0; i--) {
  //       listing += mainStr[i]
  //     }
  //     return listing
  //   }
  //   output.innerHTML += rightAlign('w3resource')
  // })()
  // finding a leap year
  // function leapYear (year) {
  //   var data = year.toString().split('')
  //   if (parseInt(data[data.length - 1]) === 0 && parseInt(data[data.length - 2]) === 0) {
  //     var finalResult1 = year % 400 === 0 ? 'This is a leap year' : 'This is not a leap year'
  //     return finalResult1
  //   } else {
  //     var finalResult2 = year % 4 === 0 ? 'This is a leap year' : 'This is not a leap year'
  //     return finalResult2
  //   }
  // }
  // output.innerHTML += leapYear(2000)
  // var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']
  // var data = ''
  // function functionName () {
  //   var d = new Date()
  //   for (var i = 2014; i <= 2050; i++) {
  //     data += d + '</br>'
  //   }
  //   if (d.getDay() === 0) {
  //     return data
  //   }
  // }
  // finding the sunday on years till 2050
  // console.log('--------------------')
  // for (var year = 2014; year <= 2050; year++) {
  //   var newd = new Date(year, 0, 1)
  //   if (newd.getDay() === 0) {
  //     output.innerHTML += 'These are the years ' + year + '<br>'
  //   }
  // }
  // console.log('--------------------')
  // find if the userinput matches with random number
  // function guess () {
  //   var randomNumber = Math.round(Math.random() * 10)
  //   var getInput = window.prompt('Enter Number Between 0 to 10')
  //   var retData = parseInt(randomNumber) === parseInt(getInput) ? 'Your are right' : 'Your were Wrong the number was ' + parseInt(randomNumber)
  //   return retData
  // }
  // console.log(guess())
  // finding percentage of a number
  // function findPercent (number, percent) {
  //   return percent + '% of number ' + number + ' is ' + percent * number / 100
  // }
  // console.log(findPercent(90, 25))
  // finding percentage of two number
  // function findPercentTwoNums (totNum, numGet) {
  //   return 'The percentage of the numbers is ' + numGet / totNum * 100 + '%'
  // }
  // output.innerHTML += findPercentTwoNums(1200, 350)
}
