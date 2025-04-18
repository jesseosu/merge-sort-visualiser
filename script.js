const container = document.getElementById('array-container');
let array = [];

const speedInput = document.getElementById('speed');
const sizeInput = document.getElementById('size');

// Function to generate random array and display it as bars
function generateArray(size = 30) {
  array = [];
  container.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const value = Math.floor(Math.random() * 200) + 20;
    array.push(value);
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value}px`;
    container.appendChild(bar);
  }
}

// Bubble Sort visualization
async function bubbleSort() {
  const bars = document.getElementsByClassName("bar");
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      bars[j].style.backgroundColor = "#f39c12";
      bars[j + 1].style.backgroundColor = "#f39c12";

      await new Promise(resolve => setTimeout(resolve, speedInput.value));

      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        bars[j].style.height = `${array[j]}px`;
        bars[j + 1].style.height = `${array[j + 1]}px`;
      }

      bars[j].style.backgroundColor = "#4caf50";
      bars[j + 1].style.backgroundColor = "#4caf50";
    }
    bars[array.length - i - 1].style.backgroundColor = "#2ecc71";
  }
  bars[0].style.backgroundColor = "#2ecc71";
}

// Function to start sorting
function startSort() {
  generateArray(sizeInput.value);
  bubbleSort();
}

// Initial setup
generateArray(sizeInput.value);

// Event listener for size input change
sizeInput.addEventListener('input', () => {
  generateArray(sizeInput.value);
});

// Event listener for speed input change
speedInput.addEventListener('input', () => {
});
