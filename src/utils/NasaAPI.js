/*
//  NasaAPI.js
//  This page is the script for async calls to the API at NASA
//  all items are requested and conformed to the specific type we have for items to be displayed
//  if the specific API fails to retrieve anything, it will be 'undefined' and will not be added to the final array
//  the website should still be able to operate even with a failed fetch
*/

import { getRollbackDate, getToday } from "./Date"
//Key should not be a constant in the code, Should use an ENV file to simulate passing in key
const api = 'DrEgeC2ok305jh1fHGtE5XdxBqvK7QJFfY5cCUkh'
//getApod function is the main sync call for the page
//beware of loading times, the further back we go the longer it takes to retrieve information 
export const getApod = async (startDate,endDate) => {
  try {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?start_date=${startDate}&end_date=${endDate}&api_key=${api}`)
    const data = await res.json()
    const apod = await data.map((item) => {
      return {
        key: "apod-" + item.date,
        id: "apod-" + item.date,
        user: "NasaAPOD",
        date: item.date,
        type: item.media_type,
        title: item.title,
        desc: item.explanation,
        url: item.url,
        hdef: item.hdurl
      }
    })
    return apod.reverse()
  }
  catch {
  }
}

// export const getCuriosity = async () => {
//   rollback = 2;
//   const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${getRollbackDate(rollback)}&page=1&api_key=${api}`)
//   const data = await res.json()
//   const curiosity = await data.photos.map((item) => {
//     return {
//       id: "curiosity-" + item.id,
//       user: "CuriosityRover",
//       date: item.earth_date,
//       type: "image",
//       desc: generateRoverDesc(item),
//       title: item.rover.name + " - " + item.camera.name + " (" + item.earth_date + ")",
//       url: item.img_src,
//       hdef: item.img_src,
//     }
//   })
//   return curiosity.slice(0.9)
// }
export const getOpportunity = async () => {
  const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=2014-06-01&page=1&api_key=${api}`)
  const data = await res.json()
  const curiosity = await data.photos.map((item) => {
    return {
      id: "opportunity-" + item.id,
      user: "OpportunityRover",
      date: item.earth_date,
      type: "image",
      desc: generateRoverDesc(item),
      title: item.rover.name + " - " + item.camera.name + " (" + item.earth_date + ")",
      url: item.img_src,
      hdef: item.img_src,
    }
  })
  return curiosity
}

//This Rover only gets 1 date atm, its more of a proof of concept for the home page to get multiple accounts at once
export const getSpirit = async () => {
  const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=2009-06-01&page=1&api_key=${api}`)
  const data = await res.json()
  const curiosity = await data.photos.map((item) => {
    return {
      id: "spirit-" + item.id,
      user: "SpiritRover",
      date: item.earth_date,
      type: "image",
      desc: generateRoverDesc(item),
      title: item.rover.name + " - " + item.camera.name + " (" + item.earth_date + ")",
      url: item.img_src,
      hdef: item.img_src,
    }
  })
  return curiosity.slice(0, 9)
}
const generateRoverDesc = (item) => {
  return `This photo was taken on Mars by the ${item.rover.name} rover on ${item.earth_date}, using it's ${item.camera.full_name} (${item.camera.name}).  The ${item.rover.name} rover launched from Earth on ${item.rover.launch_date} and landed on Mars on ${item.rover.landing_date}. It's mission is currently ${item.rover.status}`
}

export const getAllPostsFrom = async (rollbackDate) => {
  const all = []
  const apod = await getApod(rollbackDate,getToday())
  for (let arr of [apod /*, curiosity, opportunity, spirit*/]) {
    if (arr) {
      for (let item of arr) {
        // debug console.log(item)
        all.push(item)
      }
    }
    else {
      console.log("empty")
    }
  }
  return all
}
