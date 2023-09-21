const date = new Date()
const monthName = date.toString().slice(4,7)

const month = "0"+(date.getMonth()+1).toString()
const currentDay = date.getDate()
const currentDayString = currentDay.toString()
const currentYear = date.getFullYear()

//Gets the day for the Header where the month name is eng and there are suffix with the date
//Format: 'Sep 20th 2023'
export function getDay(){
    const day = currentDayString + daySuffix()
    return `${monthName} ${day} ${currentYear}`
}

//Gets String value '2023-09-20' for comparison against posts
export function getToday(){
    const date = `${currentYear}-${month.slice(-2)}-${currentDayString}`
    return date
}
export function getYesterday(){
    const date = `${currentYear}-${month.slice(-2)}-${currentDayString-1}`
    return date
}

//Gets any string date with the x amount of roll back

export function getRollbackDate(rollback) {
    const day = currentYear.toString()+"-"+month+"-"+(currentDay-rollback).toString()
    return day
}

function daySuffix(){
    if(currentDayString.slice(-1) === "1" && currentDayString.slice(0,1) !== "1"){
        return "st"
    }
    else if(currentDayString.slice(-1) === "2" && currentDayString.slice(0,1) !== "1"){
        return "nd"
    }
    else if(currentDayString.slice(-1) === "3" && currentDayString.slice(0,1) !== "1"){
        return "rd"
    }
    else{
        return "th"
    }
}