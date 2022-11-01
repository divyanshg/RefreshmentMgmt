import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

const InfoText = ({ title, content }) => {
  return (
    <View style={tw`flex flex-col`}>
      <Text style={tw`text-gray-400`}>{title}</Text>
      <Text style={tw`text-lg font-semibold`}>{content}</Text>
    </View>
  );
};

export default InfoText;
