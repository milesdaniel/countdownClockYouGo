////TODO: Grab Current Time
let currentTime = new Date().getTime();

/// Grab Target Time
let targetTime = new Date("Jan 21, 2035 12:32:14").getTime();

/// Grab The Difference
let timeDifference = targetTime - currentTime;

/// create a function named countDown
const countDown = () => {
  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  console.log(`$days days, $hours hours, $minutes minutes, $seconds seconds left!`)
};

/// use timeDifference to calculate days, hours, minutes, seconds

// console.log("days", days);
// console.log("hours", hours);
// console.log("minutes", minutes);
// console.log("seconds", seconds);

setInterval(countDown(){}, 1000);
/// use setInterval to run the countDown function every second...
// display the results of each variable in html hint: innerText