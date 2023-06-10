import Link from 'next/link';

export default async function Index() {
  return (
    <div>
      <h1>Homepage</h1>
      Go to <Link href="/shop">shop</Link>
      <p>Test UAT deploy</p>
    </div>
  )
}
