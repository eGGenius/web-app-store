import Link from 'next/link';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function Custom404() {
  return (
    <div className=" p-4">
      <Card>
        <h1>404 - This page does not seem to exist...</h1>
        <Link href="/">
          <Button label="Go home"></Button>
        </Link>
      </Card>
    </div>
  );
}
