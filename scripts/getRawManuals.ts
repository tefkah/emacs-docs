import manuals from './manuals.json'
import fetch from 'node-fetch'
export default async function getRawManuals() {
  for (let i = 0; i < manuals.length; i++) {
    const { name, url } = manuals[i]
    const blob = await fetch(url)
    console.log(blob)
  }
}
