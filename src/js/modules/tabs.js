const tabs = () => {
    // Tabs
    const tabBtns = document.querySelectorAll('.tabheader__item'),
        contents = document.querySelectorAll('.tabcontent'),
        tabParent = document.querySelector('.tabheader__items');

    const hideContent = () => {
        contents.forEach(content => {
            content.classList.add('hide');
            content.classList.remove('show', 'fade');

        });
        tabBtns.forEach(btn => {
            btn.classList.remove('tabheader__item_active');
        });
    }
    const showContent = (i = 0) => {
        contents[i].classList.add('show', 'fade');
        contents[i].classList.remove('hide');
        tabBtns[i].classList.add('tabheader__item_active');
    };
    hideContent();
    showContent();

    tabParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabBtns.forEach((btn, i) => {
                if (target == btn) {
                    hideContent();
                    showContent(i);
                }
            });
        }
    });
}

export default tabs;