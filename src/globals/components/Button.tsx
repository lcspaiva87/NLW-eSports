import React, { ReactElement } from 'react'
import { Button as ButtonChakra, useTheme, ButtonProps as ButtonPropsChakra } from '@chakra-ui/react'

interface ButtonProps extends ButtonPropsChakra {
    title: string,
    icon?: ReactElement
    onClick?: () => void
}
export function Button({ title, icon, onClick }: ButtonProps) {
    const theme = useTheme()
    return (
        <ButtonChakra leftIcon={icon} bg={theme.styles.global.colors.brand.violet} _hover={{ background: '#6444ad;' }} onClick={() => onClick}>
            {title}
        </ButtonChakra>
    )
}