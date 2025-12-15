# Tableau des vulnérabilités identifiées

| ID  | Vulnérabilité | Localisation | Type | OWASP Top 10 | Gravité (CVSS) | Exploit possible |
|-----|---------------|--------------|------|---------------------|---------------|------------------|
| V01 | SQL Injection | `/api/login` | Injection SQL | A03:2021 – Injection | 9.8 (Critique) | `' OR '1'='1` |
| V02 | SQL Injection | `/api/transfer` | Injection SQL | A03:2021 – Injection | 9.8 (Critique) | Manipulation du paramètre `amount` |
| V03 | SQL Injection | `/api/profile/update` | Injection SQL | A03:2021 – Injection | 9.8 (Critique) | Injection via champ JSON |
| V04 | Mots de passe stockés en clair | Base de données | Cryptographie faible | A02:2021 – Cryptographic Failures | 9.1 (Critique) | Lecture DB / dump |
| V05 | Token prédictible | Authentification | Session management | A07:2021 – Identification & Auth Failures | 8.2 (Élevée) | Falsification de token |
| V06 | Absence d’expiration du token | Authentification | Session management | A07:2021 | 7.5 (Élevée) | Session persistante |
| V07 | Absence de contrôle d’autorisation | `/api/transfer` | Broken Access Control | A01:2021 – Broken Access Control | 9.0 (Critique) | Virement non autorisé |
| V08 | IDOR (accès aux comptes tiers) | `/api/transfer` | IDOR | A01:2021 – Broken Access Control | 8.8 (Élevée) | Modification du compte cible |
| V09 | Absence de rate limiting | `/api/login` | Brute force | A07:2021 | 7.5 (Élevée) | Attaque par force brute |
| V10 | CORS permissif (`*`) | Configuration globale | Mauvaise configuration | A05:2021 – Security Misconfiguration | 6.5 (Moyenne) | Exploitation via site tiers |
| V11 | HTTPS non forcé | Infrastructure | Transport non sécurisé | A02:2021 – Cryptographic Failures | 8.0 (Élevée) | Attaque MITM |
| V12 | Logs contenant des secrets | Console serveur | Logging excessif | A09:2021 – Security Logging Failures | 6.9 (Moyenne) | Fuite credentials |
| V13 | Utilisation du compte DB `root` | Configuration DB | Mauvaise configuration | A05:2021 – Security Misconfiguration | 9.0 (Critique) | Compromission totale DB |
| V14 | Absence de validation des entrées | Tous endpoints | Validation insuffisante | A03:2021 – Injection | 7.8 (Élevée) | Injections multiples |
| V15 | Messages d’erreur détaillés | API | Information disclosure | A09:2021 – Security Logging Failures | 5.5 (Moyenne) | Aide à l’attaquant |
