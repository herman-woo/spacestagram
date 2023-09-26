const date = new Date()
const currentDay = date.getDate()
const currentDayString = currentDay.toString()
const monthName = date.toString().slice(4, 7)
const currentMonth = date.getMonth() + 1
const currentMonthString = "0" + currentMonth.toString()
const currentYear = date.getFullYear()

//Gets the day for the Header where the month name is eng and there are suffix with the date
//Format: 'Sep 20th 2023'
export function getDay() {
    const day = currentDayString + getSuffix()
    return `${monthName} ${day} ${currentYear}`
}

//Gets String value '2023-09-20' for comparison against posts
export function getToday() {
    const date = `${currentYear}-${currentMonthString.slice(-2)}-${currentDayString}`
    return date
}
export function getYesterday() {
    const date = `${currentYear}-${currentMonthString.slice(-2)}-${currentDayString - 1}`
    return date
}

//can currently only handle rollbacks that are less than 31 days
//Gets any date in format '20xx-xx-xx' n amount of roll back
export function getRollbackDate(rollback,startingDate) {
    //format for day is always 20XX-XX-XX
    //therefore splitting by '-' will always create an array of 3 numbers
    //ex [2023,09,23] or [2024,1,15]
    //currently also dont really account for leap years
    let day = startingDate.split('-')[2]
    let month = startingDate.split('-')[1]
    let year = startingDate.split('-')[0]

    if (rollback > day){
        if (month == 1){
            month = 12
            year -= 1
        }
        else{
            month -= 1
        }
        day -= rollback
        day += getDaysPast(month)
    }
    else{
        day -= rollback 
    }

    const date = year.toString() + "-" + month.toString() + "-" + day.toString()
    // console.log(`Rolled back to ${date}`)
    return date
}

function getSuffix() {
    if (currentDayString.slice(-1) === "1" && currentDayString.slice(0, 1) !== "1") {
        return "st"
    }
    else if (currentDayString.slice(-1) === "2" && currentDayString.slice(0, 1) !== "1") {
        return "nd"
    }
    else if (currentDayString.slice(-1) === "3" && currentDayString.slice(0, 1) !== "1") {
        return "rd"
    }
    else {
        return "th"
    }
}

function getDaysPast(month) {
    switch (month) {
        case 1:
            return 31
        case 2:
            return 28
        case 3:
            return 31 
        case 4:
            return 30
        case 5:
            return 31
        case 6:
            return 30
        case 7:
            return 31
        case 8:
            return 31
        case 9:
            return 30
        case 10:
            return 31
        case 11:
            return 30
        case 12:
            return 31
    }
}