const dayInput = document.getElementById('day');
const saveBtn = document.getElementById('saveBtn');
const subtasks = document.querySelectorAll('.subtask');
const message = document.getElementById('message');

// Accordion logic
document.querySelectorAll('.accordion-header').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Load saved data for a day
function loadDay(day) {
  const data = JSON.parse(localStorage.getItem(`fit-day-${day}`));
  subtasks.forEach(st => {
    st.checked = data ? data[st.dataset.subtask] : false;
  });
  message.textContent = '';
}

// Save the data
function saveDay() {
  const day = dayInput.value;
  const data = {};
  subtasks.forEach(st => {
    data[st.dataset.subtask] = st.checked;
  });
  localStorage.setItem(`fit-day-${day}`, JSON.stringify(data));
  message.textContent = `✅ Day ${day} saved! Keep pushing!`;
}

// Event listeners
saveBtn.addEventListener('click', saveDay);
dayInput.addEventListener('change', () => loadDay(dayInput.value));

// On page load
loadDay(dayInput.value);
