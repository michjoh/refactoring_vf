const Normal = require("./normal");
const Brie = require("./brie");
const Backstage = require("./backstage");
const Conjured = require("./conjured");
const Item = require("./item");


const update = {
    "Aged Brie": Brie,
    "Sulfuras, Hand of Ragnaros": item => item,
    "Backstage passes to a TAFKAL80ETC concert": Backstage,
    "Conjured Mana Cake": Conjured
};

class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateItem(item) {
        return (update[item.name] || Normal)(item)
    }

    updateQuality() {
        return this.items.map(this.updateItem);
    }
}

module.exports = Shop;