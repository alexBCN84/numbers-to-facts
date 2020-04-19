export function currentDate() {
    const currentDate = new Date();
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1;
    return {day, month};
}

function toOrdinal(num) {
    num = num.toString();
    if (num === '11' || num === '12' || num === '13') {
        return num + 'th';
    }
    if (num.slice(-1) === '1') {
        return num + 'st';
    }
    if (num.slice(-1) === '2') {
        return num + 'nd';
    }
    if (num.slice(-1) === '3') {
        return num + 'rd';
    }
    return num + 'th';
}

function toMonthLetters(month) {
    switch(month) {
        case 1:
            return 'January';
        case 2: 
            return 'February';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5: 
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'October';
        case 11:
            return 'November';
        default:
            return 'December';
    }
}

export function formatDate() {
    let {day, month} = currentDate();
    day = toOrdinal(day);
    month = toMonthLetters(month);
    return {day, month};  
}

