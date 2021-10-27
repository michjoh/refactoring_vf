const Item = require("./item");

class Normal extends Item {
    update() {
        if (this.sellIn > 0) this.quality -= 1;
        if (this.sellIn <= 0) this.quality -= 2;
        if (this.quality < 0) this.quality = 0;
        this.sellIn -= 1;
    }
}

module.exports = Normal;