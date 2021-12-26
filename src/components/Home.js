import { gql, useQuery } from '@apollo/client';
const GET_MOVIES = gql`
	query {
		movies(limit: 30, rating: 5) {
			id
			medium_cover_image
		}
	}
`;

const Home = () => {
	const { loading, error, data } = useQuery(GET_MOVIES);
	console.log(data);
	return <h1>Home 🚀</h1>;
};

export default Home;
