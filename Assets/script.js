const updateTime = () => {
  const currentTime = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
  document.getElementById('current-time').innerHTML = currentTime;
};

updateTime();
setInterval(updateTime, 1000);