// Elements selection
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const ampm = document.querySelector("#ampm");

function updateClock() {
  // Get current time
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  // Convert to 12-hour format
  let period = h >= 12 ? "PM" : "AM";
  h = h % 12;
  h = h ? h : 12; // the hour '0' should be '12'

  // Add leading zero if needed
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // Set the time in the elements
  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  ampm.innerText = period;
}

// Update immediately and then every second
updateClock();
setInterval(updateClock, 1000);
