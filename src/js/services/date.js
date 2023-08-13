export const date = (dt, type) => {
    // const DAY = {
    //     0: 'Sunday',
    //     1: 'Monday',
    //     2: 'Tuesday',
    //     3: 'Wednesday',
    //     4: 'Thursday',
    //     5: 'Friday',
    //     6: 'Saturday',
    // }

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
    console.log(day_num)
    let res = [addZero(d.getDate()), addZero(d.getMonth() + 1)].join('.');
    let time = [addZero(d.getHours()), addZero(d.getMinutes())].join(':')
    function addZero (value) { if (+value < 10) return '0' + value
        return value
    }
    return type === 'time' ? time : `${res}\n${DAY[day_num]}` 
    // return `${res} ${time}` 
    // return `${time}` 
}