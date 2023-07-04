import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
	flex-direction: column;
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

const NavbarMenu = styled.ul`
	display: flex;
	padding-left: 0;
	align-items: center;
	list-style: none;
	flex-direction: row;
	list-style: none;
	margin-left: 24px;
`;

const NavbarMenuItem = styled.li`
	position: relative;
	padding: 8px 12px;
	font-weight: 900;
	font-size: 25px;

	& a {
		text-decoration: none;
		color: #fee25b;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
	&:hover {
		background-color: #dbb8c6;
		border-radius: 4px;
	}
`;
const CategoryList = styled.ul`
	position: absolute;
	top: 100%;
	left: 0;
	display: ${(props) => (props.isOpen ? 'block' : 'none')};
	background-color: rgba(255, 255, 255, 0.8);
	padding: 8px;
	margin-top: 4px;
	border-radius: 4px;
	list-style: none;

	& a {
		display: block;
		font-size: 18px;
		padding: 4px 8px;
		color: #333;
		text-decoration: none;

		&:hover {
			background-color: #fee25b;
			color: #fff;
		}
	}
`;

function Navbar() {
	const [isCategoryOpen, setIsCategoryOpen] = useState(false);

	const handleCategoryClick = () => {
		setIsCategoryOpen(!isCategoryOpen);
	};

	return (
		<Nav>
			<NavbarLogoMenu>
				<NavbarLogo>
					<Link to={`/`}>MinBox</Link>
				</NavbarLogo>
				<NavbarMenu>
					<NavbarMenuItem>
						<Link to='/movie'>Movie</Link>
					</NavbarMenuItem>
					<NavbarMenuItem onClick={handleCategoryClick}>
						<button
							style={{
								fontSize: '18px',
								fontWeight: 900,
								backgroundColor: 'rgba(255, 255, 255, 0.8)',
								border: '1px solid yellow',
								borderRadius: '5px',
								cursor: 'pointer',
								padding: '8px',
							}}
						>
							CATEGORY
						</button>
						<CategoryList isOpen={isCategoryOpen}>
							<li>
								<Link to='/Documentary'>Documentary</Link>
							</li>
							<li>
								<Link to='/Music'>Music</Link>
							</li>
							<li>
								<Link to='/Action'>Action</Link>
							</li>

							<li>
								<Link to='/Drama'>Drama</Link>
							</li>

							<li>
								<Link to='/Sport'>Sport</Link>
							</li>
							<li>
								<Link to='/Crime'>Crime</Link>
							</li>
							<li>
								<Link to='/Mystery'>Mystery</Link>
							</li>
							<li>
								<Link to='/Comedy'>Comedy</Link>
							</li>
						</CategoryList>
					</NavbarMenuItem>
				</NavbarMenu>
			</NavbarLogoMenu>
		</Nav>
	);
}

export default Navbar;
