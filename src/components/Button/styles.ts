
import { styled } from "nativewind";
import { Text, TouchableOpacity } from "react-native";


const containerStyles = "flex-1 max-h-[56px] min-h-[56px] justify-center rounded-md items-center"
export const Container = styled(TouchableOpacity, containerStyles)

const titleStyles = "text-base font-bold text-white"
export const Title = styled(Text, titleStyles)
