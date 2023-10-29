class FlexitimePopupTag extends HTMLElement {
    constructor(closeButton = false) {
        super();

        this.addEventListener('click', () => {
            // this.children[0].hide();
            this.hide();
        });
        this.render();
    }

    show = (x, y, cb) => {
        this.style.visibility = "visible";
        this.children[0].show(x, y, cb);
    }
    hide = () => this.style.visibility = "hidden";

    render() {
        // this.textContent = "안녕하세요, 이것은 커스텀 요소입니다!";
    }

}
customElements.define('flexitime-popup-tag', FlexitimePopupTag);


class FlexitimeMenuTag extends HTMLElement {
    static SEPARATOR = '----------';
    constructor(closeButton = false) {
        super();

        this.menuList = [
            {
                title: '일근태(휴가)', icon: '"uil uil-eye"', subMenuList: [
                    {title: 'Twitter 1', icon: '"uil uil-eye"', menuId: 1},
                    {title: 'Instagram 2', icon: '"uil uil-eye"', menuId: 2},
                    {title: 'Dribble 3', icon: '"uil uil-eye"', menuId: 3},
                    {title: 'Telegram 4', icon: '"uil uil-eye"', menuId: 4},
                    {title: '연차 5', icon: '"uil uil-eye"', menuId: 5},
                    {title: '반차 6', icon: '"uil uil-eye"', menuId: 6},
                    {title: '반반차 7', icon: '"uil uil-eye"', menuId: 7},
                ]
            },
            {title: '시간근태(휴가) 8', icon: '"uil uil-eye"', subMenuList: [], menuId: 8},
            {title: '일근태 9', icon: '"uil uil-eye"', subMenuList: [], menuId: 9},
            {title: '시간근태 10', icon: '"uil uil-eye"', menuId: 10},
            {title: '추가/공제', icon: '"uil uil-eye"', subMenuList: [
                    {title: 'Twitter 11', icon: '"uil uil-eye"', menuId: 11},
                    {title: 'Instagram 12', icon: '"uil uil-eye"', menuId: 12},
                    {title: 'Dribble 13', icon: '"uil uil-eye"', menuId: 13},
                    {title: 'Telegram 14', icon: '"uil uil-eye"', menuId: 14},
                    {title: '연차 15', icon: '"uil uil-eye"', menuId: 15},
                    {title: '반차 16', icon: '"uil uil-eye"', menuId: 16},
                    {title: '반반차 17', icon: '"uil uil-eye"', menuId: 17},
                ]
            },
            {title: FlexitimeMenuTag.SEPARATOR},
            {title: '삭제 18', icon: '"uil uil-eye"', subMenuList: [], menuId: 18},
            {title: '취소 19', icon: '"uil uil-eye"', subMenuList: [], menuId: 19},
        ];

        this.render();

        this.querySelectorAll(".item.share").forEach(menu => {
            const subMenu = menu.querySelector('.share-menu');
            menu.addEventListener('mouseenter', e => {
                const menuClientRect = menu.getBoundingClientRect();
                const subMenuHalfHeight = subMenu.offsetHeight / 2;

                let y = menuClientRect.top + menuClientRect.height / 2
                if (y - subMenuHalfHeight < 0)
                    subMenu.style.top = `${-e.target.offsetTop}px`;
                else if (y + subMenuHalfHeight > window.innerHeight)
                    subMenu.style.top = `${-(subMenuHalfHeight + 11)}px`;
            });
        })

        console.log('length:', this.querySelectorAll(".item:not(.share)").length);

        this.addEventListener('click', e => {
            console.log('e.target.closest(li):', e.target.closest('li').dataset?.menuId);
            const menuId = e.target.closest('li').dataset?.menuId
            if (this.callback && menuId)
                this.callback && this.callback(menuId);
        })
    }

    setMenuList = menuList => {
        this.menuList = menuList;
    }

    show = (x, y, callback) => {
        this.callback = callback;

        const menuHalfHeight = this.clientHeight / 2;
        y = Math.min(Math.max(y - menuHalfHeight, 0), window.innerHeight - this.clientHeight - 3);

        this.style.left = `${x}px`;
        this.style.top = `${y}px`;
    }

    render() {
        this.innerHTML = `
            <div class="content">
                <ul class="menu">
                    ${this.menuList?.map(menu => {
                        // const title = menu.title === FlexitimeMenuTag.SEPARATOR ? 
                        if (menu.subMenuList && menu.subMenuList.length > 0)
                            return `
                                <li class="item share">
                                    <div>
                                        <i class=${menu.icon}></i>
                                        <span>${menu.title}</span>
                                    </div>
                                    <i class="uil uil-angle-right"></i>
                                    <ul class="share-menu">
                                        ${menu.subMenuList.map(subMenu => `
                                            <li class="item" data-menu-id="${subMenu.menuId}">
                                                <i class=${subMenu.icon}></i>
                                                <span>${subMenu.title}</span>
                                            </li>`
                                        ).join('')}
                                    </ul>
                                </li>
                            `;
                        else if (menu.title === FlexitimeMenuTag.SEPARATOR)
                            return `
                                <li class="separator"">
                                </li>
                            `;
                        else
                            return `
                                <li class="item" data-menu-id="${menu.menuId}">
                                    <i class=${menu.icon}></i>
                                    <span>${menu.title}</span>
                                </li>
                            `;
                    }).join('')}
                </ul>
            </div>
        `;
    }

}
customElements.define('flexitime-menu-tag', FlexitimeMenuTag);


