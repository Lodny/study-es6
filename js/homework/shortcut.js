

const ARROW_DOWN_KEY = 'ArrowDown';
const ARROW_UP_KEY = 'ArrowUp';

const CURRENT_CLASS_NAME = 'current';
const SELECTED_CLASS_NAME = 'selected';

const ALT_STEP_SIZE = 5;

export const getStepSizeByKeyEvent = ({key, altKey}) => {
    let step = altKey ? ALT_STEP_SIZE : 1;
    if (key === ARROW_UP_KEY) step *= -1;

    return step;
}
const isUpOrDownArrowKey = ({key}) => [ARROW_DOWN_KEY, ARROW_UP_KEY].includes(key);
const removeSelectedClassFromLiTag = () =>
    document.querySelectorAll('#shortcuts li.' + SELECTED_CLASS_NAME)
        .forEach(li => li.classList.remove(SELECTED_CLASS_NAME));

const addSelectedClassToLiTag = (selectedIndex, targetIndex, listItems) => {
    for (let idx = Math.min(selectedIndex, targetIndex); idx <= Math.max(selectedIndex, targetIndex); idx++)
        listItems[idx].classList.add(SELECTED_CLASS_NAME);
};

const getTargetIndex = (selectedIndex, stepSize, max) => Math.max(Math.min(selectedIndex + stepSize, max), 0)

const keyup = e => {
    console.log('keyup1:');

    if (! isUpOrDownArrowKey(e)) return;

    const listItems = document.querySelectorAll('#shortcuts li');
    const selectedIndex = Array.from(listItems).findIndex(li => li.classList.contains(CURRENT_CLASS_NAME));
    if (selectedIndex === -1) return;

    listItems[selectedIndex].classList.remove(CURRENT_CLASS_NAME);

    const targetIndex = getTargetIndex(selectedIndex, getStepSizeByKeyEvent(e), listItems.length - 1);
    if (e.shiftKey)
        addSelectedClassToLiTag(selectedIndex, targetIndex, listItems);
    else
        removeSelectedClassFromLiTag();

    listItems[targetIndex].classList.add(CURRENT_CLASS_NAME, SELECTED_CLASS_NAME);
}

const keyup2 = e => {
    console.log('keyup2:', e);
}
document.addEventListener('keyup', keyup);
document.addEventListener('keyup', keyup2);
