import React from 'react'
import { StyledButton } from './styled'

const Button = ({ title }) => {
    return (
        <StyledButton>
            {title}
        </StyledButton>
    )
}

export default Button