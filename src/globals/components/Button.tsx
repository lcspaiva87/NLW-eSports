import React, { ReactElement } from 'react'
import { Button as ButtonChakra, useTheme } from '@chakra-ui/react'

interface ButtonProps {
    title: string,
    icon?: ReactElement
    onClick?: () => void
}
export function Button({ title, icon, onClick }: ButtonProps) {
    const theme = useTheme()
    return (
        <ButtonChakra leftIcon={icon} bg={theme.styles.global.colors.brand.violet} onClick={() => onClick}>
            {title}
        </ButtonChakra>
    )
}