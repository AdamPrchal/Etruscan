const upperCaseAlp = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'H',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
let letters = [];
let words = [];

function Letter() {
  this.index = letters.length;
  this.letter = 'A';

  this.getIndex = function() {
    return this.index;
  };

  this.getLetter = function() {
    return this.letter;
  };

  this.setLetter = function(newLetter) {
    this.letter = newLetter;
  };
}

function createLetter() {
  letters[letters.length] = new Letter();
}

function Word() {
  this.index = words.length;
  this.word = saveWord();

  this.getIndex = function() {
    return this.index;
  };

  this.getWord = function() {
    return this.word;
  };

  this.setLetter = function(newLetter) {
    this.letter = newLetter;
  };
}

function saveWord() {
  let wholeWord = '';
  for (let i = 0; i < letters.length; i++) {
    wholeWord += letters[i].getLetter();
  }
  return wholeWord;
}

function createWord(letter, saveVariable) {
  saveVariable += letter.getLetter();
}

function viewWord() {
  let wordBox = document.getElementById('words');
  let lettersCollapsed = '';

  if (words.length > 0) {
    for (let i = 0; i < words.length; i++) {
      let x = words[i].getWord();
      lettersCollapsed += x + ' ';
    }
  }

  for (let i = 0; i < letters.length; i++) {
    let x = letters[i].getLetter();
    lettersCollapsed += x;
  }
  wordBox.value = lettersCollapsed;
}

function nextLetter(index) {
  let x = document.getElementById('lett' + index.toString());
  let posOfLetter = upperCaseAlp.indexOf(x.value);
  if (posOfLetter < upperCaseAlp.length - 1) {
    x.value = upperCaseAlp[posOfLetter + 1];
  } else {
    x.value = upperCaseAlp[0];
  }
  letters[index].setLetter(x.value);
  viewWord();
}

function prevLetter(index) {
  let x = document.getElementById('lett' + index.toString());
  let posOfLetter = upperCaseAlp.indexOf(x.value);
  if (posOfLetter > 0) {
    x.value = upperCaseAlp[posOfLetter - 1];
  } else {
    x.value = upperCaseAlp[upperCaseAlp.length - 1];
  }
  letters[index].setLetter(x.value);
  viewWord();
}

function addLetter() {
  if (letters.length < 15) {
    let letterNumber = letters.length.toString();
    createLetter();
    let tText = document.createTextNode('↑');
    let topButton = document.createElement('button'); //"<button type=\"button\" name=\"buttUp" + letterCount + "\" onclick=\"nextLetter(" + letterCount + ")\">&#8593;</button>";
    topButton.setAttribute('type', 'button');
    topButton.setAttribute('id', 'buttUp' + letterNumber);
    topButton.setAttribute('onclick', 'nextLetter(' + letterNumber + ')');
    topButton.setAttribute('class', 'btn btn-outline-primary');
    topButton.appendChild(tText);

    let bText = document.createTextNode('↓');
    let bottomButton = document.createElement('button'); //"<button type=\"button\" name=\"buttDown" + letterCount + "\" onclick=\"prevLetter(" + letterCount + ")\">&#8595;</button>";
    bottomButton.setAttribute('type', 'button');
    bottomButton.setAttribute('id', 'buttDown' + letterNumber);
    bottomButton.setAttribute('onclick', 'prevLetter(' + letterNumber + ')');
    bottomButton.setAttribute('class', 'btn btn-outline-primary');
    bottomButton.appendChild(bText);

    let letter = document.createElement('input'); //"<td class=\"unclickable\"><input type=\"text\" name=\"lett" + letterCount + "\" value=\"A\" ></td>";
    letter.setAttribute('type', 'text');
    letter.setAttribute('id', 'lett' + letterNumber);
    letter.setAttribute('class', 'form-control form-control-lg');
    letter.setAttribute('value', 'A');

    let node0 = document.createElement('td');
    let node1 = document.createElement('td');
    let node2 = document.createElement('td');
    node2.className = 'unclickable';

    node0.appendChild(topButton);
    node1.appendChild(bottomButton);
    node2.appendChild(letter);

    let parentTop = document.getElementById('topButtons');
    let parentBot = document.getElementById('bottomButtons');
    let parentLet = document.getElementById('letters');

    parentTop.appendChild(node0);
    parentBot.appendChild(node1);
    parentLet.appendChild(node2);
    viewWord();
  }
}

function createAddButton() {
  {
    let tText = document.createTextNode('Přidat písmeno');
    let addButton = document.createElement('button'); //"<button type=\"button\" name=\"buttUp" + letterCount + "\" onclick=\"nextLetter(" + letterCount + ")\">&#8593;</button>";
    addButton.setAttribute('type', 'button');
    addButton.setAttribute('id', 'addLettButton');
    addButton.setAttribute('class', 'btn btn-primary');
    addButton.appendChild(tText);

    let node0 = document.createElement('td');
    node0.appendChild(addButton);
    let parentLet = document.getElementById('letters');
    parentLet.appendChild(node0);
    viewWord();
  }
}

function deleteLetter() {
  if (letters.length > 1) {
    let indexOfLett = letters.length - 1;

    /*  let buttUp = document.getElementById("buttUp" + indexOfLett.toString() );
      let buttDown = document.getElementById("buttDown" + indexOfLett.toString() );
      let letter = document.getElementById("lett" + indexOfLett.toString() );*/

    let buttUp = document.getElementById('topButtons');
    let buttDown = document.getElementById('bottomButtons');
    let letter = document.getElementById('letters');

    buttUp.removeChild(buttUp.lastChild);
    buttDown.removeChild(buttDown.lastChild);
    letter.removeChild(letter.lastChild);

    letters.pop();
    viewWord();
  }
}

function deleteWord() {
  if (words.length > 0) {
    words.pop();
    viewWord();
  }
}

function nextWord() {
  words[words.length] = new Word();

  viewWord();
}

document.getElementById('addLettButton').onclick = function() {
  addLetter();
};

document.getElementById('delLettButton').onclick = function() {
  deleteLetter();
};

document.getElementById('nextWordButton').onclick = function() {
  nextWord();
};

document.getElementById('delWordButton').onclick = function() {
  deleteWord();
};

addLetter();
viewWord();
