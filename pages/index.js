import React from 'react';
import dynamic from 'next/dynamic';
import Spinner from '../components/section/Spinner';

export default function Home() {
  const Route = dynamic(() => import('./AllPage'), {
    loading: () => <>
      <Spinner />
    </>
  })
  return (
    <>
      <Route />
    </>

  )
}
