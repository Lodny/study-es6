function calculateTotalTimeWithNightShiftFloat(startTime, endTime) {
    const parseTime = (timeString) => {
        const hours = parseInt(timeString.slice(0, 2), 10);
        const minutes = parseInt(timeString.slice(2), 10);
        return { hours, minutes };
    };

    const startTimeObj = parseTime(startTime);
    const endTimeObj = parseTime(endTime);

    const startMinutes = startTimeObj.hours * 60 + startTimeObj.minutes;
    const endMinutes = endTimeObj.hours * 60 + endTimeObj.minutes;

    // 야간 근무 시간은 22:00부터 30:00까지 (30:00은 다음 날 6:00을 의미)
    const nightShiftStartMinutes = 22 * 60;
    const nightShiftEndMinutes = 30 * 60;

    let nightShiftMinutes = 0;
    let daytimeMinutes = 0;

    if (startMinutes <= nightShiftEndMinutes) {
        if (endMinutes >= nightShiftStartMinutes) {
            nightShiftMinutes = Math.min(endMinutes, nightShiftEndMinutes) - Math.max(startMinutes, nightShiftStartMinutes);
            daytimeMinutes = (endMinutes - startMinutes) - nightShiftMinutes;
        } else {
            daytimeMinutes = endMinutes - startMinutes;
        }
    }

    return (daytimeMinutes + (nightShiftMinutes * 1.5)) / 60.0;
}

// 사용 예제
const totalTime = calculateTotalTimeWithNightShiftFloat('1700', '2740');
console.log(`전체 시간 (float): ${totalTime} 시간`);
