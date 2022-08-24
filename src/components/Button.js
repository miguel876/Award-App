import { Typography } from '@mui/material'
import { StyledAddIcon, StyledIconButton } from '../styles/button.style'

export default function Button({ children, sx, variant, color, ...rest}) {
  return (
    <StyledIconButton startIcon={<StyledAddIcon />} variant={variant ? variant : "contained"} color={color ? color : "primary"} {...rest}>
      <Typography {...sx}>{ children }</Typography>
    </StyledIconButton>
  )
}
