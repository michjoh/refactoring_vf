function update(originalItem) {
    const item = {...originalItem};

    item.sellIn = item.sellIn - 1;

    if (item.quality === 0) return item;
    item.quality = item.quality - 1;
    if (item.sellIn < 0 && item.quality > 0) {
        item.quality = item.quality - 1;
    }

    return item;
}

module.exports = update;