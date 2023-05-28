import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
	// position: fixed;
	top: 0;
	width: 100%;
	justify-content: space-between;
	background-color: rgba(149, 32, 80, 0.6);
	align-items: center;
	padding: 16px;
	transition: all 300ms ease-in-out;
	z-index: 11;
`;

const NavbarLogoMenu = styled.div`
	display: flex;
	text-align: center;
`;

const NavbarLogo = styled.div`
	width: 220px;
	height: 55px;
	left: 16px;
	top: 23px;
	font-family: 'Inter';
	font-style: italic;
	font-weight: 900;
	font-size: 50px;
	line-height: 61px;

	& a {
		text-decoration: none;
		color: #fee25b;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
`;
const NavbarMenu = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	list-style: none;
`;
const NavbarMenuItem = styled.li`
	padding: 8px 12px;
	font-weight: 900;
	font-size: 25px;
	text-decoration: none;

	&:hover {
		background-color: #dbb8c6;
		border-radius: 4px;
	}
	& a {
		text-decoration: none;
		color: #fee25b;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
`;

function Navbar() {
	return (
		<Nav>
			<NavbarLogoMenu>
				<NavbarLogo>
					<Link to={`/`}>MinBox</Link>
				</NavbarLogo>
				<NavbarMenu>
					<NavbarMenuItem>
						<Link to='/'>Home</Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link to='/movie'>Movie</Link>
					</NavbarMenuItem>
				</NavbarMenu>
			</NavbarLogoMenu>
		</Nav>
	);
}

export default Navbar;
