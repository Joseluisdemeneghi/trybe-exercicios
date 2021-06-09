function selectOptions() {
  const estadoSelect = document.getElementById('estado');
  const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < estados.length; index += 1) {
    let opcoes = document.createElement('option');
    estadoSelect.appendChild(opcoes).innerText = estados[index];
    estadoSelect.appendChild(opcoes).value = estados[index];
  }
}

window.onload = () => {
  selectOptions();
}