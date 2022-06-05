(function () {
    const things = [
        {
            id: 1,
            image: 'img/index/things-to-do/flstudio.jpg',
            title: 'FL Studio',
            price: '$99',
            description: 'Це відома програма для створення музики, свого роду творець мелодій. В ній розбереться навіть новачок.'
        },
        {
            id: 2,
            image: 'img/index/things-to-do/abletonlive.jpg',
            title: 'Ableton Live',
            price: '$283',
            description: 'Такі програми не настільки популярні, але вони підійдуть для новачків і не тільки.'
        },
        {
            id: 3,
            image: 'img/index/things-to-do/sunvox.jpg',
            title: 'SunVox',
            price: '$20',
            description: 'Rent a bike and take a fun and easy two-wheel tour over Yosemite Valley. It usually takes 2 hours.'
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