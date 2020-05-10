
const keyArray = [
  [
    {
      code: 'Backquote', en: '`', EN: '~', ru: 'ё', RU: 'Ё', letterEn: 0, letterRu: 1, activeKey: 0,
    },
    {
      code: 'Digit1', en: '1', EN: '!', ru: '1', RU: '!', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Digit2', en: '2', EN: '@', ru: '2', RU: '"', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Digit3', en: '3', EN: '#', ru: '3', RU: '№', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Digit4', en: '4', EN: '$', ru: '4', RU: ';', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Digit5', en: '5', EN: '%', ru: '5', RU: '%', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Digit6', en: '6', EN: '^', ru: '6', RU: ':', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Digit7', en: '7', EN: '&', ru: '7', RU: '?', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Digit8', en: '8', EN: '*', ru: '8', RU: '*', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Digit9', en: '9', EN: '(', ru: '9', RU: '(', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Digit0', en: '0', EN: ')', ru: '0', RU: ')', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Minus', en: '-', EN: '_', ru: '-', RU: '_', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Equal', en: '=', EN: '+', ru: '=', RU: '+', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Backspace', en: 'Backspace', EN: 'Backspace', ru: 'Backspace', RU: 'Backspace', letterEn: 0, letterRu: 0, activeKey: 1,
    },
  ],
  [
    {
      code: 'Tab', en: 'Tab', EN: 'Tab', ru: 'Tab', RU: 'Tab', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'KeyQ', en: 'q', EN: 'Q', ru: 'й', RU: 'Й', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyW', en: 'w', EN: 'W', ru: 'ц', RU: 'Ц', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyE', en: 'e', EN: 'E', ru: 'у', RU: 'У', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyR', en: 'r', EN: 'R', ru: 'к', RU: 'К', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyT', en: 't', EN: 'T', ru: 'е', RU: 'Е', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyY', en: 'y', EN: 'Y', ru: 'н', RU: 'Н', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyU', en: 'u', EN: 'U', ru: 'г', RU: 'Г', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyI', en: 'i', EN: 'I', ru: 'ш', RU: 'Ш', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyO', en: 'o', EN: 'O', ru: 'щ', RU: 'Щ', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyP', en: 'p', EN: 'P', ru: 'з', RU: 'З', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'BracketLeft', en: '[', EN: '{', ru: 'х', RU: 'Х', letterEn: 0, letterRu: 1, activeKey: 0,
    },
    {
      code: 'BracketRight', en: ']', EN: '}', ru: 'ъ', RU: 'Ъ', letterEn: 0, letterRu: 1, activeKey: 0,
    },
    {
      code: 'Backslash', en: '\\', EN: '|', ru: '\\', RU: '/', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'Delete', en: 'Del', EN: 'Del', ru: 'Del', RU: 'Del', letterEn: 0, letterRu: 0, activeKey: 1,
    },
  ],
  [
    {
      code: 'CapsLock', en: 'CapsLock', EN: 'CapsLock', RU: 'CapsLock', ru: 'CapsLock', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'KeyA', en: 'a', EN: 'A', RU: 'Ф', ru: 'ф', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyS', en: 's', EN: 'S', RU: 'Ы', ru: 'ы', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyD', en: 'd', EN: 'D', RU: 'В', ru: 'в', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyF', en: 'f', EN: 'F', RU: 'А', ru: 'а', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyG', en: 'g', EN: 'G', RU: 'П', ru: 'п', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyH', en: 'h', EN: 'H', RU: 'Р', ru: 'р', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyJ', en: 'j', EN: 'J', RU: 'О', ru: 'о', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyK', en: 'k', EN: 'K', RU: 'Л', ru: 'л', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyL', en: 'l', EN: 'L', RU: 'Д', ru: 'д', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'Semicolon', en: ';', EN: ':', RU: 'Ж', ru: 'ж', letterEn: 0, letterRu: 1, activeKey: 0,
    },
    {
      code: 'Quote', en: "'", EN: '"', RU: 'Э', ru: 'э', letterEn: 0, letterRu: 1, activeKey: 0,
    },
    {
      code: 'Enter', en: 'Enter', EN: 'Enter', RU: 'Enter', ru: 'Enter', letterEn: 0, letterRu: 0, activeKey: 1,
    },
  ],
  [
    {
      code: 'ShiftLeft', en: 'Shift', EN: 'Shift', RU: 'Shift', ru: 'Shift', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'KeyZ', en: 'z', EN: 'Z', RU: 'Я', ru: 'я', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyX', en: 'x', EN: 'X', RU: 'Ч', ru: 'ч', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyC', en: 'c', EN: 'C', RU: 'С', ru: 'с', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyV', en: 'v', EN: 'V', RU: 'М', ru: 'м', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyB', en: 'b', EN: 'B', RU: 'И', ru: 'и', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyN', en: 'n', EN: 'N', RU: 'Т', ru: 'т', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'KeyM', en: 'm', EN: 'M', RU: 'Ь', ru: 'ь', letterEn: 1, letterRu: 1, activeKey: 0,
    },
    {
      code: 'Comma', en: ',', EN: '<', RU: 'Б', ru: 'б', letterEn: 0, letterRu: 1, activeKey: 0,
    },
    {
      code: 'Period', en: '.', EN: '>', RU: 'Ю', ru: 'ю', letterEn: 0, letterRu: 1, activeKey: 0,
    },
    {
      code: 'Slash', en: '/', EN: '?', RU: '.', ru: ',', letterEn: 0, letterRu: 0, activeKey: 0,
    },
    {
      code: 'ArrowUp', en: '↑', EN: '↑', RU: '↑', ru: '↑', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'ShiftRight', en: 'Shift', EN: 'Shift', RU: 'Shift', ru: 'Shift', letterEn: 0, letterRu: 0, activeKey: 1,
    },
  ],
  [
    {
      code: 'ControlLeft', en: 'Ctrl', EN: 'Ctrl', RU: 'Ctrl', ru: 'Ctrl', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'MetaLeft', en: 'Win', EN: 'Win', RU: 'Win', ru: 'Win', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'AltLeft', en: 'Alt', EN: 'Alt', RU: 'Alt', ru: 'Alt', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'Space', en: ' ', EN: ' ', RU: ' ', ru: ' ', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'AltRight', en: 'alt', EN: 'alt', RU: 'alt', ru: 'alt', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'ArrowLeft', en: '←', EN: '←', RU: '←', ru: '←', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'ArrowDown', en: '↓', EN: '↓', RU: '↓', ru: '↓', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'ArrowRight', en: '→', EN: '→', RU: '→', ru: '→', letterEn: 0, letterRu: 0, activeKey: 1,
    },
    {
      code: 'ControlRight', en: 'Ctrl', EN: 'Ctrl', RU: 'Ctrl', ru: 'Ctrl', letterEn: 0, letterRu: 0, activeKey: 1,
    },
  ],
];
const textareaSelector = document.querySelector('.search');
let shiftFlag = false;
let langFlag = (localStorage.getItem('langFlag')) ? localStorage.getItem('langFlag') : 'en';
localStorage.setItem('langFlag', langFlag);
const textarea = document.querySelector('.search');

// creating div
const wrapper = document.createElement('div');
wrapper.classList.add('keyboard' , 'none');
document.body.append(wrapper);
const wrapperKeyboard = document.querySelector('.keyboard');

// creating keyboard lines
for (let i = 0; i < 5; i += 1) {
  const keyboardLine = document.createElement('div');
  keyboardLine.className = 'line';
  wrapperKeyboard.appendChild(keyboardLine);
}

// creating keyboard
function drawKeyboard(lang, shift) {
  if (shift) {
    if (lang === 'en') {
      const keyboardLines = document.querySelectorAll('.line');
      for (let j = 0; j < keyboardLines.length; j += 1) {
        let out = '';
        for (let k = 0; k < keyArray[j].length; k += 1) {
          out += `<div class ="k-key ${keyArray[j][k].code}">${keyArray[j][k].EN}</div>`;
        }
        keyboardLines[j].innerHTML = out;
      }
    }
    if (lang === 'EN') {
      const keyboardLines = document.querySelectorAll('.line');
      for (let j = 0; j < keyboardLines.length; j += 1) {
        let out = '';
        for (let k = 0; k < keyArray[j].length; k += 1) {
          if (keyArray[j][k].letterEn === 1) {
            out += `<div class ="k-key ${keyArray[j][k].code}">${keyArray[j][k].en}</div>`;
          } else {
            out += `<div class ="k-key ${keyArray[j][k].code}">${keyArray[j][k].EN}</div>`;
          }
        }
        keyboardLines[j].innerHTML = out;
      }
    }
    if (lang === 'ru') {
      const keyboardLines = document.querySelectorAll('.line');
      for (let j = 0; j < keyboardLines.length; j += 1) {
        let out = '';
        for (let k = 0; k < keyArray[j].length; k += 1) {
          out += `<div class ="k-key ${keyArray[j][k].code}">${keyArray[j][k].RU}</div>`;
        }
        keyboardLines[j].innerHTML = out;
      }
    }
    if (lang === 'RU') {
      const keyboardLines = document.querySelectorAll('.line');
      for (let j = 0; j < keyboardLines.length; j += 1) {
        let out = '';
        for (let k = 0; k < keyArray[j].length; k += 1) {
          if (keyArray[j][k].letterRu === 1) {
            out += `<div class ="k-key ${keyArray[j][k].code}">${keyArray[j][k].ru}</div>`;
          } else {
            out += `<div class ="k-key ${keyArray[j][k].code}">${keyArray[j][k].RU}</div>`;
          }
        }
        keyboardLines[j].innerHTML = out;
      }
    }
  } else {
    if (lang === 'en') {
      const keyboardLines = document.querySelectorAll('.line');
      for (let j = 0; j < keyboardLines.length; j += 1) {
        let out = '';
        for (let k = 0; k < keyArray[j].length; k += 1) {
          out += `<div class ="k-key ${keyArray[j][k].code}">${keyArray[j][k].en}</div>`;
        }
        keyboardLines[j].innerHTML = out;
      }
    }
    if (lang === 'EN') {
      const keyboardLines = document.querySelectorAll('.line');
      for (let j = 0; j < keyboardLines.length; j += 1) {
        let out = '';
        for (let k = 0; k < keyArray[j].length; k += 1) {
          if (keyArray[j][k].letterEn === 1) {
            out += `<div class ="k-key ${keyArray[j][k].code}">${keyArray[j][k].EN}</div>`;
          } else {
            out += `<div class ="k-key ${keyArray[j][k].code}">${keyArray[j][k].en}</div>`;
          }
        }
        keyboardLines[j].innerHTML = out;
      }
    }
    if (lang === 'ru') {
      const keyboardLines = document.querySelectorAll('.line');
      for (let j = 0; j < keyboardLines.length; j += 1) {
        let out = '';
        for (let k = 0; k < keyArray[j].length; k += 1) {
          out += `<div class ="k-key ${keyArray[j][k].code}">${keyArray[j][k].ru}</div>`;
        }
        keyboardLines[j].innerHTML = out;
      }
    }
    if (lang === 'RU') {
      const keyboardLines = document.querySelectorAll('.line');
      for (let j = 0; j < keyboardLines.length; j += 1) {
        let out = '';
        for (let k = 0; k < keyArray[j].length; k += 1) {
          if (keyArray[j][k].letterRu === 1) {
            out += `<div class ="k-key ${keyArray[j][k].code}">${keyArray[j][k].RU}</div>`;
          } else {
            out += `<div class ="k-key ${keyArray[j][k].code}">${keyArray[j][k].ru}</div>`;
          }
        }
        keyboardLines[j].innerHTML = out;
      }
    }
  }
}
drawKeyboard(langFlag, false);

// changing language, CapsLock, Shift
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.altKey) {
    if (langFlag === 'en') {
      langFlag = 'ru';
    } else if (langFlag === 'ru') {
      langFlag = 'en';
    } else if (langFlag === 'EN') {
      langFlag = 'RU';
    } else if (langFlag === 'RU') {
      langFlag = 'EN';
    } drawKeyboard(langFlag);
  } else if (event.code === 'CapsLock') {
    if (langFlag === 'EN') {
      langFlag = 'en';
    } else if (langFlag === 'RU') {
      langFlag = 'ru';
    } else if (langFlag === 'en') {
      langFlag = 'EN';
    } else if (langFlag === 'ru') {
      langFlag = 'RU';
    } drawKeyboard(langFlag);
  } else if (event.shiftKey) {
    shiftFlag = true;
    drawKeyboard(langFlag, shiftFlag);
  }
  localStorage.setItem('langFlag', langFlag);
});

document.addEventListener('keyup', () => {
  shiftFlag = false;
  drawKeyboard(langFlag, shiftFlag);
});

// changing language, CapsLock, Shift on click
document.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('MetaLeft')) {
    if (langFlag === 'en') {
      langFlag = 'ru';
    } else if (langFlag === 'ru') {
      langFlag = 'en';
    } else if (langFlag === 'EN') {
      langFlag = 'RU';
    } else if (langFlag === 'RU') {
      langFlag = 'EN';
    } drawKeyboard(langFlag);
  } else if (event.target.classList.contains('CapsLock')) {
    if (langFlag === 'EN') {
      langFlag = 'en';
    } else if (langFlag === 'RU') {
      langFlag = 'ru';
    } else if (langFlag === 'en') {
      langFlag = 'EN';
    } else if (langFlag === 'ru') {
      langFlag = 'RU';
    } drawKeyboard(langFlag);
  } else if (event.target.classList.contains('ShiftLeft') || event.target.classList.contains('ShiftRight')) {
    shiftFlag = true;
    drawKeyboard(langFlag, shiftFlag);
  }
  localStorage.setItem('langFlag', langFlag);
});

document.addEventListener('mouseup', () => {
  drawKeyboard(langFlag, false);
});

// add and remove active class on pushing, add text to inputarea
document.addEventListener('keydown', (event) => {
  for (let i = 0; i < keyArray.length; i += 1) {
    for (let j = 0; j < keyArray[i].length; j += 1) {
      if (event.code === keyArray[i][j].code) {
        const keyClass = document.querySelector(`.${keyArray[i][j].code}`);
        keyClass.classList.add('active');
        if (shiftFlag === false) {
          switch (langFlag) {
            case 'en':
              if (keyArray[i][j].activeKey === 0 && keyArray[i][j].letterEn === 1) {
                event.preventDefault();
                const s = textareaSelector.selectionStart;
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].en + textareaSelector.value.substring(textareaSelector.selectionEnd);
                textareaSelector.selectionEnd = s + 1;
              } if (keyArray[i][j].activeKey === 0 && keyArray[i][j].letterEn === 0) {
                event.preventDefault();
                const s = textareaSelector.selectionStart;
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].en + textareaSelector.value.substring(textareaSelector.selectionEnd);
                textareaSelector.selectionEnd = s + 1;
              }
              break;
            case 'EN':
              if (keyArray[i][j].activeKey === 0 && keyArray[i][j].letterEn === 1) {
                event.preventDefault();
                const s = textareaSelector.selectionStart;
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].EN + textareaSelector.value.substring(textareaSelector.selectionEnd);
                textareaSelector.selectionEnd = s + 1;
              } else if (keyArray[i][j].activeKey === 0 && keyArray[i][j].letterEn === 0) {
                event.preventDefault();
                const s = textareaSelector.selectionStart;
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].en + textareaSelector.value.substring(textareaSelector.selectionEnd);
                textareaSelector.selectionEnd = s + 1;
              }
              break;
            case 'RU':
              if (keyArray[i][j].activeKey === 0 && keyArray[i][j].letterRu === 1) {
                event.preventDefault();
                const s = textareaSelector.selectionStart;
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].RU + textareaSelector.value.substring(textareaSelector.selectionEnd);
                textareaSelector.selectionEnd = s + 1;
              } else if (keyArray[i][j].activeKey === 0 && keyArray[i][j].letterRu === 0) {
                event.preventDefault();
                const s = textareaSelector.selectionStart;
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].ru + textareaSelector.value.substring(textareaSelector.selectionEnd);
                textareaSelector.selectionEnd = s + 1;
              }
              break;
            case 'ru':
              if (keyArray[i][j].activeKey === 0 && keyArray[i][j].letterRu === 1) {
                event.preventDefault();
                const s = textareaSelector.selectionStart;
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].ru + textareaSelector.value.substring(textareaSelector.selectionEnd);
                textareaSelector.selectionEnd = s + 1;
              } else if (keyArray[i][j].activeKey === 0 && keyArray[i][j].letterRu === 0) {
                event.preventDefault();
                const s = textareaSelector.selectionStart;
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].ru + textareaSelector.value.substring(textareaSelector.selectionEnd);
                textareaSelector.selectionEnd = s + 1;
              }
              break;
          }
        } else {
          switch (langFlag) {
            case 'en':
              if (keyArray[i][j].activeKey === 0 && keyArray[i][j].letterEn === 1) {
                event.preventDefault();
                const s = textareaSelector.selectionStart;
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].EN + textareaSelector.value.substring(textareaSelector.selectionEnd);
                textareaSelector.selectionEnd = s + 1;
              } else if (keyArray[i][j].activeKey === 0 && keyArray[i][j].letterEn === 0) {
                event.preventDefault();
                const s = textareaSelector.selectionStart;
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].EN + textareaSelector.value.substring(textareaSelector.selectionEnd);
                textareaSelector.selectionEnd = s + 1;
              }
              break;
            case 'EN':
              if (keyArray[i][j].activeKey === 0 && keyArray[i][j].letterEn === 1) {
                event.preventDefault();
                const s = textareaSelector.selectionStart;
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].en + textareaSelector.value.substring(textareaSelector.selectionEnd);
                textareaSelector.selectionEnd = s + 1;
              } else if (keyArray[i][j].activeKey === 0 && keyArray[i][j].letterEn === 0) {
                event.preventDefault();
                const s = textareaSelector.selectionStart;
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].EN + textareaSelector.value.substring(textareaSelector.selectionEnd);
                textareaSelector.selectionEnd = s + 1;
              }
              break;
            case 'RU':
              if (keyArray[i][j].activeKey === 0 && keyArray[i][j].letterRu === 1) {
                event.preventDefault();
                const s = textareaSelector.selectionStart;
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].ru + textareaSelector.value.substring(textareaSelector.selectionEnd);
                textareaSelector.selectionEnd = s + 1;
              } else if (keyArray[i][j].activeKey === 0 && keyArray[i][j].letterRu === 0) {
                event.preventDefault();
                const s = textareaSelector.selectionStart;
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].RU + textareaSelector.value.substring(textareaSelector.selectionEnd);
                textareaSelector.selectionEnd = s + 1;
              }
              break;
            case 'ru':
              if (keyArray[i][j].activeKey === 0 && keyArray[i][j].letterRu === 1) {
                event.preventDefault();
                const s = textareaSelector.selectionStart;
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].RU + textareaSelector.value.substring(textareaSelector.selectionEnd);
                textareaSelector.selectionEnd = s + 1;
              } else if (keyArray[i][j].activeKey === 0 && keyArray[i][j].letterRu === 0) {
                event.preventDefault();
                const s = textareaSelector.selectionStart;
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].RU + textareaSelector.value.substring(textareaSelector.selectionEnd);
                textareaSelector.selectionEnd = s + 1;
              }
              break;
          }
        }
      }
    }
  }
});

document.addEventListener('keyup', (event) => {
  for (let i = 0; i < keyArray.length; i += 1) {
    for (let j = 0; j < keyArray[i].length; j += 1) {
      if (event.code === keyArray[i][j].code) {
        const keyClass = document.querySelector(`.${keyArray[i][j].code}`);
        keyClass.classList.remove('active');
      }
    }
  }
});
// add text to inputarea on click
document.addEventListener('mousedown', (event) => {
  for (let i = 0; i < keyArray.length; i += 1) {
    for (let j = 0; j < keyArray[i].length; j += 1) {
      if (event.target.classList.contains(keyArray[i][j].code)) {
        const keyClass = document.querySelector(`.${keyArray[i][j].code}`);
        keyClass.classList.add('active');
        switch (langFlag) {
          case 'en':
            if (keyArray[i][j].activeKey === 0) {
              const start = textareaSelector.selectionStart;
              textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].en + textareaSelector.value.substring(textareaSelector.selectionEnd);
              textareaSelector.selectionEnd = start + 1;
            }
            break;
          case 'EN':
            if (keyArray[i][j].activeKey === 0) {
              const start = textareaSelector.selectionStart;
              if (keyArray[i][j].letterEn === 1) {
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].EN + textareaSelector.value.substring(textareaSelector.selectionEnd);
              } else {
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].en + textareaSelector.value.substring(textareaSelector.selectionEnd);
              }
              textareaSelector.selectionEnd = start + 1;
            }
            break;
          case 'RU':
            if (keyArray[i][j].activeKey === 0) {
              const start = textareaSelector.selectionStart;
              if (keyArray[i][j].letterRu === 1) {
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].RU + textareaSelector.value.substring(textareaSelector.selectionEnd);
              } else {
                textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].ru + textareaSelector.value.substring(textareaSelector.selectionEnd);
              }
              textareaSelector.selectionEnd = start + 1;
            }
            break;
          case 'ru':
            if (keyArray[i][j].activeKey === 0) {
              const start = textareaSelector.selectionStart;
              textareaSelector.value = textareaSelector.value.substring(0, textareaSelector.selectionStart) + keyArray[i][j].ru + textareaSelector.value.substring(textareaSelector.selectionEnd);
              textareaSelector.selectionEnd = start + 1;
            }
            break;
        }
      }
    }
  }
});

document.addEventListener('mouseup', (event) => {
  for (let i = 0; i < keyArray.length; i += 1) {
    for (let j = 0; j < keyArray[i].length; j += 1) {
      if (event.target.classList.contains(keyArray[i][j].code)) {
        const pressButton = document.querySelector(`.${keyArray[i][j].code}`);
        pressButton.classList.remove('press');
      }
    }
  }
});

// make alt work correctly
document.addEventListener('keydown', (event) => {
  if (event.code === 'AltLeft' || event.code === 'AltRight') {
    event.preventDefault();
  }
});

// make tab work correctly
textareaSelector.onkeydown = function clickOnTab(event) {
  if (event.code === 'Tab') {
    event.preventDefault();
    const s = this.selectionStart;
    this.value = `${this.value.substring(0, this.selectionStart)}\t${this.value.substring(this.selectionEnd)}`;
    this.selectionEnd = s + 1;
  }
};
// make active key work corectly
document.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('Tab')) {
    const s = textareaSelector.selectionStart;
    textareaSelector.value = `${textareaSelector.value.substring(0, textareaSelector.selectionStart)}\t${textareaSelector.value.substring(textareaSelector.selectionEnd)}`;
    textareaSelector.selectionEnd = s + 1;
  } else if (event.target.classList.contains('Enter')) {
    const s = textareaSelector.selectionStart;
    textareaSelector.value = `${textareaSelector.value.substring(0, textareaSelector.selectionStart)}\n${textareaSelector.value.substring(textareaSelector.selectionEnd)}`;
    textareaSelector.selectionEnd = s + 1;
  } else if (event.target.classList.contains('Backspace')) {
    const s = textareaSelector.selectionStart;
    textareaSelector.value = `${textareaSelector.value.substring(0, textareaSelector.selectionStart - 1)}${textareaSelector.value.substring(textareaSelector.selectionEnd)}`;
    textareaSelector.selectionEnd = s - 1;
  } else if (event.target.classList.contains('Delete')) {
    const s = textareaSelector.selectionStart;
    textareaSelector.value = `${textareaSelector.value.substring(0, textareaSelector.selectionStart)}${textareaSelector.value.substring(textareaSelector.selectionEnd + 1)}`;
    textareaSelector.selectionEnd = s;
  } else if (event.target.classList.contains('Space')) {
    const s = textareaSelector.selectionStart;
    textareaSelector.value = `${textareaSelector.value.substring(0, textareaSelector.selectionStart)} ${textareaSelector.value.substring(textareaSelector.selectionEnd)}`;
    textareaSelector.selectionEnd = s + 1;
  } else if (event.target.classList.contains('ArrowDown')) {
    textareaSelector.selectionStart += 90;
  } else if (event.target.classList.contains('ArrowUp')) {
    textareaSelector.selectionStart = textareaSelector.selectionEnd;
    if (textareaSelector.selectionEnd - 90 < 0) {
      textareaSelector.selectionEnd = 0;
    } else {
      textareaSelector.selectionEnd -= 90;
    }
  } else if (event.target.classList.contains('ArrowRight')) {
    textareaSelector.selectionStart += 1;
  } else if (event.target.classList.contains('ArrowLeft')) {
    textareaSelector.selectionStart -= 1;
    textareaSelector.selectionEnd -= 1;
  }
});

localStorage.setItem('langFlag', langFlag);
