const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if (good.checked && cheap.checked && fast.checked) {
        switch (theClickedOne) {
          case good:
            fast.checked = false;
            break;

          case cheap:
            good.checked = false;
            break;

          case fast:
            cheap.checked = false;
            break;
        }
    }
}