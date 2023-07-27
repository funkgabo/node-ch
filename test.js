const year = 2022
const holidays = ['01/06', '04/01', '12/25']
function countHours(year, holidays) {
    let result = 0
    for(let holiday of holidays) {
    const fecha = new Date(year, '01','06').getDay()
    console.log(fecha)
      if(fecha!==0) result + 2
    }
  
    return result
  }

  console.log(countHours(year, holidays))

  