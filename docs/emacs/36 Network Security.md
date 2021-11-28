---
slug: Network-Security
---

Whenever Emacs establishes any network connection, it passes the established connection to the *Network Security Manager* (NSM). NSM is responsible for enforcing the network security under your control. Currently, this works by using the Transport Layer Security (TLS) features.

The `network-security-level` variable determines the security level that NSM enforces. If its value is `low`, no security checks are performed. This is not recommended, and will basically mean that your network connections can’t be trusted. However, the setting can be useful in limited circumstances, as when testing network issues.

If this variable is `medium` (which is the default), a number of checks will be performed. If as result NSM determines that the network connection might not be trustworthy, it will make you aware of that, and will ask you what to do about the network connection.

You can decide to register a permanent security exception for an unverified connection, a temporary exception, or refuse the connection entirely.

In addition to the basic certificate correctness checks, several TLS algorithm checks are available. Some encryption technologies that were previously thought to be secure have shown themselves to be fragile, so Emacs (by default) warns you about some of these problems.

The protocol network checks is controlled via the `network-security-protocol-checks` variable.

It’s an alist where the first element of each association is the name of the check, and the second element is the security level where the check should be used.

An element like `(rc4 medium)` will result in the function `nsm-protocol-check--rc4` being called like thus: `(nsm-protocol-check--rc4 host port status settings)`<!-- /@w -->. The function should return non-`nil` if the connection should proceed and `nil` otherwise.

Below is a list of the checks done on the default `medium` level.

### unable to verify a TLS certificate

If the connection is a TLS, SSL or STARTTLS connection, NSM will check whether the certificate used to establish the identity of the server we’re connecting to can be verified.

While an invalid certificate is often the cause for concern (there could be a Man-in-the-Middle hijacking your network connection and stealing your password), there may be valid reasons for going ahead with the connection anyway. For instance, the server may be using a self-signed certificate, or the certificate may have expired. It’s up to you to determine whether it’s acceptable to continue with the connection.

### a self-signed certificate has changed

If you’ve previously accepted a self-signed certificate, but it has now changed, that could mean that the server has just changed the certificate, but it might also mean that the network connection has been hijacked.

### previously encrypted connection now unencrypted

If the connection is unencrypted, but it was encrypted in previous sessions, this might mean that there is a proxy between you and the server that strips away STARTTLS announcements, leaving the connection unencrypted. This is usually very suspicious.

### talking to an unencrypted service when sending a password

When connecting to an IMAP or POP3 server, these should usually be encrypted, because it’s common to send passwords over these connections. Similarly, if you’re sending email via SMTP that requires a password, you usually want that connection to be encrypted. If the connection isn’t encrypted, NSM will warn you.

### Diffie-Hellman low prime bits

When doing the public key exchange, the number of prime bits should be high enough to ensure that the channel can’t be eavesdropped on by third parties. If this number is too low, Emacs will warn you. (This is the `diffie-hellman-prime-bits` check in `network-security-protocol-checks`).

### RC4 stream cipher

The RC4 stream cipher is believed to be of low quality and may allow eavesdropping by third parties. (This is the `rc4` check in `network-security-protocol-checks`).

### SHA1 in the host certificate or in intermediate certificates

It is believed that if an intermediate certificate uses the SHA1 hashing algorithm, then third parties can issue certificates pretending to be that issuing instance. These connections are therefore vulnerable to man-in-the-middle attacks. (These are the `signature-sha1` and `intermediate-sha1` checks in `network-security-protocol-checks`).

### SSL1, SSL2 and SSL3

The protocols older than TLS1.0 are believed to be vulnerable to a variety of attacks, and you may want to avoid using these if what you’re doing requires higher security. (This is the `ssl` check in `network-security-protocol-checks`).

If `network-security-level` is `high`, the following checks will be made, in addition to the above:

### 3DES cipher

The 3DES stream cipher provides at most 112 bits of effective security, which is considered to be towards the low end. (This is the `3des` check in `network-security-protocol-checks`).

### a validated certificate changes the public key

Servers change their keys occasionally, and that is normally nothing to be concerned about. However, if you are worried that your network connections are being hijacked by agencies who have access to pliable Certificate Authorities which issue new certificates for third-party services, you may want to keep track of these changes.

Finally, if `network-security-level` is `paranoid`, you will also be notified the first time NSM sees any new certificate. This will allow you to inspect all the certificates from all the connections that Emacs makes.

The following additional variables can be used to control details of NSM operation:

### `nsm-settings-file`

This is the file where NSM stores details about connections. It defaults to `~/.emacs.d/network-security.data`.

### `nsm-save-host-names`

By default, host names will not be saved for non-`STARTTLS` connections. Instead a host/port hash is used to identify connections. This means that one can’t casually read the settings file to see what servers the user has connected to. If this variable is `t`, NSM will also save host names in the `nsm-settings-file`.
