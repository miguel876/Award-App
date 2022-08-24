import { Skeleton, Stack, Typography } from '@mui/material'
import useFetch from '../hooks/useFetch'
import { setFullName } from '../utils'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { amber, brown, grey } from '@mui/material/colors';
import Title from '../components/Title';
import Candidates from './Candidates';
import { useEffect } from 'react';

const CustomName = ({ children, color, ...rest }) => {
  return <Stack direction="row" sx={{ alignItems: 'center', pt: 1}}><WorkspacePremiumIcon sx={{color, pr: 1}}/><Typography {...rest} sx={{ textTransform: 'capitalize'}}>{children}</Typography></Stack>
}

export default function Ranking({ dashboard }) {
  const { data, loading } = useFetch('https://fakestoreapi.com/users?limit=3')
  
  return (
    <>
    <Title>Top Ranking</Title>
    {
      !loading ?
      <>
        <Stack direction="row" sx={{alignItems: 'flex-end', justifyContent: 'center', mt: 3}} spacing={3}>
          <Stack>
            <Typography variant="h5" sx={{textAlign: 'center'}}>2</Typography>
            <CustomName variant="h6" color={grey[400]}>{setFullName(data[1]?.name)}</CustomName>
          </Stack>
          <Stack>
            <Typography variant="h4" sx={{textAlign: 'center'}}>1</Typography>
            <CustomName variant="h5" color={amber[500]}>{setFullName(data[0]?.name)}</CustomName>
          </Stack>
          <Stack>
            <Typography variant="h6" sx={{textAlign: 'center'}}>3</Typography>
            <CustomName variant="h8" color={brown[400]}>{setFullName(data[2]?.name)}</CustomName>
          </Stack>
        </Stack>
        <Stack sx={{ mt: 5}}>
          {
            !dashboard && <Candidates limit={3} notitle />
          }
        </Stack>
      </>
      :
      <>   
        <Skeleton sx={{height: 70}} />
        <Skeleton sx={{height: 30}} />
      </>
 
    }
    
    </>
  )
}
