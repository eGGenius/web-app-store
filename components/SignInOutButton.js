import Link from 'next/link';
import { auth } from '../lib/firebase';

import { useContext } from 'react';
import { UserContext } from '../lib/context';

import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';

export default function SignInOutButton() {
  const { user, username } = useContext(UserContext);


  return (
    <main>
      {user ?
        <SignOutSection name={`${username}`} user={user} />
        :
        <SignInButton />
      }
    </main>
  );
}

// Sign in with Google button
function SignInButton() {

  return (
    <Link href={'/enter'}>
      <Button type="button" >
        <i className="pi pi-sign-out"></i>
        <span className="px-3">Sign in</span>
      </Button>
    </Link>
  );
}

// Sign out button
function SignOutSection({ name, user }) {
  return (
    <div className="flex align-items-center ">
      <Chip label={'@' + name} image={user?.photoURL || '/hacker.png'} style={{borderRadius: '14px'}} className="m-2"/>
      <Button icon="pi pi-sign-out" className="google p-2" aria-label="Sign in with Google" onClick={() => auth.signOut()}>
      </Button>
    </div>
  )
}
