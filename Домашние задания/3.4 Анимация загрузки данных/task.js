document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');
    
    function displayCurrencies(currencies) {
        itemsContainer.innerHTML = '';
        
        for (const code in currencies) {
            const currency = currencies[code];
            
            const item = document.createElement('div');
            item.className = 'item';
            
            const codeElement = document.createElement('div');
            codeElement.className = 'item__code';
            codeElement.textContent = currency.CharCode;
            
            const valueElement = document.createElement('div');
            valueElement.className = 'item__value';
            valueElement.textContent = currency.Value.toFixed(2);
            
            const currencyElement = document.createElement('div');
            currencyElement.className = 'item__currency';
            currencyElement.textContent = 'руб.';
            
            item.appendChild(codeElement);
            item.appendChild(valueElement);
            item.appendChild(currencyElement);

            itemsContainer.appendChild(item);
        }
    }
    
    function saveToCache(data) {
        localStorage.setItem('currencyData', JSON.stringify({
            data: data,
            timestamp: new Date().getTime()
        }));
    }

    function getFromCache() {
        const cachedData = localStorage.getItem('currencyData');
        if (cachedData) {
            return JSON.parse(cachedData);
        }
        return null;
    }
    
    const cachedData = getFromCache();
    if (cachedData) {

        displayCurrencies(cachedData.data.response.Valute);
    }
    
    fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
        .then(response => response.json())
        .then(data => {

            loader.classList.remove('loader_active');
            
            // Отображаем полученные данные
            displayCurrencies(data.response.Valute);
            
            // Сохраняем данные в кэш
            saveToCache(data);
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error);

            loader.classList.remove('loader_active');
        });
});