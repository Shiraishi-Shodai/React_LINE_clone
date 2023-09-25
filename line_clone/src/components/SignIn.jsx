import React from 'react'
import { Button } from '@mui/material/'
import firebase from "firebase/compat/app";
import { auth } from '../firebase.js';

function SignIn() {

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider(); //Google認証プロバイダーが使えるようになる
    auth.signInWithPopup(provider); //グーグル認証のポップアップ
  }
  return (
    <div>
      <Button onClick={signInWithGoogle}>グーグルでログインする</Button>
    </div>
  )
}

export default SignIn