const date = new Date()
const monthName = date.toString().slice(4, 7)

const currentMonth = date.getMonth() + 1
const currentMonthString = "0" + (date.getMonth() + 1).toString()
const currentDay = date.getDate()
const currentDayString = currentDay.toString()
const currentYear = date.getFullYear()

//Gets the day for the Header where the month name is eng and there are suffix with the date
//Format: 'Sep 20th 2023'
export function getDay() {
    const day = currentDayString + daySuffix()
    return `${monthName} ${day} ${currentYear}`
}

export function getDayNum() {
    return currentDay
}
export function getMonthNum() {
    return currentMonth
}
export function getYearNum() {
    return currentYear
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

//Gets any string date with the x amount of roll back

export function getRollbackDate(rollback) {
    let day = currentDay
    let month = currentMonth
    let year = currentYear
    let daysPast;
    if (rollback >= day) {
        while (rollback > 0){
            rollback = rollback - day
            month = month - 1
            if (month == 0){
                month = 12
                year = year - 1
            }
            daysPast = getDaysPast(month)
            if (rollback >= daysPast){
                day = daysPast
            }
            else{
                day = daysPast - rollback
            }
        }
        console.log("current day is " + currentDay + " rollback by "+ rollback + "to: " + day )

        day =1
    }
    else {
        day = currentDay - rollback;
        console.log("current day is " + currentDay + " rollback to: " + day )
    }

    const date = year.toString() + "-" + month.toString() + "-" + day.toString()
    return date
}

function daySuffix() {
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
    let jan, mar, may, jul, aug, oct, dec = 31
    let feb = 28
    let apr, jun, sep, nov = 30
    switch (month) {
        case 1:
            return jan
        case 2:
            return feb
        case 3:
            return mar 
        case 4:
            return apr
        case 5:
            return may
        case 6:
            return jun
        case 7:
            return jul
        case 8:
            return aug
        case 9:
            return sep
        case 10:
            return oct
        case 11:
            return nov
        case 12:
            return dec
    

    }
}