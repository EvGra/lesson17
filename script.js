'use strict'

const inputName = document.querySelector('.name')
const inputNameSecond = document.querySelector('.secondName')
const inputAge = document.querySelector('.age')
const inputDate = document.querySelector('.date')
const inputSelect = document.querySelector('#select')
const repairBlock = document.querySelectorAll('.repair input')
const driverBlock = document.querySelectorAll('.driver input')
const inputRank = document.querySelector('.rank')
const inputChildren = document.querySelector('.children')
const inputPosition = document.querySelector('.position')
const saveBtn = document.querySelector('.saveBtn')
const delBtn = document.querySelector('.delBtn')
const block = document.querySelectorAll('.block')
const firstInput = document.querySelectorAll('.firstInput input')
const divTableWorker = document.querySelectorAll('.divTableWorker')
const divTable = document.querySelector('.divTable')
const row = document.querySelectorAll('.row')
const local = JSON.parse(localStorage.getItem("worker")) || []

class Worker {
  constructor(name, secondName, age, date) {
    this.name = name
    this.secondName = secondName
    this.age = age
    this.date = date
  }

  delFun() {
    const index = local.indexOf(row)
      
    local.splice(index, 1)

    localStorage.removeItem('worker')
    localStorage.setItem('worker', JSON.stringify(local)) 
  }
}

const worker = new Worker()

class Repair extends Worker{
  constructor(name, secondName, age, date, rank, children) {
    super(name, secondName, age, date)
    this.rank = rank
    this.children = children
  }

  // get children() {
  //   return this._children
  // }

  // set children(str) {
  //   this.children.push(str)
  // }

  saveLocal() {
    const newLocal = {
      name: firstInput[0].value,
      secondName: firstInput[1].value,
      age: firstInput[2].value,
      date: firstInput[3].value,
      work: inputSelect.value,
      rank: repairBlock[0].value,
      children: repairBlock[1].value
    }
    for (let i = 0; i < firstInput.length; i++) {
      if (firstInput[i].value.trim() !== '')
      firstInput[i].value = ''
    }

    local.push(newLocal)
    localStorage.setItem('worker', JSON.stringify(local))
    }
    saveRep(){
  // firstInput.forEach(input => {
  //   if (input.value === '') {
  //     return alert('Заполните все поля')
  //   }
  // })

  // repairBlock.forEach(input => {
  //   if (input.value === '') {
  //     return alert('Заполните все поля')
  //   }
  // })

  const div = document.createElement('div')

  div.classList.add('row')
  div.innerHTML ='<div class="cell">' + firstInput[0].value + '</div>' + '<div class="cell">' +    firstInput[0].value + '</div>' + '<div class="cell">' + firstInput[2].value + '</div>' + '<div class="cell">' + firstInput[3].value + '</div>' + '<div class="cell">' + inputSelect.value + '</div>' + '<div class="cell">'+ repairBlock[0].value + '</div>' + '<div class="cell">' + '</div>' + '<div class="cell">' + repairBlock[1].value + '</div>' + '<div class="cell">' + '<button class="delBtn">' + 'Удалить' + '</button>' + '</div>'

  divTable.appendChild(div)

  div.querySelector('.delBtn').addEventListener('click', () => {
    worker.delFun()
  })

  repairMan.name = firstInput[0].value
  repairMan.secondName = firstInput[1].value
  repairMan.age = firstInput[2].value
  repairMan.date = firstInput[3].value
  repairMan.rank = repairBlock[0].value
  repairMan.children = repairBlock[1].value

  repairMan.saveLocal()
}
  }
class Driver extends Worker{
  constructor(name, secondName, age, date, position, children) {
    super(name, secondName, age, date)
    this.position = position
    this._children = children
  }

  // get children() {
  //   return this._children
  // }

  // set children(str) {
  //   this.children.push(str)
  // }
  saveLocal() {
    const newLocal = {
    name: firstInput[0].value,
    secondName: firstInput[1].value,
    age: firstInput[2].value,
    date: firstInput[3].value,
    work: inputSelect.value,
    position: driverBlock[0].value,
    children: driverBlock[1].value
    }
    for (let i = 0; i < firstInput.length; i++) {
      if (firstInput[i].value.trim() !== '')
      firstInput[i].value = ''
    }

    local.push(newLocal)

    localStorage.setItem('worker', JSON.stringify(local))
  }
  saveDri(){
  // firstInput.forEach(input => {
  //   if (input.value === '') {
  //     return alert('Заполните все поля')
  //   }
  // })

  // driverBlock.forEach(input => {
  //   if (input.value === '') {
  //     return alert('Заполните все поля')
  //   }
  // })
  const div = document.createElement('div')

  div.classList.add('row')
  div.innerHTML ='<div class="cell">' + firstInput[0].value + '</div>' + '<div class="cell">' +    firstInput[0].value + '</div>' + '<div class="cell">' + firstInput[2].value + '</div>' + '<div class="cell">' + firstInput[3].value + '</div>' + '<div class="cell">' + inputSelect.value + '</div>' + '<div class="cell">' + '</div>' + '<div class="cell">' + driverBlock[0].value + '</div>' + '<div class="cell">' + driverBlock[1].value + '</div>' + '<div class="cell">' + '<button class="delBtn">' + 'Удалить' + '</button>' + '</div>'

  divTable.appendChild(div)
  
   div.querySelector('.delBtn').addEventListener('click', () => {
    worker.delFun()
  })

  driverMan.saveLocal()

  driverMan.name = firstInput[0].value
  driverMan.secondName = firstInput[1].value
  driverMan.age = firstInput[2].value
  driverMan.date = firstInput[3].value
  driverMan.rank = driverBlock[0].value
  driverMan.children = driverBlock[1].value
  }
}

const repairMan = new Repair()
const driverMan = new Driver()

saveBtn.addEventListener('click', (event) => {
  event.preventDefault()

  let i = divTableWorker.length;

    if(i >= 0){
      if (inputSelect.selectedIndex == 1){
        const cloneScreen = divTableWorker[0].cloneNode(true);
        divTableWorker[length].after(cloneScreen)

        repairMan.saveRep()
      } else if (inputSelect.selectedIndex == 2) {
        const cloneScreen = divTableWorker[0].cloneNode(true);
        divTableWorker[length].after(cloneScreen)

        driverMan.saveDri()
      } else {
    }
  }
})
inputSelect.addEventListener('change', function() {
  if (inputSelect.selectedIndex == 1){
    block[0].style.display = "block"
    block[1].style.display = "none"
  } else if (inputSelect.selectedIndex == 2) {
    block[0].style.display = "none"
    block[1].style.display = "block"
  } else {
    block[0].style.display = "none"
    block[1].style.display = "none"
  }
})