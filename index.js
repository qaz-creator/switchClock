const hour = document.querySelector('.hr')
const minute = document.querySelector('.min')
const second = document.querySelector('.sec')

const setDate = () => {
  let date = new Date()
  let hr = date.getHours() * 30
  let min = date.getMinutes() * 6
  let sec = date.getSeconds() * 6

  hour.style.transform = `rotateZ(${hr + min / 12}deg)`
  minute.style.transform = `rotateZ(${min}deg)`
  second.style.transform = `rotateZ(${sec}deg)`

  // digital Clock
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  let session = 'AM'
  if (h == 0) {
    h = 12
  } else if (h > 12) {
    session = 'PM'
    h = h - 12
  }
  if (m < 10) {
    m = `0${m}`
  }
  if (s < 10) {
    s = `0${s}`
  }

  let time = `${h}:${m}:${s} ${session}`
  document.querySelector('.digital-clock').innerHTML = time

  // date
  let d = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()

  switch (month) {
    case 1:
      month = 'JAN'
      break
    case 2:
      month = 'FEB'
      break
    case 3:
      month = 'MAR'
      break
    case 4:
      month = 'APR'
      break
    case 5:
      month = 'MAY'
      break
    case 6:
      month = 'JUN'
      break
    case 7:
      month = 'JUL'
      break
    case 8:
      month = 'AUG'
      break
    case 9:
      month = 'SEP'
      break
    case 10:
      month = 'OCT'
      break
    case 11:
      month = 'NOV'
      break
    case 12:
      month = 'DEC'
      break
  }
  let day = `${d} ${month} ${year}`
  document.querySelector('.date').innerHTML = day
}

setInterval(setDate, 500)

// switch digital and analogy clock
const togBtn = document.getElementById('togBtn')
const container = document.querySelector('.container')
const digitalClock = document.querySelector('.digital-clock')
const dateText = document.querySelector('.date')
const switchIt = () => {
  if (togBtn.checked) {
    digitalClock.classList.add('hide')
    container.classList.remove('hide')
    document.body.style.backgroundColor = 'wheat'
    dateText.style.color = '#000'
  } else {
    document.body.style.backgroundColor = '#000'
    dateText.style.color = 'wheat'
    digitalClock.classList.remove('hide')
    container.classList.add('hide')
  }
}
togBtn.addEventListener('click', switchIt)
