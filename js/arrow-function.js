class Button {
    constructor(name) {
        this.name = name;
        // this.click = this.click.bind(this);
    }

    click = () => {
        console.log(this.name);
    }
}

const btn = new Button('coco');
// setTimeout(() => btn.click(), 100);
setTimeout(btn.click, 100);
