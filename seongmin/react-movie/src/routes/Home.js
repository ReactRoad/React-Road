import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Movie from '../components/Movie';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import SwiperCore, { Pagination, Autoplay, EffectCoverflow } from 'swiper';

import './styles.css';

SwiperCore.use([Navigation, Pagination, Autoplay, EffectCoverflow]);

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	//async - await
	const getMovies = async () => {
		const json = await (
			await fetch(
				`https://yts-proxy.nomadcoders1.now.sh/list_movies.json
				?minimum_rating=6.9&sort_by=year&query_term=2023`
			)
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div>
			<Container>
				<Navbar />
				<MoviesContainer>
					{loading ? (
						<Loading />
					) : (
						<CustomSwiper
							navigation={true}
							pagination={true}
							loop={true}
							spaceBetween={10}
							slidesPerView={1}
							effect='coverflow'
							grabCursor={true}
							autoplay={{ delay: 3000 }}
						>
							{movies.map((movie) => (
								<SwiperSlide key={movie.id}>
									<Movie
										key={movie.id}
										id={movie.id}
										coverImg={movie.large_cover_image}
										title={movie.title}
										genres={movie.genres}
									/>
								</SwiperSlide>
							))}
						</CustomSwiper>
					)}
				</MoviesContainer>
			</Container>
		</div>
	);
}

export default Home;

const Container = styled.section`
	background-color: #dbb8c6;
	overflow: hidden;
	height: 100vh;
	margin: 0;
`;

const MoviesContainer = styled.div`
	overflow-x: scroll;
	height: 100%;
	margin-right: -10px;
`;

const CustomSwiper = styled(Swiper)`
	// 스와이퍼 테마에 대한 CSS 스타일을 여기에 추가합니다.
	background-color: #dbb8c6;
	--swiper-theme-color: #ffeda0;
	
`;
