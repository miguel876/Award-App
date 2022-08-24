import { TableBody, TableCell, Table as T, TableContainer, TableHead, TableRow, Stack, Typography, Paper, styled, Skeleton } from '@mui/material'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { setFullName } from '../utils'
import { useNavigate } from "react-router-dom";

const StyledPaper = styled(Paper)({
    boxShadow: 'none'
  })

export default function Table({ ...tableData }) {
    const navigate = useNavigate();
    const { data, columns, loading } = tableData;

  return (
    <TableContainer component={StyledPaper}>
      <T sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              !loading ?
                columns?.map((val) => <TableCell key={val}>{ val }</TableCell>)
              :
              <TableCell colSpan={3}>
                <Skeleton  sx={{height: 50 }} />
              </TableCell>
            }
              
          </TableRow>
        </TableHead>
        <TableBody>
          {
            !loading ?
            data?.map(({ id, name, username, email }, i) => (
              <TableRow
                  hover 
                  key={username}
                  sx={{ cursor: 'pointer', '&:last-child td, &:last-child th': { border: 0 } }}
                  onClick={() => navigate(`/candidates/candidate/${id}`, { state: {ranking: i + 1 }})}
              >
                <TableCell component="th" scope="row">
                  <Stack direction="row">
                  { i < 3 && <WorkspacePremiumIcon sx={{ pr: 1 }} />}
                  { i + 1 }
                  </Stack>
                  
                </TableCell>
                <TableCell><Typography sx={{ textTransform: 'capitalize', fontSize: 12 }}>{setFullName(name)}</Typography></TableCell>
                <TableCell>{email}</TableCell>
              </TableRow>
            ))
            :
            <TableRow >
              <TableCell colSpan={3}>
              <Skeleton  sx={{height: 50 }} />
              <Skeleton  sx={{height: 50 }} />
              <Skeleton  sx={{height: 50 }} />
              <Skeleton  sx={{height: 50 }} />
              <Skeleton  sx={{height: 50 }} />
              </TableCell>
            </TableRow>
          }
        </TableBody>
      </T>
    </TableContainer>
    
  )
}
