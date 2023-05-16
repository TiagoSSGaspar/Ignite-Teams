
import { styled } from "nativewind";
import { Text, View } from "react-native";

const containerStyles = "w-full my-8 mx-0"
export const Container = styled(View, containerStyles)

const titleStyles = "text-center text-2xl font-bold text-white"
export const Title = styled(Text, titleStyles)

const subTitleStyles = "text-center text-base font-normal text-gray-300"
export const SubTitle = styled(Text, subTitleStyles)


