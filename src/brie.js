const Item = require("./item");

class Brie extends Item {
    update() {
        if (this.sellIn > 0) this.quality += 1;
        if (this.sellIn <= 0) this.quality += 2;
        if (this.quality > 50) this.quality = 50;

        this.sellIn -= 1;
    }
}

module.exports = Brie;