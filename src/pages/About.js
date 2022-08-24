import { Typography } from '@mui/material'
import React from 'react'
import Title from '../components/Title'

export default function About({ intro }) {
  return (
    <>
    <Title>Sobre o Jogo</Title>
    <Typography sx={{ mt: 2}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut justo massa, convallis vel nunc posuere, tincidunt semper elit. Curabitur mattis tortor id nibh fermentum venenatis.
    </Typography>
    {
      !intro &&
      <Typography sx={{ mt: 2}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut justo massa, convallis vel nunc posuere, tincidunt semper elit. Curabitur mattis tortor id nibh fermentum venenatis.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut justo massa, convallis vel nunc posuere, tincidunt semper elit. Curabitur mattis tortor id nibh fermentum venenatis.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut justo massa, convallis vel nunc posuere, tincidunt semper elit. Curabitur mattis tortor id nibh fermentum venenatis.

      </Typography>
    }
    </>
  )
}
