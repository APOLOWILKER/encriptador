/**
 * A letra "e" é convertida para "enter";
 * A letra "i" é convertida para "imes";
 * A letra "a" é convertida para "ai";
 * A letra "o" é convertida para "ober";
 * A letra "u" é convertida para "ufat";
 */

function clearInput() {
  document.getElementById('decript').value = ''; // Limpa o conteúdo do textarea decript
  document.getElementById('output').value = ''; // Limpa o conteúdo do textarea output
}



function validateInputText(text) {
  text = text.toLowerCase(); // Corrige para reatribuir o texto em minúsculas
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (!/[a-z\s.,!'"-]/.test(char)) { // Permite letras minúsculas, espaços e alguns caracteres de pontuação
      throw new Error("Invalid input");
    }
  }
}


function encript() {
  const inputText = document.getElementById('decript'); 
  const text = inputText.value;
  try {
    validateInputText(text);
    let encryptedText = text.replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/a/g, 'ai')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');
    document.getElementById('output').value = encryptedText;
    inputText.value = '';
    inputText.classList.remove('invalid'); // Remover a classe invalid
  } catch (error) {
    inputText.classList.add('invalid'); // Adicionar a classe invalid
    console.error(error.message);
  }
}

function decript() {
  const text = document.getElementById('output').value;
  validateInputText(text);
  console.log(text);
  let decryptedText = text.replace(/enter/g, 'e')
                          .replace(/imes/g, 'i')
                          .replace(/ai/g, 'a')
                          .replace(/ober/g, 'o')
                          .replace(/ufat/g, 'u');
  decryptedText = decryptedText.replace(/"/g, '');
  document.getElementById('decript').value = decryptedText;
  document.getElementById('output').value = '';                     
  console.log(decryptedText);
}


function copyText() {
  const text = document.getElementById('output').value;
  navigator.clipboard.writeText(text);
}