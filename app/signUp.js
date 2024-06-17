import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Feather, Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import Loading from "../components/Loading";
import CustomKeyboardView from "../components/CustomKeyboardView";
import { useAuth } from "../context/authContext";

export default function SignUp() {
  const router = useRouter();
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const profileRef = useRef("");

  const handleRegister = async () => {
    if (
      !emailRef.current &&
      !passwordRef.current &&
      !usernameRef.current &&
      !profileRef.current
    ) {
      Alert.alert("GOBLOK", "Lu kosongin semua ya gabisa login lah kontol!");
    } else if (!emailRef.current) {
      Alert.alert("Goblok", "Mana Emailnya!");
      return;
    } else if (!passwordRef.current) {
      Alert.alert("Goblok", "Mana Passwordnya!");
    } else if (!usernameRef.current) {
      Alert.alert("Goblok", "Mana Usernamenya!");
    } else if (!profileRef.current) {
      Alert.alert("Goblok", "Masukin lah ppmu itu!");
    }
    setLoading(true);

    let response = await register(
      emailRef.current,
      passwordRef.current,
      usernameRef.current,
      profileRef.current
    );
    setLoading(false);

    if (!response.success) {
      Alert.alert("Sign up", response.msg);
    }
  };

  return (
    <CustomKeyboardView>
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
        className="flex-1"
      >
        {/* signIn Image */}
        <View className="items-center">
          <Image
            style={{ height: hp(25) }}
            resizeMode="contain"
            source={require("../assets/images/register.png")}
          />
        </View>

        <View className="gap-9">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wider text-center text-neutral-600"
          >
            Create an Account
          </Text>
          {/* Inputs */}
          <View className="space-y-7">
            <View
              style={{ height: hp(7) }}
              className="flex-row px-4 bg-neutral-100 items-center rounded-xl"
            >
              <Feather name="user" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={(value) => (usernameRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700 pl-3"
                placeholder="Username"
                placeholderTextColor={"gray"}
              />
            </View>
            <View
              style={{ height: hp(7) }}
              className="flex-row px-4 bg-neutral-100 items-center rounded-xl"
            >
              <Octicons name="mail" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={(value) => (emailRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700 pl-3"
                placeholder="Email"
                placeholderTextColor={"gray"}
              />
            </View>
            <View
              style={{ height: hp(7) }}
              className="flex-row px-4 bg-neutral-100 items-center rounded-xl"
            >
              <Octicons name="lock" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={(value) => (passwordRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700 pl-3"
                placeholder="Password"
                secureTextEntry
                placeholderTextColor={"gray"}
              />
            </View>
            <View
              style={{ height: hp(7) }}
              className="flex-row px-4 bg-neutral-100 items-center rounded-xl"
            >
              <Feather name="image" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={(value) => (profileRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700 pl-3"
                placeholder="Profile Url"
                placeholderTextColor={"gray"}
              />
            </View>
          </View>
          {/* Submit Button */}

          <View>
            {loading ? (
              <View className="flex-row justify-center">
                <Loading size={hp(10)} />
              </View>
            ) : (
              <TouchableOpacity
                onPress={handleRegister}
                style={{ height: hp(6.5) }}
                className="bg-indigo-500 rounded-xl justify-center items-center "
              >
                <Text
                  style={{ fontSize: hp(2.7) }}
                  className="text-white font-bold tracking-wider"
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Sign Up Text */}

          <View className="flex-row justify-center bottom-6">
            <Text
              style={{ fontSize: hp(1.8) }}
              className="font-semibold text-neutral-500"
            >
              Have an account?{" "}
            </Text>
            <Pressable onPress={() => router.push("signIn")}>
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-bold text-indigo-500"
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
}
