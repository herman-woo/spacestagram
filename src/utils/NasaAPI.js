const api = 'DrEgeC2ok305jh1fHGtE5XdxBqvK7QJFfY5cCUkh'
const date = new Date()
const currMonth = date.getUTCMonth()+1
const currDay = date.getDate()
const currYear = date.getFullYear()
const today = currYear.toString()+"-"+currMonth.toString()+"-"+currDay.toString()
const yesterday = currYear.toString()+"-"+currMonth.toString()+"-"+(currDay-1).toString()

const generateRoverDesc = (item) => {
  return `This photo was taken on Mars by the ${item.rover.name} rover on ${item.earth_date}, using it's ${item.camera.full_name} (${item.camera.name}).  The ${item.rover.name} rover launched from Earth on ${item.rover.launch_date} and landed on Mars on ${item.rover.landing_date}. It's mission is currently ${item.rover.status}`
}


export const getApod = async () => {
    const prevMonth = date.getUTCMonth()
    try{
      const res = await fetch(`https://api.nasa.gov/planetary/apod?start_date=2021-${prevMonth}-${currDay+1}&api_key=${api}`)
      const data = await res.json()
      const apod = await data.map((item) => {
        return {
          id: "apod-"+item.date,
          user: "NasaAPOD",
          date: item.date,
          type: item.media_type,
          title: item.title,
          desc: item.explanation,
          url: item.url,
          hdef: item.hdurl
        }
      })
      return apod.reverse().slice(0,30)

    }
    catch{
    }
}

export const getCuriosity = async () => {
  const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${yesterday}&page=1&api_key=${api}`)
  const data = await res.json()
  const curiosity = await data.photos.map((item) => {
    return {
      id:"curiosity-"+item.id,
      user: "CuriosityRover",
      date: item.earth_date,
      type: "image",
      desc: generateRoverDesc(item),
      title: item.rover.name+" - "+item.camera.name+" ("+item.earth_date+")",
      url: item.img_src,
      hdef: item.img_src,
    }
  })
  return curiosity
}
export const getOpportunity = async () => {
  const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=2014-06-01&page=1&api_key=${api}`)
  const data = await res.json()
  const curiosity = await data.photos.map((item) => {
    return {
      id:"opportunity-"+item.id,
      user: "OpportunityRover",
      date: item.earth_date,
      type: "image",
      desc: generateRoverDesc(item),
      title: item.rover.name+" - "+item.camera.name+" ("+item.earth_date+")",
      url: item.img_src,
      hdef: item.img_src,
    }
  })
  return curiosity
}
export const getSpirit = async () => {
  const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=2009-06-01&page=1&api_key=${api}`)
  const data = await res.json()
  const curiosity = await data.photos.map((item) => {
    return {
      id:"spirit-"+item.id,
      user: "SpiritRover",
      date: item.earth_date,
      type: "image",
      desc: generateRoverDesc(item),
      title: item.rover.name+" - "+item.camera.name+" ("+item.earth_date+")",
      url: item.img_src,
      hdef: item.img_src,
    }
  })
  return curiosity
}

export const getAll = async () => {
  const all = []
  const spirit = await getSpirit()
  const opportunity = await getOpportunity()
  const curiosity = await getCuriosity()
  // const apod = await getApod()
  for (let arr of [spirit,opportunity,curiosity]){
    arr.map((item) => 
    {
      all.push(item)
    })
  }
  return all
}
