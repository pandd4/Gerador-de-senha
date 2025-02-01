function gerarSenha() {
  const comprimentoSenha = 12; // Defina o comprimento desejado para a senha
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|;:,.<>?';

  let senha = '';
  for (let i = 0; i < comprimentoSenha; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.charAt(indice);
  }

  document.getElementById('senha').innerText = senha;
}
