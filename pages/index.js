import React from 'react';
import dynamic from 'next/dynamic';

const Route = dynamic( () =>import('./AllPage'),{
  loading:() =><>
  <h1 className="text-center text-9xl text-red-500">Loading All</h1>
  </>
})


export default function Home() {

  return (
   <>
   <Route />
   </>

  )
}
