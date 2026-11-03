# 🌐 DNS Security

TermMax implements robust DNS security measures to protect users from domain-based attacks and ensure secure access to our platform. Our DNS infrastructure is designed to prevent spoofing, cache poisoning, and man-in-the-middle attacks.<br>

### DNSSEC Implementation

#### DNS Security Extensions (DNSSEC)

TermMax domains are signed with DNSSEC, enabling cryptographic validation of DNS records by resolvers. This helps prevent DNS spoofing and cache-poisoning attacks that could redirect users to malicious sites.

#### Digital Signature Validation

All DNS records are DNSSEC-signed, enabling validating resolvers to cryptographically verify the authenticity and integrity of DNS responses. This helps ensure users are directed to the legitimate TermMax platform and reduces the risk of DNS spoofing and cache-poisoning.<br>

### Domain Protection Measures

#### Domain Monitoring&#x20;

We proactively monitor for suspicious or look-alike domain registrations (including typosquatting) and phishing sites targeting TermMax. When identifying the unknown registrations, the team will immediately survey and respond.

#### Secure DNS Resolvers

We are using DNS resolvers that perform DNSSEC validation. This helps protect against DNS spoofing and cache-poisoning attacks.
