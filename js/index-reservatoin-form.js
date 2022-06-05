(function () {
  const things = [
      {
            id: 1,
            image: 'img/index/things-to-do/nanostudio.jpg',
            title: 'Nano Studio',
            price: '$0',
            description: 'Велика кількість пресетів, підключення власних музичних інструментів та їх запис, безкоштовна.'
      },
      {
          id: 2,
          image: 'img/index/things-to-do/darkwave.jpg',
          title: 'Dark Wave',
          price: '$13',
          description: 'Ця модульна віртуальна студія має можливість збереження треків під flac, mp3 і інші формати.'
      },
      {
          id: 3,
          image: 'img/index/things-to-do/madtracker.jpg',
          title: 'MadTracker',
          price: '$54',
          description: 'Проста програма здатна самостійно вирівняти гучність звучання кожного з інструментів. Використовує мінімум ресурсів ПК.'
      },
  ];

  function renderBlock(things) {
      const thingsContainer = document.querySelector('.things-block');
      for (const thing of things) {
          thingsContainer.innerHTML += `
          <div class="things-card-blocks">
              <img src="${thing.image}" alt="${thing.title}">
              <h2>${thing.title}</h2>
              <h3>${thing.price}/рік</h3>
              <p>${thing.description}</p>
          </div>
          `
      }
  }
  renderBlock(things);
})();