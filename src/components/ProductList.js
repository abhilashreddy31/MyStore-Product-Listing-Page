import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import home from './asserts/home.svg';
import searchIcon from './asserts/Search.svg';
import mybooks from './asserts/Bookshelf.svg';
import search1 from './asserts/Search1.svg';
import logo from './asserts/logo4.png'

const ProductListContainer = styled.div`
  margin: 20px;
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 40px;
  font-family: Inter;
  font-weight: 700;
  

  label {
    display: block;
    margin-bottom: 0px;
  }

  select {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 150px;
    font-family: Inter;
    border-radius: 40px;
    font-weight: 500;
  }

  @media (max-width: 750px) {
    select {
 
      width: 100px;
  
    }
  }
  @media (max-width: 640px) {
    select {
 
      width: 70px;
      padding: 3px;
  
    }
    label {
      font-size:10px;
    }
  }
`;

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 28%;
  height:300px;
  background: #ffffff;
  p {
    margin: 0;
  }

  @media (max-width: 1210px) and (min-width: 600px)  {
    width: 360px;
    height:300px;
  }
  @media (max-width: 750px) {
    width: 250px;
    height:300px;
  }

 
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const SplitContainer = styled.div`
  display: flex;
  height: auto;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: -5%;
  border-radius: 10px;
  background: #ffffff;
  @media (max-width: 600px) {
    margin-top: -10%;
  }
 
`;

const Container = styled.div`
  background: #F66356;
  color: black;

`;

const LeftPanel = styled.div`
  width: 18%;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 600px) {
    display: none;
  }
`;

const RightPanel = styled.div`
  width: 80%;
  background: #f3f3f7;
  border-radius: 10px;
  align-items: center;
  justift-content:center;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  margin-bottom: 15px;
  @media (max-width: 750px) {
    font-size:15px
  }
`;

const IconImage = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  margin-left: 15%;
  @media (max-width: 750px) {
    width: 15px;
    height: 15px;
  }
`;
const LogoImage = styled.img`
  width: 170px;
  height: 70px;
  margin:25px 10px 40px 5px;

  @media (max-width: 900px) {
    width: 150px;
    height:50px;
    margin-top:30px;
  }
  @media (max-width: 750px) {
    width: 100px;
    height:40px;
    margin-top:30px;
  }
  
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 40px 0px 40px;


`;

const SearchInput = styled.input`
  padding: 15px;
  border-radius: 40px;
  border: none;
  width: 300px;
  outline: none;
  height: 10px;
  @media (max-width: 725px) {
    width: 100px;
  }
`;

const SearchImage = styled.img`
  height: 20px;
  margin-left: -38px;
  margin-bottom: -6px;
`;

const LoginButton = styled.button`
  display: flex;
  padding: 10px 25px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: transparent;
  color: orange;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  border: 2px solid orange;

  @media (max-width: 600px) {
    display: none;
  }
`;

const LogoImage1 = styled.img`
  display: none;

  @media (max-width: 600px) {
    display: block;
    width: 100px; 
    height: 40px; 
    margin: 10px 0 0 0;
  }
`;

const Searchbox = styled.div``;
const Pagination = styled.ul`

  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 20px;
  padding: 0;

  
`;


const PaginationItem = styled.li`
  display: inline-block;
  padding: 20px 13px;
  @media (max-width: 725px) {
    padding: 10px 2px;
  }
  @media (max-width: 750px) {
    padding: 10px 0px;
  }

`;

const PaginationLink = styled.button`
  position: relative;
  padding: 5px 8px;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  border: none;
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  outline: none;
  color:black;
  font-weight:700;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color:red;
  }

  &.active {
    background: #F66356; 
    color: white; 
    font-weight: bold;
    border-radius: 100%;

  }

  
`;

const PreviousButton = styled.button`

  position: relative;
  padding: 0px 0px;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  border: none;
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  outline: none;
  color:black;
  font-weight:700;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color:red;
  }
`;

const NextButton = styled.button`
position: relative;
padding: 0px 0px;
text-decoration: none;
color: #fff;
font-weight: 500;
border: none;
background: rgba(255, 255, 255, 0.05);
cursor: pointer;
outline: none;
color:black;
font-weight:700;
&:hover {
  background: rgba(255, 255, 255, 0.2);
  color:red;
}
`;




const GlobalStyle = createGlobalStyle`
  body {
    font-family: Inter;
    background: #F66356;
    color: #F66356;
  }
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [sortType, setSortType] = useState('priceLowToHigh');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const categories = ["All", "Men's clothing", "Women's clothing", "Jewelry", "Electronics"];
  const priceRanges = ['All', 'Low', 'Medium', 'High'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?sort=desc');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        let modifiedData = data.map(product => {
          const descriptionWords = product.description.split(' ');
          const truncatedDescription = descriptionWords.slice(0, 5).join(' ');
          const truncatedTitle = product.title.split(' ').slice(0, 4).join(' ');
          return { ...product, description: truncatedDescription, title: truncatedTitle };

        });

        let filteredProducts = modifiedData.filter(product => {
          if (selectedCategory !== 'All' && selectedPriceRange !== 'All') {
            return (
              product.category.toLowerCase() === selectedCategory.toLowerCase() &&
              (
                (selectedPriceRange === 'Low' && product.price < 50) ||
                (selectedPriceRange === 'Medium' && product.price >= 50 && product.price <= 100) ||
                (selectedPriceRange === 'High' && product.price > 100)
              )
            );
          } else if (selectedCategory !== 'All') {
            return product.category.toLowerCase() === selectedCategory.toLowerCase();
          } else if (selectedPriceRange !== 'All') {
            return (
              (selectedPriceRange === 'Low' && product.price < 50) ||
              (selectedPriceRange === 'Medium' && product.price >= 50 && product.price <= 100) ||
              (selectedPriceRange === 'High' && product.price > 100)
            );
          }
          return true;
        });

        filteredProducts.sort((a, b) => {
          if (sortType === 'priceLowToHigh') {
            return a.price - b.price;
          } else if (sortType === 'priceHighToLow') {
            return b.price - a.price;
          }
          return 0;
        });

        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedCategory, selectedPriceRange, sortType]);


  const handleCategoryChange = e => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceRangeChange = e => {
    setSelectedPriceRange(e.target.value);
  };

  const handleSortChange = e => {
    setSortType(e.target.value);
  };

  const handleSearch = e => {
    e.preventDefault();
  
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);


  const paginate = pageNumber => setCurrentPage(pageNumber);
  const lastPage = Math.ceil(products.length / itemsPerPage);
  return (
    <Container>
      <GlobalStyle />
      <SplitContainer>
        <LeftPanel>
        <IconLink href="/">
              <LogoImage src={logo} alt="Home" />
              
            </IconLink>
          <div className="side-box-1">
            <IconLink href="/">
              <IconImage src={home} alt="Home" />
              Home
            </IconLink>
            <IconLink href="/search">
              <IconImage src={searchIcon} alt="Search" />
              Search
            </IconLink>
            <IconLink href="/cart">
              <IconImage src={mybooks} alt="My Shelf" />
              My Shelf
            </IconLink>
          </div>
        </LeftPanel>
        <RightPanel>
          <SearchForm onSubmit={handleSearch}>
            <Searchbox>
              <SearchInput type="text" placeholder="Search..." />
              <SearchImage src={search1} alt="Search Icon" />
            </Searchbox>
            <LoginButton >Login</LoginButton>
            <LogoImage1 src={logo}></LogoImage1>
          </SearchForm>
          <FiltersContainer>
            <label>
              Sort by Price:
              <select value={sortType} onChange={handleSortChange}>
                <option value="priceLowToHigh">Price Low to High</option>
                <option value="priceHighToLow">Price High To Low</option>
              </select>
            </label>
            <label>
              Category:
              <select value={selectedCategory} onChange={handleCategoryChange}>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
            <br />
            <label>
              Price Range:
              <select value={selectedPriceRange} onChange={handlePriceRangeChange}>
                {priceRanges.map(range => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </label>
          </FiltersContainer>
          <ProductListContainer>
            <ProductGrid>
              {currentItems.map(product => (
                <ProductCard key={product.id}>
                  <ProductImage src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                  <p>Category: {product.category}</p>
                </ProductCard>
              ))}
            </ProductGrid>
            {products.length > itemsPerPage && (
              <Pagination>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PreviousButton onClick={() => paginate(currentPage - 1)}>Previous</PreviousButton>
                  </PaginationItem>
                )}
                {Array(lastPage)
                  .fill()
                  .map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        onClick={() => paginate(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                {currentPage !== lastPage && (
                  <PaginationItem>
                    <NextButton onClick={() => paginate(currentPage + 1)}>Next</NextButton>
                  </PaginationItem>
                )}
              </Pagination>
            )}

          </ProductListContainer>
        </RightPanel>
      </SplitContainer>

    </Container>
  );
};

export default ProductList;
