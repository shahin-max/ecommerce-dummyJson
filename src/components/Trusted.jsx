import React from 'react'
import styled from 'styled-components';

const Trusted = () => {
  return (
    <Wrapper className='brand-section'>
      <div className="container">
        <h3>Trusted by 10000+ companies</h3>
        <div className="brand-section-slider">
          <div className="slide">
            <img src="https://tse1.explicit.bing.net/th?id=OIP.6A-fjovgZAak7PHQA25bIAHaEe&pid=Api&P=0" alt="trusted-brands" />
          </div>
          <div className="slide">
            <img src="https://tse1.mm.bing.net/th?id=OIP.J-YYLBtweRrtE1EwQ9pC0QHaEK&pid=Api&P=0" alt="trusted-brands" />
          </div>
          <div className="slide">
            <img src="https://tse1.mm.bing.net/th?id=OIP.8TQYxFy-aIYn7WTbKEg06gHaEK&pid=Api&P=0" alt="trusted-brands" />
          </div>
          <div className="slide">
            <img src="https://tse4.mm.bing.net/th?id=OIP.KTVpfE4OHs7lpRQAH5XNAgHaEK&pid=Api&P=0" alt="trusted-brands" />
          </div>
          <div className="slide">
            <img src="https://tse3.mm.bing.net/th?id=OIP.0910yjVOhcj56HiUyc40xQHaEK&pid=Api&P=0" alt="trusted-brands" />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;