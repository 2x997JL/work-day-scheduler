const updateTime = () => {
  const currentTime = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
  document.getElementById('current-time').innerHTML = currentTime;

  const currentHour = dayjs().hour();
  const timeBlock = document.querySelectorAll('.time-block');

  timeBlock.forEach(block => {
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

// Save data to local storage when the save button is clicked
const saveBtn = document.querySelectorAll('.saveBtn');
saveBtn.forEach(button => {
  button.addEventListener('click', event => {
    const timeBlock = event.target.parentElement;
    const textElement = timeBlock.querySelector('.text');
    if (textElement) {
      const text = textElement.value;
      const key = `text-${dayjs().format('dddd')}-${timeBlock.id}`;
      localStorage.setItem(key, text);
    }
  });
});


// Load data from local storage when the page loads
const timeBlock = document.querySelectorAll('.time-block');
timeBlock.forEach(block => {
  const key = `text-${dayjs().format('dddd')}-${block.id}`;
  const data = localStorage.getItem(key);
  if (data) {
    block.querySelector('.text').value = data;
  }
});

