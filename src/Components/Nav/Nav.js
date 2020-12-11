import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaRegBell } from 'react-icons/fa';
import styled from 'styled-components';

const pathList = [
  { id: 1, path: '/main', content: '투데이' },
  { id: 2, path: '/', content: '검색' },
  { id: 3, path: '/', content: '피드' },
  { id: 4, path: '/myBooks', content: '내서재' },
  { id: 5, path: '/', content: '관리' },
];

function Nav({ Token, searchValue, setSearchValue, setSearchEnter }) {
  const history = useHistory();
  const [menu, setMenu] = useState(1);

  const hadleLogout = () => {
    localStorage.removeItem('Kakao_token');
    localStorage.removeItem('token');
    localStorage.removeItem('kakao_b87af1dbe3afc4e3342105079e466b18');
    history.push('/login');
  };

  const handleLogin = () => {
    history.push('/login');
  };

  return (
    <NavTop>
      <NavTopContainer>
        <Menu>
          <Link to="/">
            <img src="./images/logo_dark.png" alt="수위의 서재 로고" />
          </Link>
          <ul>
            {pathList.map((tag, idx) => {
              return (
                <MenuList key={idx} menu={menu} active={tag.id === menu}>
                  {tag.content}
                </MenuList>
              );
            })}
          </ul>
        </Menu>
        <SearchBox
        // onSubmit={handleOnSubmit}
        >
          <Search value={searchValue} placeholder="검색어를 입력해주세요." onChange={(e) => setSearchValue(e.target.value)} />
        </SearchBox>
        <UserSide>
          <Notice notice="notice">
            <FaRegBell />
          </Notice>
          <Notice>
            {!Token && <BlackBtn onClick={handleLogin}>로그인</BlackBtn>}
            {Token && <BlackBtn onClick={hadleLogout}>로그아웃</BlackBtn>}
          </Notice>
        </UserSide>
      </NavTopContainer>
    </NavTop>
  );
}

const NavTop = styled.nav`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  z-index: 100;
`;

const NavTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
  height: 64px;
  margin: 0 auto;
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  a {
    display: inline-block;
    width: 63px;
    height: auto;
    margin-right: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 70px;
    }
  }
  ul {
    display: flex;
  }
`;

const MenuList = styled.li`
  padding: 12px 20px;
  font-size: 20px;
  color: black;
  cursor: pointer;
  font-weight: ${({ active }) => active && '600'};
`;

const SearchBox = styled.form``;

const Search = styled.input`
  width: 400px;
  height: 40px;
  border: 1px solid #cccccc;
  outline: none;

  &:focus {
    outline: none;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: #cccccc;
    padding-left: 10px;
  }
`;

const UserSide = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Notice = styled.li`
  margin-left: 20px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlackBtn = styled.button`
  display: inline-block;
  padding: 7px 17px;
  background: #333;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  color: #fff;
`;

export default Nav;
