const contextMenu = document.querySelector(".wrapper");
const popup = document.querySelector(".full_popup");

popup.addEventListener("click", () => popup.style.visibility = "hidden");

document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', e => {
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;
        const cmWidth = contextMenu.offsetWidth;
        const cmHeight = contextMenu.offsetHeight;

        let x = e.clientX + 10;
        let y = e.clientY - cmHeight / 2;

        x = x > winWidth - cmWidth ? winWidth - cmWidth - 5 : x;
        y = Math.min(Math.max(y, 0), winHeight - cmHeight);

        contextMenu.style.left = `${x}px`;
        contextMenu.style.top = `${y}px`;
        popup.style.visibility = "visible";
    })
})

contextMenu.querySelectorAll(".item.share").forEach(menu => {
    menu.addEventListener('mouseenter', e => {
        const subMenu = menu.querySelector('.share-menu');

        const menuClientRect = menu.getBoundingClientRect();
        const subMenuHalfHeight = subMenu.offsetHeight / 2;

        let y = menuClientRect.top + menuClientRect.height / 2
        if (y - subMenuHalfHeight < 0)
            subMenu.style.top = `${-e.target.offsetTop}px`;
        else if (y + subMenuHalfHeight > window.innerHeight)
            subMenu.style.top = `${-(subMenuHalfHeight + 6)}px`;
    });
})
