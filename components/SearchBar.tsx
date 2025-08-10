import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

const SearchBar = ({
	onPress,
	placeholder,
}: {
	onPress?: () => void;
	placeholder: string;
}) => {
	return (
		<View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
			<Image
				source={icons.search}
				className="size-5"
				resizeMode="contain"
				tintColor="#AB8BFF"
			/>
			<TextInput
				onPress={onPress}
				onChangeText={() => {}}
				placeholder={placeholder}
				placeholderTextColor="#A8B5DB"
				value=""
				className="flex-1 ml-2 text-white"
			/>
		</View>
	);
};

export default SearchBar;
