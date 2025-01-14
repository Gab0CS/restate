import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className='font-bold text-2xl my-10 font-rubik'>Welcome to restate</Text>
      <Link href="/sing-in">
        Sign in
      </Link>
      <Link href="/explore">
        Explore
      </Link>
      <Link href="/profile" className="">
        Profile
      </Link>
      <Link href="/properties/1">
        Sign in
      </Link>
    </View>
  );
}
