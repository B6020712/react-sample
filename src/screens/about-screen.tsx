import React from 'react'
import { ScrollView, Box, Text, VStack, Icon, Image, useColorModeValue } from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import NavBar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'

const AboutScreen = () => {
    return (
        <AnimatedColorBox 
            flex={1}
            bg={useColorModeValue('warmGray.50', 'warmGray900')}
            w="full"
        >
            {/* <Masthead title="About this app" image={require('@/assets/icon.png')}> */}
                <NavBar />
            {/* </Masthead> */}
            <ScrollView 
                borderTopLeftRadius="20px" 
                borderTopRightRadius="20px"
                bg={useColorModeValue('warmGray.50', 'primary.900')}
                mt="-20"
                pt="30px"
                p={4}
            >
                <VStack flex={1} space={4}>
                    <Box alignItems="center">
                        {/* <Image 
                            source={require('../assets/icon.png')} 
                            borderRadius="full"
                            resizeMode="cover"
                            w={120}
                            h={120}
                            alt="author"
                        /> */}
                    </Box>
                    <Text fontSize="md" w="full">This is my first React Native following the tutorial of DevAsLife channel on youtube</Text>
                    <LinkButton 
                        colorScheme="red" 
                        size="lg"
                        borderRadius="full"
                        href="https://www.youtube.com/watch?v=k2h7usLLBhY"
                        leftIcon={
                            <Icon 
                                as={Feather} 
                                name="youtube" 
                                size="sm" 
                                opacity={0.5} 
                            />
                        }
                    >
                        Go to his tutorial vdo
                    </LinkButton>
                    <LinkButton 
                        colorScheme={useColorModeValue('blue', 'darkBlue')} 
                        size="lg"
                        borderRadius="full"
                        href="https://www.youtube.com/@devaslife"
                        leftIcon={
                            <Icon 
                                as={Feather} 
                                name="twitter" 
                                size="sm" 
                                opacity={0.5} 
                            />
                        }
                    >
                        Go to his channel on youtube
                    </LinkButton>
                    <LinkButton 
                        colorScheme='purple' 
                        size="lg"
                        borderRadius="full"
                        href="https://www.inkdrop.app/"
                        leftIcon={
                            <Icon 
                                as={Feather} 
                                name="external-link" 
                                size="sm" 
                                opacity={0.5} 
                            />
                        }
                    >
                        https://www.inkdrop.app/
                    </LinkButton>
                    <Text fontSize="md" w="full">Are you new to React Native ? Me too, eiei.</Text>
                </VStack>
            </ScrollView>
        </AnimatedColorBox>
    )
}

export default AboutScreen