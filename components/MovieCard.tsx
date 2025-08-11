import { icons } from "@/constants/icons";
import type { Movie } from "@/types";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({ movie }: { movie: Movie }) => {
	const { id, title, release_date } = movie;

	return (
		<Link href={`/movie/${id}`} asChild>
			<TouchableOpacity className="w-[30%]">
				<Image
					source={{ uri: "https://placehold.co/600x400/orange/white" }}
					className="w-full h-52 rounded-lg"
					resizeMode="cover"
				/>
				<Text className="text-white text-sm font-bold mt-2" numberOfLines={1}>
					{title}
				</Text>
				<View className="flex-row items-center justify-start gap-x-1">
					<Image source={icons.star} className="size-4" />
					<Text className="text-white text-xs font-bold uppercase">
						{Math.round(movie.vote_average * 10) / 10}
					</Text>
				</View>

				<View className="flex-row items-center justify-between">
					<Text className="text-light-300 text-xs font-medium mt-1">
						{release_date.split("-")[0]}
					</Text>
					<Text className="text-xs font-medium text-light-300 uppercase">
						Movie
					</Text>
				</View>
			</TouchableOpacity>
		</Link>
	);
};

export default MovieCard;
