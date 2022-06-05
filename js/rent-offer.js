
(function () {

 const countDown = () => {
     const countDate = new Date('November 14 , 2022 00:00:00').getTime();
     const now = new Date().getTime();
     const gap = countDate - now;
     
     const second = 1000;
     const minute = second * 60;
     const hour = minute * 60;
     const day =  hour * 24;

     const textday = Math.floor(gap / day);
     const textHour = Math.floor((gap % day) / hour);
     const textMinute = Math.floor((gap % hour) / minute);
     const textSecond = Math.floor((gap % minute) / second);
     

     document.querySelector(".day").innerText = textday;
     document.querySelector(".hour").innerText = textHour;
     document.querySelector(".minute").innerText = textMinute;
     document.querySelector(".second").innerText = textSecond;
    };
    setInterval(countDown);
  

    const products = [
        {
            id: 1,
            title: 'Австралія',
            itemsList: ['✔ Готель для ночівлі перед концертом',
                '✔ Готель для ночівлі після концерту',
                '✔ Їжа включно',
                'Файршоу на концерті',
                'Wi-Fi'],
            price: '1399 грн',
            image: 'img/rent-offer/Australia.jpg'
        },
        {
            id: 2,
            title: 'Канада',
            itemsList: ['✔ Готель для ночівлі перед концертом',
                '✔ Готель для ночівлі після концерту',
                '✔ Їжа включно',
                'караоке на концерті',
                'Wi-Fi'],
            price: '1890 грн',
            image: 'img/rent-offer/Canada.jpg'
        },
        {
            id: 3,
            title: 'Фінляндію',
            itemsList: ['✔ Готель для ночівлі перед концертом',
                '✔ Готель для ночівлі після концерту',
                '✔ Їжа включно',
                'Концерт біля берега моря',
                'Wi-Fi'],
             price: '1250 грн',
             image: 'img/rent-offer/Finlandia.jpg'
        },
        {
            id: 4,
            title: 'Австрія',
            itemsList: ['✔ Готель для ночівлі перед концертом',
                '✔ Готель для ночівлі після концерту',
                '✔ Їжа включно',
                'Відкритий концерт',
                'водяні ігри',
                'Wi-Fi'],
             price: '1300 грн',
             image: 'img/rent-offer/Austria.jpg'
         },
         {
            id: 5,
            title: 'Німеччина',
            itemsList: ['✔ Готель для ночівлі перед концертом',
                '✔ Готель для ночівлі після концерту',
                '✔ Їжа включно',
                'Виконання 3-ма мовами',
                'V.I.P'],
             price: '1459 грн',
             image: 'img/rent-offer/Nimechuna.jpg'
         }
    ]
    function renderProducts(products) {
        const productsContainer = document.getElementById('products');
        let content = '';
        for (const product of products) {
            content += `
                <div class="products">
                    <div class="cabin-rentals-img">
                        <img class="cards-img" src="${product.image}" alt="${product.title}" />
                    </div>
                    <article>
                        <h2><span class="price">${product.price}</span> / Білет</h2>
                        <h3>${product.title}</h3>
                        <article class="bottons">
                           ${product.itemsList.map(item => `<p>${item}</p>`).join('')}
                        </article>
                        <a href="index.html" class="orange-button">Зарезервувати</a>
                    </article>
                </div>
            `;
        }
        productsContainer.innerHTML = content;
    }
    renderProducts(products)
})();
