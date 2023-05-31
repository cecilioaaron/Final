import { getFirestore } from 'firebase/firestore' //almacenamiento de firebase
import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { FirestoreProvider, useFirebaseApp } from 'reactfire'

export const Main = () => {
  return (
    <main>
      <Outlet />
    </main>  )
}
