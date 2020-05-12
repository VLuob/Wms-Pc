 import fillzero from './fillzero'
 export default (data) => {

    let d = new Date()
    d.setTime(data)
   
    let year = d.getFullYear()
    let month = d.getMonth() + 1
    let date = d.getDate()
    let hours = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()
    return `${year}年${fillzero(month)}月${fillzero(date)}日${fillzero(hours)}:${fillzero(min)}:${fillzero(sec)}`


}