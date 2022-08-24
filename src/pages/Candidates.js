import React from 'react'
import useFetch from '../hooks/useFetch'
import Table from '../components/Table';
import Title from '../components/Title';

export default function Candidates({ limit, notitle }) {
  const { data, loading } = useFetch(`https://fakestoreapi.com/users?${limit ? `limit=${limit}` : ''}`)

  const tableData = {
    columns: ['Posição', 'Nome', 'Email'],
    data,
    loading
  }

  return (
    <>
      {!notitle && <Title>Candidatos</Title> }
      <Table {...tableData} />
    </>
    
  )
}
