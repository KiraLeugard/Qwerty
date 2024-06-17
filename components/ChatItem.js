import { Image } from "expo-image";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { blurhash } from "../utils/common";

export default function ChatItem({ item, router, noBorder }) {
  const openChatRoom = () => {
    router.push({ pathname: "/chatRoom", params: item });
  };
  return (
    <TouchableOpacity
      onPress={openChatRoom}
      className={`flex-row justify-between mx-4 items-center mb-4 pb-2 space-x-2 ${
        noBorder ? "" : "border-b-neutral-200"
      }`}
    >
      <Image
        style={{ height: hp(6), width: hp(6), borderRadius: 100 }}
        source={item?.profileUrl}
        placeholder={blurhash}
        transition={500}
      />

      {/* Name and last name message */}
      <View className="flex-1 gap-1">
        <View className="flex-row justify-between">
          <Text
            style={{ fontSize: hp(1.8) }}
            className="font-semibold text-neutral-800"
          >
            {item?.username}
          </Text>
          <Text
            style={{ fontSize: hp(1.6) }}
            className="font-medium text-neutral-500"
          >
            Time
          </Text>
        </View>
        <Text
          style={{ fontSize: hp(1.6) }}
          className="font-medium text-neutral-500"
        >
          Last Message
        </Text>
      </View>
    </TouchableOpacity>
  );
}
