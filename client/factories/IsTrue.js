'use strict'

app.factory('isTrue', function(){

    const isTempTooCold = (temp) => {
        return temp > 60;
    };

    const isTempTooHot = (temp) => {
        return temp < 100;
    };

    const isRain = (precipToday) => {
        return precipToday <= 0;
    }
    
    const shouldYouMow = (temp, precipToday) => {
        return isTempTooCold(temp) && isTempTooHot(temp) && isRain(precipToday);
    }

    const returnsShouldYouMowString = (temp, precipToday) => {
        if (shouldYouMow(temp, precipToday)) {
            return "You should mow today"
        } else {
            return "Nah, take the day off"
        }
    };

    return {isTempTooCold, isTempTooHot, isRain, shouldYouMow, returnsShouldYouMowString}
})