import React from 'react';
import dynamic from 'next/dynamic';

export default function Home() {
  const Route = dynamic(() => import('./AllPage'), {
    loading: () => <>
      <h1 className="text-center text-9xl text-red-500">Loading All.....</h1>
    </>
  })
  return (
    <>
      <Route />
    </>

  )
}
