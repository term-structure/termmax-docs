# 🖥️ Frontend Security

TermMax implements comprehensive frontend security measures to protect users from supply chain attacks, unauthorized modifications, and malicious code injection. Our multi-layered approach ensures the integrity and authenticity of the user interface.



### Build Authentication System

#### SHA Verification Process

TermMax uses build-attestation with a unique SHA for every frontend release. The current build SHA is shown in the application UI for transparency, while the authoritative reference is maintained internally. We perform frequent automated integrity checks to compare the deployed SHA against the expected value; any detected drift triggers immediate alerts to the security team for investigation and remediation.

#### ECS SHA Drift Detection&#x20;

Our monitoring system continuously tracks the SHA values to detect any unauthorized changes or drift from the expected build version. This real-time monitoring ensures that only verified, authentic versions of the frontend are served to users.

#### Docker Image Validation

For each container build, the pushed image is automatically scanned for known vulnerabilities, malware indicators, and base-image policy compliance. Only images with no disqualifying findings are approved for release, and only approved images are eligible for deployment.<br>

### Content Integrity Protection

#### Content Security Policy (CSP)&#x20;

Strict Content Security Policy headers prevent unauthorized script execution and protect against cross-site scripting (XSS) attacks. The CSP configuration limits resource loading to trusted sources only.<br>

### Continuous Monitoring

#### Automated Security Scanning&#x20;

The frontend undergoes regular automated security scans integrated into our CI/CD pipeline. These scans identify potential vulnerabilities before deployment.

#### Real-Time Integrity Checks&#x20;

Our monitoring systems perform continuous integrity verification, immediately alerting the security team if any unauthorized modifications are detected.

#### Content Security Policy (CSP)

We enforce a restrictive, allowlist-based CSP that blocks inline scripts/styles and limits external sources to trusted origins. Policy violations are monitored, and actionable reports inform rapid remediation.

#### Cross-Site Scripting (XSS) Prevention

We prevent XSS through context-aware output encoding and strict input handling at all trust boundaries, complemented by secure cookies and a hardened CSP. These controls reduce the risk of script injection and data exposure.

<br>
