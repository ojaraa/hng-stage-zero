
function updateCurrentUTCTime() {
    const current = new Date();
    const utcTime = current.toUTCString();
    document.getElementById('utcTime').textContent = utcTime;
  }
  
  updateCurrentUTCTime();
  setInterval(updateCurrentUTCTime, 1000);