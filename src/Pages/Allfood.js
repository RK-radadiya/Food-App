import React, { useState } from 'react';
import Helmet from '../Components/Helmet';
import ProductCard from '../Category/ProductCard';
import products from '../Assets/Product'
import ReactPaginate from 'react-paginate';
import CommonSection from './CommonSection/CommonSection';

export default function Allfood() {
  const [pageNumber, setPageNumber] = useState(0);
  const [searchProduct, setSearchProduct] = useState('');
  const [sortType, setSortType] = useState('default');
  const [sortOrder, setSortOrder] = useState('ascending');

  const productData = products.filter((item) => {
    if (searchProduct === '') {
      return item;
    }
    if (item.title.toLowerCase().includes(searchProduct.toLowerCase())) {
      return item;
    }
  });

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;

  // Sorting logic
  const sortedData = [...productData].sort((a, b) => {
    if (sortType === 'name') {
      return sortOrder === 'ascending'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    } else if (sortType === 'price') {
      return sortOrder === 'ascending'
        ? a.price - b.price
        : b.price - a.price;
    } else {
      return 0;
    }
  });

  const displayPage = sortedData.slice(visitedPage, visitedPage + productPerPage);

  const pageCount = Math.ceil(sortedData.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSortChange = (value) => {
    const [type, order] = value.split('-');
    setSortType(type);
    setSortOrder(order);
  };

  return (
    <Helmet title="All food">
      <div>
        <CommonSection title="All food"></CommonSection>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="search_widget d-flex align-items-center justify-content-between w-50">
                  <input
                    type="text"
                    placeholder="I'm looking for......."
                    value={searchProduct}
                    onChange={(e) => setSearchProduct(e.target.value)}
                  ></input>
                  <span>
                    <i className="ri-search-line"></i>
                  </span>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="sorting_widget text-end">
                  <select
                    className="w-50"
                    value={`${sortType}-${sortOrder}`}
                    onChange={(e) => handleSortChange(e.target.value)}
                  >
                    <option value="default">Default</option>
                    <option value="name-ascending">Alphabetically, A-Z</option>
                    <option value="name-descending">Alphabetically, Z-A</option>
                    <option value="price-ascending">Low to High Price</option>
                    <option value="price-descending">High to Low Price</option>
                  </select>
                </div>
              </div>

              {
                displayPage.map((item) => {
                  return (
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-4" key={item.id}>
                      <ProductCard item={item}></ProductCard>
                    </div>
                  );
                })
              }
              <div>
                <ReactPaginate
                  pageCount={pageCount}
                  onPageChange={changePage}
                  previousLabel={"Prev"}
                  nextLabel={"Next"}
                  containerClassName="paginationBttns"
                ></ReactPaginate>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Helmet>
  );
}

