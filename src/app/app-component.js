import React, { Fragment, useEffect, useState } from 'react';

import FilterComponent from './filter';
import ProductsComponent from './products';
import Loading from '../lib/loading';
import { fetchProducts } from './app-resources';

function AppComponent() {
  return (
    <Fragment>
      <header className='app-header'>ScaleNut Challenge</header>
      <main className='app-main'>
        <MainComponent/>
      </main>
    </Fragment>
  );
}

function MainComponent() {
  const [products, setProducts] = useState([]);
  const [filtersData, setFiltersData] = useState([]);
  const [filtersApplied, setAppliedFilters] = useState({ categories: [], subCategories: [] });
  const [isDataLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data.products);
      setFiltersData(data.filters);
      setLoading(false);
    });
  }, [setLoading]);

  return (
    <Fragment>
      {isDataLoading ? <Loading /> :
        <Fragment>
          <FilterComponent filters={filtersData} setFilters={setAppliedFilters}/>
          <ProductsComponent products={products} filters={filtersData} filtersApplied={filtersApplied}/>
        </Fragment>
      }
    </Fragment>
  )
};

export default AppComponent;
