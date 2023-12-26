function convertCurrency() {
    const currencySelect = document.getElementById('currency');
    const amountInput = document.getElementById('amount');
    const resultInput = document.getElementById('result');
  
    const selectedCurrency = currencySelect.value;
    const amount = parseFloat(amountInput.value);
  
    const exchangeRates = {
      usd: 9.915,
      sgd: 13.472,
      myr: 874,
      jpy: 120,
      eur: 15.888,
      sar: 3.592
    };
  
    if (!isNaN(amount)) {
      const rate = exchangeRates[selectedCurrency];
      const result = (amount * rate * 1.15).toFixed(2); // Menggunakan kurs Rupiah dengan tambahan 15%
      resultInput.value = result;
    } else {
      resultInput.value = '';
    }
  }
  