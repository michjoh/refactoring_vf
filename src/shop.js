const Normal = require("./normal");
const Brie = require("./brie");
const Backstage = require("./backstage");
const Item = require("./item");

class Shop {
    constructor(items = []) {
        this.items = items.map(this.classFor);
    }

    classFor(item) {
        if (item.name === "Aged Brie") {
            return new Brie(item.name, item.sellIn, item.quality);
        } else if (item.name === "Sulfuras, Hand of Ragnaros") {
            return new Item(item.name, item.sellIn, item.quality);
        } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
            return new Backstage(item.name, item.sellIn, item.quality);
        } else {
            return new Normal(item.name, item.sellIn, item.quality);
        }
    }

    updateQuality() {
        this.items.forEach(item => {
            item.update();
        });

        return this.items;
    }
}

module.exports = Shop;