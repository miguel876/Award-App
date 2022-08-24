import React, { useMemo } from 'react'
import Title from '../components/Title'
import useFetch from '../hooks/useFetch'
import { useParams, useLocation } from 'react-router-dom'
import { setFullName } from '../utils'
import { Divider, Skeleton, Stack, styled, Typography } from '@mui/material'
import Button from '../components/Button'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const width = 160
const UserIcon = styled('div')({
  height: width,
  width,
  backgroundColor: 'grey',
  borderRadius: '50%'
})

const StyledTypography = styled(Typography)((props) => ({
  color: props.theme.palette.accent.dark,
  fontSize: 10
}))


export default function CandidateDetail() {
  const { id } = useParams()
  const { state } = useLocation()

  const { ranking } = state

  const { data: { email, name, phone, username }, loading } = useFetch(`https://fakestoreapi.com/users/${id}`)

  const profileColumns = useMemo(() => ([
    {
      label: 'Email',
      value: email
    }, 
    {
      label: 'Telemóvel',
      value: phone
    },
    {
      label: 'Username',
      value: username
    }]), [email, phone, username])

  return (
    <Stack sx={{ mt: 2 }} direction="row">
      <Stack sx={{ width }}>
        {
          !loading ?
            <>
              <UserIcon />
              <Title sx={{ textTransform: 'capitalize', textAlign: 'center'}}>{setFullName(name)}</Title>
              <Typography sx={{ textAlign: 'center' }}>Ranking</Typography>
              <Typography sx={{ textAlign: 'center' }}>{ranking}º</Typography>
            </>
          :
          <>
            <Skeleton variant="circular" sx={{ height: width, width}}/>
            <Skeleton sx={{ height: 100}}/>
            <Skeleton sx={{ height: 20}}/>
            <Skeleton sx={{ height: 20}}/>
          </>
        }
      </Stack>
      <Stack sx={{ pl: 10, width: 1}}>
      <Stack direction="row" sx={{ width: 1, alignContent: 'center', justifyContent: 'space-between', alignItems: 'center'}}>
        <Title sx={{ textTransform: 'capitalize', textAlign: 'center'}}>Perfil</Title>
        <Stack direction="row" spacing={3}>
          <Button startIcon={<MailOutlineIcon />}><Typography variant="subtitle1">Enviar Mensagem</Typography></Button>
          <Button startIcon={<WarningAmberIcon />} variant="outlined"><Typography variant="subtitle1">Reportar Abuso</Typography></Button>
        </Stack>
      </Stack>
      <Stack sx={{ width: 1, mt: 2}}>
        {
          profileColumns.map(({label, value}) => ( 
            <>
            <Divider sx={{ mt: 2}}><StyledTypography>{label}</StyledTypography></Divider>
            { 
              !loading ? 
              <Typography sx={{ textAlign: 'center', mt: 2 }}>{value}</Typography>
              :
              <Skeleton sx={{ height: 40, mt: 1  }}/>
            }
            </>
          ))
        }
      </Stack>
      </Stack>
    </Stack>
  )
}
