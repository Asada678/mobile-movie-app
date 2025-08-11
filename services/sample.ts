export const discoverMovieResponseSample = {
	page: 1,
	results: [
		{
			adult: false,
			backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
			genre_ids: [18, 80],
			id: 238,
			original_language: "en",
			original_title: "The Godfather",
			overview:
				"Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the killers, launching a campaign of bloody revenge.",
			popularity: 100.0,
			poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
			release_date: "1972-03-14",
			title: "The Godfather",
			video: false,
			vote_average: 9.2,
			vote_count: 18895,
		},
		{
			adult: false,
			backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
			genre_ids: [18, 80],
			id: 278,
			original_language: "en",
			original_title: "The Shawshank Redemption",
			overview:
				"Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates for an indomitable spirit.",
			popularity: 95.0,
			poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
			release_date: "1994-09-23",
			title: "The Shawshank Redemption",
			video: false,
			vote_average: 9.3,
			vote_count: 24567,
		},
		{
			adult: false,
			backdrop_path: "/kGzFbGhp99IvaDjS6gWcx4QfE3k.jpg",
			genre_ids: [18, 80],
			id: 240,
			original_language: "en",
			original_title: "The Godfather Part II",
			overview:
				"In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
			popularity: 90.0,
			poster_path: "/heK3Efd9Aay5SIBmXvH30eMvhfQ.jpg",
			release_date: "1974-12-20",
			title: "The Godfather Part II",
			video: false,
			vote_average: 9.0,
			vote_count: 11234,
		},
		{
			adult: false,
			backdrop_path: "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
			genre_ids: [18, 80, 53],
			id: 424,
			original_language: "en",
			original_title: "Schindler's List",
			overview:
				"The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
			popularity: 85.0,
			poster_path: "/sF1U4EUQS8YHUYjNl3pMGNTTyrp.jpg",
			release_date: "1993-11-30",
			title: "Schindler's List",
			video: false,
			vote_average: 8.9,
			vote_count: 14321,
		},
		{
			adult: false,
			backdrop_path: "/dXNAPwY7VrqMA6cYuiZtM0FyGRQ.jpg",
			genre_ids: [12, 14, 28],
			id: 122,
			original_language: "en",
			original_title: "The Lord of the Rings: The Return of the King",
			overview:
				"Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
			popularity: 80.0,
			poster_path: "/rCzpDGLbEYoYzAZdXeKUD9mqz6P.jpg",
			release_date: "2003-12-01",
			title: "The Lord of the Rings: The Return of the King",
			video: false,
			vote_average: 8.9,
			vote_count: 21876,
		},
	],
	total_pages: 500,
	total_results: 10000,
};

// レスポンスの型定義
export interface DiscoverMovieResponse {
	page: number;
	results: MovieResult[];
	total_pages: number;
	total_results: number;
}

export interface MovieResult {
	adult: boolean;
	backdrop_path: string | null;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string | null;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
