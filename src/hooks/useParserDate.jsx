import { useEffect, useState } from 'react'

const monthsEs = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'
]
const useParserDate = (date = '2001-12-31T11:32:45Z') => {
    const [dateInternal, setDateInternal] = useState(date)
    const [objectDate, setObjectDate] = useState({})

    const dateObj = new Date(dateInternal)

    useEffect(() => {
        const day = dateObj.getDate()
        const month = monthsEs[dateObj.getMonth()]
        const year = dateObj.getFullYear()
        const hour = dateObj.getHours()
        const minutes = dateObj.getMinutes()
        const seconds = dateObj.getSeconds()
        const meridian = hour > 12 ? 'PM' : 'AM'
        const labelDate = `${day} de ${month} del ${year}`
        const labelHour = `${hour}:${minutes} ${meridian}`

        setObjectDate({
            day,
            month,
            year,
            hour,
            minutes,
            seconds,
            meridian,
            labelDate,
            labelHour
        })
    }, [date, dateInternal])


    return {...objectDate, updateDate: setDateInternal}
}

export default useParserDate