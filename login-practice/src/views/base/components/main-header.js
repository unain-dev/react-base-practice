import styled from "styled-components";
import { signIn } from "../../../common/lib/auth/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

const Title = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

const HeaderContainer = styled.div`
  margin: 30px;
  margin-left: 10%;
  margin-right: 10%;
  border-bottom: 1px solid gray;
  padding-bottom: 2%;
  display: flex;
  height: 50px;
  align-items: flex-end;
  justify-content: bottom;
  nav {
    margin-left: auto;
    padding-left: 10px;
  }
`;

function Header() {
  // const [user, setUser] = useState(null);
  // const authenticated = user != null;

  // const login = ({ email, password }) => setUser(signIn({ email, password }));
  // const logout = () => setUser(null);

  return (
    <header>
      <HeaderContainer>
        <Title>Header</Title>
        <nav>
          <Link to="/signup">
            <button>SignUp</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </nav>
      </HeaderContainer>
    </header>
  );
}

export default Header;
