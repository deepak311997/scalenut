import React from 'react';

class FilterComponent extends React.PureComponent {
    onCategoryChange = (evt) => {
        const target = evt.target;
        
        if (target.checked) {
            this.props.setFilters(old => ({ ...old, categories: [ ...old.categories, target.id ] }));
        } else {
            this.props.setFilters((old) => {
                const updatedCategories = [...old.categories];

                updatedCategories.splice(updatedCategories.indexOf(target.id), 1);
                return { ...old, categories: updatedCategories };
            });
        }
    };

    onSubCategoryChange = (evt) => {
        const target = evt.target;

        if (target.checked) {
            this.props.setFilters(old => ({ ...old, subCategories: [ ...old.subCategories, target.id ] }));
        } else {
            this.props.setFilters((old) => {
                const updatedSubCategories = [...old.subCategories];

                updatedSubCategories.splice(updatedSubCategories.indexOf(target.id), 1);
                return { ...old, subCategories: updatedSubCategories };
            });
        }
    };

    render() {
        return (
            <div className='filter-container'>
                <div className='filter-content'>
                    <header className='filter-header'>Filter</header>
                    <hr/><hr/>
                    <main className='filter-data'>
                        <header className='filter-header'>Categories</header>
                        {
                            this.props.filters.map(filter =>
                                <section key={filter.categoryId} className='filter-data-section'>
                                    <header className='filter-data-header'>
                                        <div className='filter-data-content'>
                                            <input onClick={this.onCategoryChange} type="checkbox" id={filter.categoryId} value={filter.categoryId}/>
                                            <span>{filter.categoryName}</span>
                                        </div>
                                    </header>
                                    <div className='filter-data-subCat'>
                                        {
                                            filter.subCategories.map(cat =>
                                                <div key={cat.subCategoryId} className='filter-data-content'>
                                                    <input onChange={this.onSubCategoryChange} type="checkbox" id={cat.subCategoryId} value={cat.subCategoryId}/>
                                                    <span>{cat.subCategoryName}</span>
                                                </div>
                                            )
                                        }
                                    </div>
                                </section>
                            )
                        }
                        <hr/>
                    </main>
                </div>
            </div>
        );
    }
}

export default FilterComponent;