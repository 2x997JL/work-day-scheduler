const updateTime = () => {
  const currentTime = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
  document.getElementById('current-time').innerHTML = currentTime;

  const currentHour = dayjs().hour();
  const timeBlocks = document.querySelectorAll('.time-block');

  timeBlocks.forEach(block => {
    const blockHour = parseInt(block.id, 10);
    if (blockHour < currentHour) {
      block.classList.add('past');
    } else if (blockHour === currentHour) {
      block.classList.add('present');
    } else {
      block.classList.add('future');
    }
  });
};

updateTime();
setInterval(updateTime, 1000);

