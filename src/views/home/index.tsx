import { Box, Flex, Grid, Image, Link, Stack, Text, useTheme } from "@chakra-ui/react"
import Head from "next/head"
import { memo } from "react"
import { Button } from "../../globals/components/Button"
import { MagnifyingGlassPlus } from "phosphor-react";

function MenuView() {
  return (
    <Childre />
  )
}
const Childre = () => {
  const styles = {
    backgroundImage: 'linear-gradient(89.86deg, rgba(149, 114, 252, 1), rgba(67, 231, 173, 1), rgba(225, 213, 93, 1))',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text'
  }
  const theme = useTheme()
  console.log(theme.styles.global.colors.brand.modal)
  return (
    <Flex justifyContent='center' flexDirection='column' maxWidth='1344px' m='auto' alignItems='center' marginTop='5rem'>
      <Head>
        <title>Esports | nlw </title>
      </Head>
      <Image src='/Logo.svg' alt='Esports nwl' />
      <Text
        as='h1'
        fontSize='3.75rem'
        fontStyle='normal'
        fontWeight={900}
        mt='5rem'
      >
        Seu <Text as='span' style={styles}> Duo</Text> está aqui .
      </Text>
      <Grid gap={6} gridTemplateColumns=' repeat(6, minmax(0, 1fr))' mt='4rem'>

        <Link as='a' position='relative' borderRadius='8px' overflow='hidden'>
          <Image src='/game6.png' alt='game1' />
          <Box w='100%' pt='16px' pb='4px' position='absolute' padding='16px 0px 4px 4px' bg={theme.styles.global.colors.brand.info} left='0px' right='0px' bottom='0px'>
            <Text as='strong' fontSize={16} fontWeight='bold' display='block'>Liga das lendas</Text>
            <Text as='span' fontSize='14px'>4 anucios</Text>
          </Box>
        </Link>
        <Link>
          <Image src='/game2.png' alt='game1' />
        </Link>
        <Link>
          <Image src='/game3.png' alt='game1' />
        </Link>
        <Link>
          <Image src='/game4.png' alt='game1' />
        </Link>
        <Link>
          <Image src='/game5.png' alt='game1' />
        </Link>
        <Link>
          <Image src='/game6.png' alt='game1' />
        </Link>
      </Grid>
      <Box pt={1} bg={styles.backgroundImage} placeSelf='stretch' borderRadius={8} overflow='hidden' mt={8}>
        <Box px={8} py={6} bg={theme.styles.global.colors.brand.footer} display='flex' justifyContent='space-between' alignItems='center'>
          <Box>
            <Text as='strong' fontWeight='black' display='block' fontSize='1.5rem'>Não encontrou seu duo?</Text>
            <Text as='span' color={theme.styles.global.colors.brand.ads}>Publique um anúncio para encontrar novos players!</Text>
          </Box>
          <Button
            title='Publicar anúncio'
            py={2}
            px={4}
            borderRadius={3}
            icon={<MagnifyingGlassPlus size={24} />}
            display='flex'
            alignItems='center'
            gap={3}
          />
        </Box>
      </Box>
    </Flex >
  )
}

export default memo(MenuView)