import React from 'react'
import { Wrapper } from './styled'
import Button from '../../common/Button'

const Navigation = () => {
    return (
        <Wrapper>
            <Button title="Lista psów"/>
            <Button title="Wyszukiwarka psów" />
        </Wrapper>
    )
}

export default Navigation