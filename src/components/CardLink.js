import { StyledAddIcon, StyledIconButton } from '../styles/button.style';
import CustomLink from './CustomLink';

export default function CardLink({ children, ...rest }) {
  return (
    <StyledIconButton startIcon={<StyledAddIcon />} variant="contained" color="primary">
      <CustomLink {...rest}>{ children }</CustomLink>
    </StyledIconButton>
  )
}
