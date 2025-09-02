import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import React from "react";
import { Image, Text, View } from "react-native";

const Profile = () => {
  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />
      <View className="flex-1 justify-center items-center px-6">
        <Image
          source={icons.logo}
          className="w-24 h-24 mb-6"
          resizeMode="contain"
        />
        <Text className="text-2xl font-bold text-white mb-2 text-center">
          Created by Striker
        </Text>
        <Text className="text-lg text-gray-400 text-center mb-2">
          Welcome to the MovieFlix! Here you can find details about all your favorite movies, including ratings, story summaries, and genres.
        </Text>
        <Text className="text-base text-light-100 text-center">
          Explore and discover movie details right here on your free App.
        </Text>
      </View>
    </View>
  );
};

export default Profile;
