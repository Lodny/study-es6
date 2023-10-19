const cells = document.querySelectorAll('#shortcuts li');

const UP = 'ArrowUp';
const DOWN = 'ArrowDown';
const MIN = 0;
const MAX = cells.length - 1;

const checkCurrentRow = () => {
  // return document.querySelector('#shortcuts li.current');

  let current;
  cells.forEach((item, index) => { if(item.classList.contains('current')) current = index; })
  return current;
}

const checkNextRow = (currentRow, alt, operation) => {
  let next;
  if(operation === '+') next = currentRow + alt > MAX ? MAX : currentRow + alt;
  else next = currentRow - alt < MIN ? MIN : currentRow - alt;
  return next;
}

const colorRow = (current, next) => {
  const start = current > next ? next : current;
  const end = current > next ? current : next;
  for(let i = start; i < end; i++) {
    cells[i].classList.add('selected');
  }
}

const keyup = e => {
  const KEY = e.key;
  const ALT = e.altKey ? 5 : 1;
  const SHIFT = e.shiftKey;

  if(KEY !== UP && KEY !== DOWN) return;

  const OPERATION = KEY === UP ? '-' : '+';

  const currentRow = checkCurrentRow();
  const nextRow = checkNextRow(currentRow, ALT, OPERATION);

  if(SHIFT) cells[currentRow].classList.add('selected');
  else cells.forEach(item => item.classList.remove('selected'));

  if(SHIFT && ALT === 5) colorRow(currentRow, nextRow);

  cells[currentRow].classList.remove('current');
  cells[nextRow].classList.add('current');
}

document.addEventListener('keyup', keyup);

function findChildren(event) {
  cells.forEach(item => item.classList.remove('current'));
  const rowSelected = event.srcElement.parentNode;
  rowSelected.classList.add('current');
}

const UL = document.getElementById('shortcuts');

UL.addEventListener('click', findChildren);
