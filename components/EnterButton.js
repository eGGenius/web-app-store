import { auth, googleAuthProvider } from '../lib/firebase';

import { useContext } from 'react';
import { UserContext } from '../lib/context';

import { Button } from 'primereact/button';

export default function EnterButton() {
  const { user } = useContext(UserContext);

  return (
    <main>
      {user ? 
        <SignOutButton /> 
        : 
        <SignInButton />
      }
    </main>
  );
}

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
      <Button className="google p-2" aria-label="Sign in with Google" onClick={signInWithGoogle} type="button" >
          <i className="pi pi-google px-2"></i>
          <span className="px-3">Sign in</span>
      </Button>
  );
}

// Sign out button
function SignOutButton() {
  return (
    <Button label="Sign Out" icon="pi pi-sign-out" className="google p-2" aria-label="Sign in with Google" onClick={() => auth.signOut()}>
    </Button>)
}
