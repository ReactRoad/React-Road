import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <StyledHeader>
      <Title>
        <Link to={"/"}>MOVIE-WEB</Link>
      </Title>
      <Menu>
        <NavMenu>
          <div style={{ paddingRight: 10 }}>CATEGORY</div>
          <FontAwesomeIcon icon={faPlay} color={"white"} rotation={90} />
        </NavMenu>
        <CategoryList>
          <Link to={"/Documentary"}>Documentary</Link>
          <Link to={"/Music"}>Music</Link>
          <Link to={"/Thriller"}>Thriller</Link>
          <Link to={"/Action"}>Action</Link>
          <Link to={"/Biography"}>Biography</Link>
          <Link to={"/Drama"}>Drama</Link>
          <Link to={"/Sci-Fi"}>Sci-Fi</Link>
          <Link to={"/History"}>History</Link>
          <Link to={"/Sport"}>Sport</Link>
          <Link to={"/Crime"}>Crime</Link>
          <Link to={"/Mystery"}>Mystery</Link>
          <Link to={"/Comedy"}>Comedy</Link>
        </CategoryList>
      </Menu>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 60px;

  &:nth-child(2):hover {
    & button svg {
      transform: rotate(-90deg);
    }
  }
`;

const Title = styled.h1`
  & a {
    font-size: 36px;
    color: #ffffff;
    text-decoration: none;
  }
`;

const Menu = styled.div`
  background-color: black;
  color: #ffffff;
  height: 60px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto 0;

  &:hover {
    cursor: pointer;
  }
  &:hover ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 3;
  }

  & svg {
    transition: all ease 0.5s;
  }

  &:hover svg {
    transform: rotate(-90deg);
    transition: all ease 0.5s;
  }
`;

const NavMenu = styled.div`
  display: flex;
`;

const CategoryList = styled.ul`
  text-align: right;
  background-color: black;
  border: 0.5px solid #ffffff;
  box-sizing: border-box;
  padding: 8px 15px;
  margin: 0 10px;
  font-size: 18px;
  font-weight: 700;
  right: 50px;
  top: 90px;
  display: none;
  position: absolute;
  z-index: 4;

  :hover {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 3;
  }

  & a {
    padding: 4px 0;
    color: white;
    text-decoration: none;

    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
