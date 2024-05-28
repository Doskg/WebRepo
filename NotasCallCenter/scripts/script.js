
function addNote() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title === '' || content === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const note = document.createElement('div');
    note.className = 'note';
    note.innerHTML = `
        <h3 contenteditable="true">${title}</h3>
        <textarea rows="5" contenteditable="true">${content}</textarea>
        <button onclick="copyContent(this)">Copiar</button>
        <button onclick="deleteNote(this)">Eliminar</button>
    `;

    document.getElementById('notes').appendChild(note);

    // Clear the form
    document.getElementById('note-form').reset();
}

function copyContent(button) {
    const note = button.parentElement;
    const accountNumber = note.querySelector('textarea').value;
    const accountName = note.querySelector('textarea').value;
    const title = note.querySelector('h3').innerText;
    const content = note.querySelector('textarea').value;
    const issues = note.querySelector('textarea').value;


    const tempInput = document.createElement('textarea');
    tempInput.value = `Título: ${title}\nContenido: ${content}`;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert('Contenido copiado al portapapeles');
}

function deleteNote(button) {
    const note = button.parentElement;
    note.remove();
}

function copyFormData() {
    const accountNumber = document.getElementById('accountNumber').value;
    const accountName = document.getElementById('accountName').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const issues = document.getElementById('issues').value;

    if (title === '' || content === ''  || accountNumber === ''|| accountName=== '' ) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const tempInput = document.createElement('textarea');
    tempInput.value = `Account#: ${accountNumber}\nAccount Name: ${accountName}\nName: ${title}\nIssues: ${issues}\nSummary: ${content} `;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert('Datos del formulario copiados al portapapeles');
}
