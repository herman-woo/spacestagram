const date = new Date()
const monthString = date.toString().slice(4,7)
const month = "0"+(date.getMonth()+1).toString()
const dayData = date.getDate().toString()
const year = date.getFullYear()

export function getDay(){
    const daySuffix = () => {
        if(dayData.slice(-1) === "1" && dayData.slice(0,1) !== "1"){
                return "st"
        }
        else if(dayData.slice(-1) === "2" && dayData.slice(0,1) !== "1"){
            return "nd"
        }
        else if(dayData.slice(-1) === "3" && dayData.slice(0,1) !== "1"){
            return "rd"
        }
        else{
            return "th"
        }
    }
    const day = dayData+daySuffix()
    const today = `${monthString} ${day} ${year}`
    return today
}
export function getToday(){
    const date = `${year}-${month.slice(-2)}-${dayData}`
    return date
}
export function getYesterday(){
    const date = `${year}-${month.slice(-2)}-${dayData-1}`
    return date
}
export function getPreviousDate(x){
    const date = `${year}-${month.slice(-2)}-${dayData-1-x}`
    return date
}

