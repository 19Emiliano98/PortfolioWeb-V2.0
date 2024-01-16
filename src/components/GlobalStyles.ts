export const ThemeColors = {
  backgroundColor: '#171624',
  backgroundColorLight: '#32304F',
  fontColor: '#B7C0DA'
}

export const TypographyBody = {
  color: ThemeColors.fontColor,
  fontSize: { sm: '1.4rem', xs: '0.83rem' },
  fontWeight: '400'
}

export const TypographyH2 = {
  color: ThemeColors.fontColor,
  fontSize: { sm: '2.5rem', xs:'1.9rem'},
  fontWeight: '600'
}

export const TitularIcons = {
  fontSize: { sm: '2.8rem', xs: '2.2rem' }
}

export const TypographyH5 = {
  color: ThemeColors.fontColor,
  fontSize: '1.6rem',
  fontWeight: '600'
}

export const TypographyMiniCards = {
  fontSize: '1.3rem',
  color: '#F7F7EB'
}

export const ButtonStyles = {
  backgroundColor: '#B7C0DA',
  fontSize: '1.3rem',
  color: 'black',
  fontWeight: '700',
  ':hover':{
    backgroundColor: '#D0DAF7', 
  }
}

export const SocialButtonStyles = {
  width: 180, height: 65,
  border: `2px solid ${ThemeColors.fontColor}`,
  borderRadius: '15px',
  fontSize: { sm: '2.3rem', xs: '1.7rem'},
  backgroundColor: ThemeColors.backgroundColor, textTransform: 'none'
}

export const SkillsCardStyles = {
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  width: 200, height: 65,
  borderRadius: '10px',
  backgroundColor: ThemeColors.backgroundColorLight
}