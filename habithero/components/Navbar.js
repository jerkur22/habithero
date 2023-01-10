import Link from "next/link";

function Navbar(props) {
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </div>
  );
}

export default Navbar;
