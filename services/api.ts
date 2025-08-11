import { discoverMovieResponseSample } from "./sample";

export const TMDB_CONFIG = {
	BASE_URL: process.env.EXPO_PUBLIC_TMDB_BASE_URL,
	API_KEY: process.env.EXPO_PUBLIC_TMDB_API_KEY,
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_API_KEY}`,
	},
};

export const fetchMovies = async ({
	query,
}: {
	query: string;
}): Promise<Movie[]> => {
	const endpoint = query
		? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
		: `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

	const response = await fetch(endpoint, {
		method: "GET",
		headers: TMDB_CONFIG.headers,
	});

	if (!response.ok) {
		throw new Error(`Failed to fetch movies: ${response.statusText}`);
	}

	const data = await response.json();
	return data.results;
};

// サンプルデータを返す関数（API接続できない場合用）
export const fetchSampleMovies = async ({
	query,
}: {
	query: string;
}): Promise<Movie[]> => {
	// クエリがある場合は、タイトルでフィルタリング
	if (query) {
		const filteredResults = discoverMovieResponseSample.results.filter(
			(movie) =>
				movie.title.toLowerCase().includes(query.toLowerCase()) ||
				movie.original_title.toLowerCase().includes(query.toLowerCase()),
		);
		return filteredResults;
	}

	// クエリがない場合は、人気順でソートされた全結果を返す
	return discoverMovieResponseSample.results.sort(
		(a, b) => b.popularity - a.popularity,
	);
};

export const fetchMovieDetails = async (
	movieId: string,
): Promise<MovieDetails> => {
	try {
		const response = await fetch(
			`${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`,
			{
				method: "GET",
				headers: TMDB_CONFIG.headers,
			},
		);

		if (!response.ok) {
			throw new Error(`Failed to fetch movie details: ${response.statusText}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching movie details:", error);
		throw error;
	}
};
