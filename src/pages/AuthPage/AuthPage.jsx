import React from 'react'
import SignUpForm from '../SignUpForm/SignUpForm'
import LoginForm from '../LoginForm/LoginForm'

export default function AuthPage({setUser}) {
  return (
    <main>
    <div>AuthPage</div>
    <SignUpForm setUser={setUser}/>
    <LoginForm setUser={setUser}/>
    </main>
  );
}
