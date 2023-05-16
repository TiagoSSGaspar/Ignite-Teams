
import { styled } from "nativewind";
import { UsersThree } from "phosphor-react-native";
import { View } from "react-native";

const containerStyles = "flex-1 p-6 bg-gray-600"
export const Container = styled(View, containerStyles)

const contentStyles = "flex-1 p-6 justify-center"
export const Content = styled(View, contentStyles)

const iconStyles = "mr-5 self-center"
export const Icon = styled(UsersThree, iconStyles)
