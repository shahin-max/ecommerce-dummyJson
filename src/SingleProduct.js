import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import { Container } from "./styles/Container";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { Button } from "./styles/Button";


const SingleProduct = () => {
 
  const [product, setProduct] = useState({});
  const [loading,setLoading]=useState(false)
  const { id } = useParams();
 
  const GetSingleProduct = () => {
    setLoading(true);

    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setProduct(result)
        }
      )
      setLoading(false)

  }

  useEffect(() => {
    GetSingleProduct();
  }, []);

  const {  title, price, description,category,stock,images, brand,rating} = product;
  console.log(product)
  if(loading){
    return <h2>Loading....</h2>
  }
  console.log(product)
  
  return (
    <Wrapper>
      <PageNavigation title={title} />
      <Container className="container">
        <div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
            <MyImage imgs={images? images : []} />
          </div>

          {/* product data  */}
          <div className="product-data">
            <h2>{title}</h2>
            <p className="product-data-price">
              MRP:
              <del>
                 {price + 250000}$
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day:{price}$
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Contact less Service </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
               Category :<span> {category} </span>
              </p>
              <p>Brand:<span>{brand}</span></p>
            </div>
            <p>Rating:<span>{rating}</span></p>
           <Button>Add To Cart</Button>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product_images {
    display: flex;
    align-items: center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;
      .product-warranty-data {
        text-align: center;
        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }
    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;
      span {
        font-weight: bold;
      }
    }
    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }
  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;