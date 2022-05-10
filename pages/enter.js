import { auth, googleAuthProvider } from '../lib/firebase';

import { useContext } from 'react';
import { UserContext } from '../lib/context';

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

export default function Enter() {
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
    <div className=" p-4">
        <Card>
            <Button className="google p-2" aria-label="Sign in with Google" onClick={signInWithGoogle}>
                <i className="pi pi-google px-2"></i>
                <span className="px-3">Sign in with Google</span>
            </Button>
            </Card>
        </div>
  );
}

// Sign out button
function SignOutButton() {
  return <div className=" p-4">
    <Card>
      <Button label="Sign Out" icon="pi pi-sign-out" className="google p-2" aria-label="Sign in with Google" onClick={() => auth.signOut()}>
      </Button>
    </Card>
  </div>
}
