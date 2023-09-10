const availableTimesByDate = {
    '2023-08-29': ['10:00', '11:00', '12:00'],
    '2023-09-01': ['10:00', '11:00', '12:00'],
    '2023-09-02': ['14:00', '15:00', '16:00'],
    '2023-09-03': ['10:00', '11:00', '12:00'],
    '2023-09-04': ['14:00', '15:00', '16:00'],
    '2023-09-05': ['10:00', '11:00', '12:00'],
    '2023-09-06': ['14:00', '15:00', '16:00'],
    '2023-09-07': ['10:00', '11:00', '12:00'],
    '2023-09-08': ['14:00', '15:00', '16:00'],
    '2023-09-09': ['10:00', '11:00', '12:00'],
    '2023-09-10': ['19:00', '15:00', '16:00'],
    '2023-09-11': ['10:00', '11:00', '12:00'],
    '2023-09-12': ['14:00', '15:00', '16:00'],
    '2023-09-13': ['10:00', '11:00', '12:00'],
    '2023-09-14': ['14:00', '15:00', '16:00'],
    '2023-09-15': ['10:00', '11:00', '12:00'],
    '2023-09-16': ['14:00', '15:00', '16:00'],
    '2023-09-17': ['10:00', '11:00', '12:00'],
    '2023-09-18': ['14:00', '15:00', '16:00'],
    '2023-09-19': ['10:00', '11:00', '12:00'],
    '2023-09-20': ['14:00', '15:00', '16:00'],
};

const fetchAvailableTimes = (date) => {
    const times = availableTimesByDate[date];
    if (times) {
        return times;
    } else {
        return null;
    }
};



const submitFormData = (formData) => {
    if (!formData) {
        return false;
    }

    const { date, time } = formData;
    const availableTimes = availableTimesByDate[date];

    if (availableTimes && availableTimes.includes(time)) {
        availableTimesByDate[date] = availableTimes.filter((t) => t !== time);
        return true;
    } else {
        return false;
    }
};


export { fetchAvailableTimes, submitFormData }