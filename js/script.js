let display = document.getElementById('display')

function show (val) {
  display.innerText = val
}
function math (val) {
  if (display.innerText == 'Error' || display.innerText == 'NaN') {
    return show('')
  }
  if (display.innerText.length < 10) return display.innerText += val
}
function equals () {
  if (!display.innerText) return
  display.innerText = display.innerText.replace('x', '*')
  display.innerText = display.innerText.replace('÷', '/')
  try {
    show(eval(display.innerText))
  } catch (e) {
    show('Error')
  }
}
