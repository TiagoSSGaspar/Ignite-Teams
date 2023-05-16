
import { styled } from "nativewind";
import { UsersThree } from "phosphor-react-native";
import { Text, TouchableOpacity } from "react-native";

const containerStyles = "w-full flex-row items-center h-[90px] bg-gray-500 rounded-md p-6 mt-3"
export const Container = styled(TouchableOpacity, containerStyles)

const titleStyles = "text-center text-base font-normal text-gray-200"
export const Title = styled(Text, titleStyles)

const iconStyles = "mr-5"
export const Icon = styled(UsersThree, iconStyles)


