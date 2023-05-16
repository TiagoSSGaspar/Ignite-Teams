
import { styled } from "nativewind";
import { CaretLeft } from 'phosphor-react-native';
import { Image, TouchableOpacity, View } from "react-native";

const containerStyles = "w-full flex-row items-center justify-center"
export const Container = styled(View, containerStyles)

const logoStyles = "w-[46px] h-[55px]"
export const Logo = styled(Image, logoStyles)

const backButtonStyles = "flex-1"
export const BackButton = styled(TouchableOpacity, backButtonStyles)

export const BackIcon = styled(CaretLeft)
