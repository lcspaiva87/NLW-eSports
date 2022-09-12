import { Box, Flex, Image, Spacer, Stack, Text, theme, useTheme } from "@chakra-ui/react"
import { memo } from "react"

function MenuView() {
  return (
    <Childre />
  )
}
const Childre = () => {
  const theme = useTheme()
  const styles = {
    backgroundImage: 'linear-gradient(rgba(149, 114, 252, 1), rgba(67, 231, 173, 1), rgba(225, 213, 93, 1))',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text'
  }
  return (
    <Flex justifyContent='center' alignContent='center' w='100vw' h='100vh'>
      <Flex alignItems='center' >
        <Flex flexDirection='column' alignItems='center'>
          <Stack spacing={10} >
            <Image src='/Logo.svg' alt='Esports nwl' />
            <Flex flexDirection='column'>
              <Text
                as='h1'
                fontSize='32px'
                fontStyle='normal'
                fontWeight={900}
              >
                Seu <Text as='span' style={styles}> Duo</Text> está aqui .
              </Text>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default memo(MenuView)