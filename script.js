
const countDown = () => {
  let targetTime = new Date(document.getElementById('countdowndate').value).getTime();
  let currentTime = new Date().getTime();
  let timeDifference = targetTime - currentTime;

  //Calculate time
  let textDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let textHours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  let textMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let textSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
  document.querySelector(".day").innerText = textDays;
  document.querySelector(".hour").innerText = textHours;
  document.querySelector(".minute").innerText = textMinutes;
  document.querySelector(".second").innerText = textSeconds;
  
  setInterval(countDown, 1000)
};

