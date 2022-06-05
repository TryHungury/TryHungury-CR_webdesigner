(function () {
    const navItems = [
    {
        id: 1,
        rowNaw: '2016'
    },

    {
        id: 2,
        rowNaw: "2018"
    },

    {
        id: 3,
        rowNaw: "2020"
    },

    {
        id: 4,
        rowNaw: "2022"
    },

    ];

    function renderMenu() {
        const menuContainer = document.querySelector('.gallery_nav');
        for (const item of navItems) {
            menuContainer.innerHTML += `<a class="row_nav" href="#">${item.rowNaw}</a>`
        }   
    }

    renderMenu(navItems);
})();