const formatDate = (date) => {
    const d = new Date(date)
    const month = `${d.getMonth() + 1}`
    const day = `${d.getDay()}`
    const year = d.getFullYear()

    if (month.length)
}

export default formatDate