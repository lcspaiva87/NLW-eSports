import { Box, Image, Link, Text, useTheme } from "@chakra-ui/react";
interface gameLinksProps {
  gameName: string,
  announcement: string,
  src: string;
  alt: string,

}
export function GamesLinks({ src, alt, announcement, gameName }: gameLinksProps) {
  const theme = useTheme()
  return (
    <Link as='a' position='relative' borderRadius='8px' overflow='hidden'>
      <Image src={src} alt={alt} />
      <Box w='100%' pt='16px' pb='4px' position='absolute' padding='16px 0px 4px 4px' bg={theme.styles.global.colors.brand.info} left='0px' right='0px' bottom='0px'>
        <Text as='strong' fontSize={16} fontWeight='bold' display='block'> {gameName}  </Text>
        <Text as='span' fontSize='14px'>{announcement}</Text>
      </Box>
    </Link>
  )
}