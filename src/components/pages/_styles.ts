import styled from 'styled-components';

const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  NavWrapper > a {
    text-decoration: none;
    color: #1e3786;
  }

  & > a.active {
    text-decoration: none;
    color: #03eaff;
  }

  & > a:hover {
    color: steelblue; /* Цвет ссылки */
  }
`;

const FlexContainer = styled.div`
  display: flex;
  padding: 0 40px 0;
  justify-content: space-between;

  a {
    width: 32%;
		
		img {
			width: 100%;
		}
  }
`;

export const S = {
	NavWrapper,
	FlexContainer,
};
