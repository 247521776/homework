const dropTable = [
     [98, 1, 2, 0.01 ]
];
function f(ItemLevel, dropClass, dropRate) {
    const filterAfter = dropTable.filter((item) => {
        if (ItemLevel > item[1]) {
            return;
        }
        if (dropClass !== item[2]) {
            return;
        }
        if (dropRate > item[3]) {
            return;
        }

        return item;
    });
    if (filterAfter.length === 0) {
        return 0;
    }
    return filterAfter[0][0];
}