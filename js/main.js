const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //Add border
    this.classList.add('tab-border');
    const newID = this.id + '-content';

    document.getElementById(newID).classList.add('show');
}

function removeBorder() {
    tabItems.forEach((item) => {
        item.classList.remove('tab-border');
    });
}

function removeShow() {
    tabContentItems.forEach((item) => {
        item.classList.remove('show');
    });
}

//listen for tab click
tabItems.forEach((item) => item.addEventListener('click', selectItem));
