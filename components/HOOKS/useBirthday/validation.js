import React from 'react';

const validation = (values) => {
    let error;
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const currentDay = date.getDate();

    if(!values.day || !values.month || !values.year) {
        error = 'Please select the date of birthday'
    }

    if(currentYear - values.year < 18 || currentYear - values.year === 18 && currentMonth < values.monthIndex || currentYear - values.year === 18 && currentMonth === values.monthIndex && currentDay < values.day) {
        error = 'You need to be over 18 yo to join us.'
    }

    return error;
}

export default validation;