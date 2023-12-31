import { NavLink } from "react-router-dom";
import styled from "styled-components";
const ErrorPage = () => {
  const Wrapper = styled.section`
  display:flex;
  justify-content: center;
  margin:auto;
  padding-left:8%;
  align-items: centre;
  .container {
    padding: 15rem 4rem;
    text-align: center;
    margin:20rem auto;
    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}){
     padding-left:0%;
    .container{
      margin:0rem auto;
      padding:5rem 2rem;
    }
  }
`;
  return (
  <Wrapper className="container">
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>
          <NavLink to="/">
            <button className="btn">Go Back Home</button>
          </NavLink>
        </div>
      </div>
</Wrapper>
  );
};



export default ErrorPage;