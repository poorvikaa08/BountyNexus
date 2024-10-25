import Head from 'next/head';

export default function DisclosureGuidelines() {
  const message = 'Disclosure Guidelines';
  const message2 = '1. Scope of Testing';
  const message3 = '2. Reporting Procedures';
  const message4 = '3. Vulnerability Severity';
  const message5 = '4. No Exploitation';
  const message6 = '5. Follow-Up';
  const message7 = '6. Feedback and Recognition';
  // const message8 = '7. Governing Law';


  return (
    <div className="container">
      <Head>
        <title>Disclosure Guidelines</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">   

        <h1>{message}</h1>
        <br></br>
        <h2>{message2}</h2>
        <h3>Only conduct testing on systems and applications that you have explicit authorization to test. Unauthorized testing is illegal and strictly prohibited.</h3>
        
        <h2>{message3}</h2>
        <h3>Submit vulnerability reports through the designated reporting portal. Ensure your report includes:<br></br>

            - A comprehensive description of the vulnerability.<br></br>
            - Detailed steps that can be followed to reproduce the issue.<br></br>
            - Any evidence, such as screenshots or logs, to support your findings.</h3>

        <h2>{message4}</h2>
        <h3>Classify vulnerabilities according to their severity:<br></br>

            - Critical: Severe impact, immediate action required.<br></br>
            - High: Significant impact but not immediately exploitable.<br></br>
            - Medium: Moderate impact; requires timely resolution.<br></br>
            - Low: Minor issues with limited impact.</h3>
        <h2>{message5}</h2>
        <h3>Do not exploit vulnerabilities for personal gain, harm, or disruption. Any exploitation will result in immediate account suspension and possible legal action.
        </h3>
        <h2>{message6}</h2>
        <h3>Be available for follow-up questions or clarifications from the company regarding your submission. Timely responses facilitate effective resolution and demonstrate professionalism.</h3>
        <h2>{message7}</h2>
        <h3>You may receive feedback on your submissions, and exceptional contributions may be publicly recognized with your consent. This encourages a culture of respect and acknowledgment within the security community.
        </h3>
        {/* <h2>{message8}</h2>
        <h3>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Bounty Nexus operates, without regard to its conflict of law principles.</h3> */}
      </main>
    </div>
  );
}