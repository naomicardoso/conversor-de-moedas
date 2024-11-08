document.getElementById('currency-form').addEventListener('submit', function (event) {
 
  event.preventDefault();

  // Obter valores de entrada do formulário
  const valor = parseFloat(document.getElementById('amount').value);
  const daMoeda = document.getElementById('daMoeda').value;
  const paraMoeda = document.getElementById('paraMoeda').value;


  // Definir taxas de câmbio fixas
  const exchangeRates = {
      USD: { BRL: 5.43, EUR: 0.90 },
      BRL: { USD: 0.18, EUR: 0.17 },
      EUR: { USD: 1.11, BRL: 6.01 }
  };

  // Conversão simples (USD -> BRL, BRL -> EUR, etc.)
  let valorConvertido;
  if (daMoeda === paraMoeda) {
      convertedValue = valor; // Mesma moeda, não há conversão
  } else {
      valorConvertido = valor * exchangeRates[daMoeda][paraMoeda];
  }

  // Exibir resultado
  const conversao = document.getElementById('conversao');
  conversao.textContent = `Resultado: ${valorConvertido.toFixed(2)} ${paraMoeda}`;

});
