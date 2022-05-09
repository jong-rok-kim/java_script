import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <strong><u><h1>Introduce myself</h1></u></strong>
      <body>
      <h2>My name is jongrok-kim</h2>
      <p>age : 22</p>
      <p>hobby : play basketball</p>
      <p>motherland : jeonju</p>
      <br></br>
      <br></br>
      <br></br></body>
      <h3>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h3>
    </>
  );
}