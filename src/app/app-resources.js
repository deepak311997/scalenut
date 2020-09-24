function processProductsData(data) {
    const filtersCache = {};
    const filters = [], products = [];

    data.map((prod) => {        
        const catId = prod.categoryId, subCatId = prod.subCategoryId;

        if (filtersCache[catId]) {
            if (!filtersCache[catId].subCategories[subCatId]) {
                const filterSubCategories = filters[filtersCache[catId].index].subCategories;

                filtersCache[catId].subCategories[subCatId] = {
                    index: filterSubCategories.length,
                }
                filters.splice(filtersCache[catId].index, 1);
                filters.push({ categoryId: catId, categoryName: prod.categoryName,
                    subCategories: [...filterSubCategories, { subCategoryId: subCatId, subCategoryName: prod.subCategoryName }]
                })
            }
        } else {
            filtersCache[catId] = {
                index: filters.length,
                subCategories: {
                    [subCatId]: {
                        index: 0,
                    }
                }
            };
            filters.push({ categoryId: catId, categoryName: prod.categoryName,
                subCategories: [{ subCategoryId: subCatId, subCategoryName: prod.subCategoryName }]
            });
        }
        
        products.push(prod);
    });

    return { filters, products };
}

export const fetchProducts = () => fetch('https://testapi.io/api/deepak311997/products')
    .then(res => res.json())
    .then(data => processProductsData(data));