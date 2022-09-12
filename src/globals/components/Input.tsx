import { Input as InputChakra, Stack, Text } from '@chakra-ui/react'
interface InputProps {
    label: string;
    placeholder: string;
    size: 'xs' | 'sm' | 'md' | 'lg';
    spacing: number
}
export function Input({ label, placeholder, size, spacing }: InputProps) {
    <Stack spacing={spacing}>
        <Text>{label}</Text>
        <InputChakra placeholder={placeholder} size={size} />
    </Stack>
}