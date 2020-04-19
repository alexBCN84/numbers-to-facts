import { currentDate } from '../helpers';

const endpointRoot = 'http://numbersapi.com/';
const randomYear = 'random/year';
const randomDate = 'random/date';
const randomMath = 'random/math';
const randomTrivia = 'random/trivia';

// function handleResponse(res){
//   return res.json()
//     .then(json => {
//       if(res.ok) return json
//       let error = Object.assign({}, json, {status: res.status, text: res.text})
//       return Promise.reject(error)
//     })
// }

// export function getRandomYear() {
//   fetch(`${endpointRoot}${randomYear}?json`)
//     .then(handleResponse)
//     .then(data => console.log(JSON.stringify({'getRandomYear': data}, null, 4)))
//     .catch(error => console.log(error))
// }

// export function getRandomTrivia() {
//   fetch(`${endpointRoot}${randomTrivia}?json`)
//     .then(handleResponse)
//     .then(data => console.log(JSON.stringify({'getRandomTrivia': data}, null, 4)))
//     .catch(error => console.log(error))
// }

// export function getRandomDate() {
//   fetch(`${endpointRoot}${randomDate}?json`)
//     .then(handleResponse)
//     .then(data => console.log(JSON.stringify({'getRandomDate': data}, null, 4)))
//     .catch(error => console.log(error))
// }

// export function getRandomMath() {
//   fetch(`${endpointRoot}${randomMath}?json`)
//     .then(handleResponse)
//     .then(data => console.log(JSON.stringify({'getRandomMath': data}, null, 4)))
//     .catch(error => console.log(error))
// }

// export function getIntegerYear(integer) {
//   fetch(`${endpointRoot}${integer}/year?json`)
//     .then(handleResponse)
//     .then(data => console.log(JSON.stringify({'getIntegerYear': data}, null, 4)))
//     .catch(error => console.log(error))
// }

// export function getIntegerTrivia(integer) {
//   fetch(`${endpointRoot}${integer}/trivia?json`)
//     .then(handleResponse)
//     .then(data => console.log(JSON.stringify({'getIntegerTrivia': data}, null, 4)))
//     .catch(error => console.log(error))
// }

// export function getIntegerDate(integer) {
//   fetch(`${endpointRoot}${integer}/date?json`)
//     .then(handleResponse)
//     .then(data => console.log(JSON.stringify({'getIntegerDate': data}, null, 4)))
//     .catch(error => console.log(error))
// }

// export function getIntegerMath(integer) {
//   fetch(`${endpointRoot}${integer}/math?json`)
//     .then(handleResponse)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// }

async function handleResponse(res) {
  const error = json => Object.assign({}, json, {status: res.status, text: res.text})
  const checkInput = json => res.ok ? json :  Promise.reject(error(json))
  const response = await res.json()
  const result = await checkInput(response)
  return result;
}

export async function getRandomYear() {
  try { 
    const response = await fetch(`${endpointRoot}${randomYear}?json`)
    return await handleResponse(response);
  } catch(error){
    console.log(error)
  }
}

export async function getRandomTrivia() {
  try {
    const response = await fetch(`${endpointRoot}${randomTrivia}?json`)
    return await handleResponse(response)
  } catch(error){
    console.log(error)
  }
}

export async function getRandomDate() {
  try {
    const response = await fetch(`${endpointRoot}${randomDate}?json`)
    return  await handleResponse(response)
  } catch(error){
    console.log(error)
  }
}

export async function getRandomMath() {
  try {
    const response = await fetch(`${endpointRoot}${randomMath}?json`)
    return await handleResponse(response)
  } catch(error) {
    console.log(error)
  }
}

export async function getIntegerYear(integer) {
  try {
    const response = await fetch(`${endpointRoot}${integer}/year?json`)
    return await handleResponse(response)
  } catch(error) {
    console.log(error)
  }
}

export async function getIntegerTrivia(integer) {
  try {
    const response = await fetch(`${endpointRoot}${integer}/trivia?json`)
    return await handleResponse(response)
  } catch(error) {
    console.log(error)
  }
}

export async function getIntegerDate(integer) {
  try {
    const response = await fetch(`${endpointRoot}${integer}/date?json`)
    return await handleResponse(response)
  } catch(error) {
    console.log(error)
  }
}

export async function getIntegerMath(integer) {
  try {
    const response = await fetch(`${endpointRoot}${integer}/math?json`)
    return await handleResponse(response)
  } catch(error) {
    console.log(error)
  }
}

export function getTodayRandomFact() {
  const {day, month} = currentDate() 
  return getIntegerDate(`${month}/${day}`)
}

