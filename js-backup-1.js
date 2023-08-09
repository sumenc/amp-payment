categoryCB.forEach((checkBox) => {
    checkBox.addEventListener('change', function(){
        var strValFilter = "";
        const selectedCategories = [];
        categoryCB.forEach(checkBox => {
            if (checkBox.checked) {
                if (selectedCategories.indexOf(checkBox.id) === -1) {
                    selectedCategories[selectedCategories.length] = checkBox.id;
                }
            }
        });

        for (var items in priceAll) {
            if (selectedCategories.indexOf(priceAll[items].category) !== -1) {
                strValFilter += cardHtml(priceAll[items]);
            }
        }

        prodCards.innerHTML = strValFilter;
        prdId();
    })
});