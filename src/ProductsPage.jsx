import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import ProductGridView from "./components/ProductGridView";
import Pagination from "./Pagination";
import { Button } from "./styles/Button";
import './App.css'

const ProductsPage = () => {
  
  const [products, setProducts] = useState([]);
  const[loading,setLoading]=useState(false);
  const [search,setSearch]=useState("")
  const [categoryOptions,setCategoryOptions]=useState([])
  const [currentPage,setCurrentPage]=useState(1)
  const [productsPerPage]=useState(9)

 
  
  const ProductGet = () => {
    setLoading(true);

    fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      .then(
        (result) => {
          setProducts(result.products)
        }
      )
      setLoading(false)

  }
  //Get current product
  const indexOfLastProduct= currentPage*productsPerPage;
  const indexOfFirstProduct=indexOfLastProduct-productsPerPage;
  const currentProduct=products.slice(indexOfFirstProduct,indexOfLastProduct)
  //change page
  const paginate=(pageNumber)=>setCurrentPage(pageNumber)
  
  useEffect(() => {
    ProductGet()
    getCategory()
  }, [])

  const handleSearch = (e) =>{
    e.preventDefault();
    fetch(`https://dummyjson.com/products/search?q=${search}`)
    .then(res => res.json())
    .then(
      (result) => {
        setProducts(result.products)
        setSearch("")
      })}
  const handleReset = ()=>{
    ProductGet()

  }
  const getCategory = () => {
    fetch("https://dummyjson.com/products/categories")
      .then(res => res.json())
      .then(
        (result) => {
          setCategoryOptions(result)
        }
      )
  }
  // console.log(categoryOptions)


  const handleFilter = (value) =>{
    fetch(`https://dummyjson.com/products/category/${value}`)
.then(res => res.json())
.then( (result) => {
  setProducts(result.products)
});
  }
  
  
  const UpdateProduct = id => {
    window.location = '/update/'+id
  }

  const ProductDelete = id => {
    var data = {
      'id': id
    }
    fetch(`https://dummyjson.com/products/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(
      (result) => {
        alert('Product deleted,You can check in the network tab')
        
          ProductGet();
        
      }
    )
  }
// console.log(products)
if(loading){
  return <h2>Loading....</h2>
}

  
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection categoryOptions={categoryOptions} handleSearch={handleSearch} handleReset={handleReset} handleFilter={handleFilter} search={search} setSearch={setSearch}/>
        </div>

        <section className="product-view--sort">
        <div>
        <NavLink to="/create">
              <Button>Create A product</Button>
            </NavLink>
          </div>
          
          <div className="main-product">
            <ProductGridView products={currentProduct} ProductGet={ProductGet} UpdateProduct={UpdateProduct} ProductDelete={ProductDelete}/>
          </div>
        </section>
      </div>
      <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate}/>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default ProductsPage;
