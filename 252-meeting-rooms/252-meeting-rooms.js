/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
const canAttendMeetings = function(intervals) {
    const schedule = intervals.sort((a, b) => a[0] - b[0]);
    console.log(schedule);
    
    for (let i = 1; i < intervals.length; i ++) {
       if (schedule[i][0] < schedule[i - 1][1] && schedule[i - 1][0] < schedule[i][1]) {
           return false
       }
    }
    
    return true;
};