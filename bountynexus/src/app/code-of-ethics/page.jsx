import Head from 'next/head';

export default function CodeOfEthics() {
  const message = 'Code of Ethics';
  const message2 = '1. Integrity';
  const message3 = '2. Respect for Privacy';
  const message4 = '3. Compliance with Laws';
  const message5 = '4. Collaboration and Professionalism';
  const message6 = '5. Responsible Disclosure';
  const message7 = '6. Continuous Learning';
  // const message8 = '7. Governing Law';


  return (
    <div className="container">
      <Head>
        <title>Code Of Ethics</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">   

        <h1>{message}</h1>
        <br></br>
        <h2>{message2}</h2>
        <h3>All users are expected to act with the utmost integrity. This includes being truthful in your findings and respectful in your communications with companies.</h3>
        
        <h2>{message3}</h2>
        <h3>Respect the privacy and confidentiality of all systems and users. Accessing or disclosing sensitive information without proper authorization is strictly prohibited and may lead to legal consequences.</h3>

        <h2>{message4}</h2>
        <h3>All users must comply with applicable local, national, and international laws. Familiarize yourself with relevant laws regarding cybersecurity and ethical hacking before engaging with the platform.</h3>
        <h2>{message5}</h2>
        <h3>Engage constructively with companies and other researchers. Constructive criticism and collaboration promote a safer digital environment. Maintain a professional demeanor in all interactions, and avoid inflammatory language.</h3>
        <h2>{message6}</h2>
        <h3>Follow responsible disclosure practices. Allow companies sufficient time to address the vulnerabilities before any public disclosure. This period should typically be at least 90 days unless otherwise agreed upon.</h3>
        <h2>{message7}</h2>
        <h3>Stay informed about the latest security trends and best practices. Commitment to ongoing education helps enhance your skills and contributes to a safer online community.</h3>
        {/* <h2>{message8}</h2>
        <h3>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Bounty Nexus operates, without regard to its conflict of law principles.</h3> */}
      </main>
    </div>
  );
}