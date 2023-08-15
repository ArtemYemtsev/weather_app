export const date = (dt, type) => {
    
    const DAY = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    
    let d = new Date(dt*1000)
    const day_num = d.getDay()
    let res = [addZero(d.getDate()), addZero(d.getMonth() + 1)].join('.');
    let time = [addZero(d.getHours()), addZero(d.getMinutes())].join(':')
    function addZero (value) { if (+value < 10) return '0' + value
        return value
    }
    return type === 'time' ? time : `${res}\n${DAY[day_num]}` 
}