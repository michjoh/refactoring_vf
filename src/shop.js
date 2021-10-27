const Normal = require("./normal");
const Brie = require("./brie");
const Backstage = require("./backstage");
const Item = require("./item");

const classes = {
    "Aged Brie": Brie,
    "Sulfuras, Hand of Ragnaros": Item,
    "Backstage passes to a TAFKAL80ETC concert": Backstage
};

class Shop {
    constructor(items = []) {
        this.items = items.map(this.classFor);
    }

    classFor(item) {
        return new (classes[item.name] || Normal)(item.name, item.sellIn, item.quality)
    }

    updateQuality() {
        this.items.forEach(item => {
            item.update();
        });

        return this.items;
    }
}

module.exports = Shop;