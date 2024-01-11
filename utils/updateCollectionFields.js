function synchronizeArrays(arr1, arr2) {
    // const updatedArr2 = [...arr2];

    // Поиск и удаление объектов, которые были удалены из arr1
    const updatedArr2 = arr2.filter((item2) =>
        arr1.some((item1) => item1.id === item2.id)
    );

    // Поиск и добавление объектов, которые были добавлены в arr1
    arr1.forEach((item1) => {
        if (!updatedArr2.some((item2) => item2.id === item1.id)) {
            updatedArr2.push(item1);
        } else {
            // Если объект существует и поле label изменилось, обновляем его
            const matchingItem2 = updatedArr2.find((item2) => item2.id === item1.id);
            if (matchingItem2 && matchingItem2.label !== item1.label) {
                matchingItem2.label = item1.label;
            }
        }
    });

    return updatedArr2;
}

module.exports = { synchronizeArrays };
