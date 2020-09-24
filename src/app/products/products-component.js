import React, { memo } from 'react';

import Card from '../../lib/card';

function ProductsComponent({ products, filters, filtersApplied: { categories, subCategories }}) {
    const isCategories = categories.length, isSubCategories = subCategories.length, isAndFilter = isCategories && isSubCategories;

    return (
        <div className='product-container'>
            {
                products.map(({ productId, categoryId, subCategoryId, ...rest }) => {
                    let isFiltered = false;


                    if ((!isCategories && !isSubCategories)) {
                        isFiltered = true;
                    } else {
                        const category = filters.find(cat => cat.categoryId === categoryId);

                        if (isAndFilter) {
                            if (categories.includes(categoryId)) {
                                if (category.subCategories.some(sub => subCategories.some(selSubId => selSubId === sub.subCategoryId))) {
                                    isFiltered = subCategories.includes(subCategoryId);
                                } else {
                                    isFiltered = true;
                                }
                            } else {
                                isFiltered = subCategories.includes(subCategoryId);
                            }
                        } else if (isCategories) {
                            isFiltered = categories.includes(categoryId);
                        } else {
                            isFiltered = subCategories.includes(subCategoryId);
                        }
                    }

                    if (isFiltered) {
                        return (
                            <Product
                                key={productId}
                                productId={productId}
                                {...rest}
                            />
                        )
                    }
                    return null;
                })
            }
        </div>
    );
}

const Product = memo(({ productName, categoryName, subCategoryName, price, image }) =>
    <Card>
        <img className='product-image' src={image} alt='' />
        <div>
            <div>
                <span className='product-header'>Product Name: </span>
                <span className='product-value'>{productName}</span>
            </div>
            <div>
                <span className='product-header'>Category Name: </span>
                <span className='product-value'>{categoryName}</span>
            </div>
            <div>
                <span className='product-header'>Sub-Category Name: </span>
                <span className='product-value'>{subCategoryName}</span>
            </div>
        </div>
        <div className='product-price'>
            <span>₹{price}</span>
        </div>
    </Card>
);

export default ProductsComponent;