# Checklist OWASP ASVS – SecureBank

Cette checklist évalue la conformité de l’application SecureBank
au référentiel  OWASP ASVS – Niveau 2 , adapté à une application bancaire.

---

## V1 – Architecture et Design

- [x] Séparation frontend / backend
- [x] Défense en profondeur
- [x] Secrets stockés hors du code
- [x] Configuration sécurisée par environnement

---

## V2 – Authentification

- [x] Hash des mots de passe avec bcrypt
- [x] Authentification basée sur JWT signé
- [x] Expiration des sessions
- [x] Protection contre le brute force

---

## V3 – Gestion des sessions

- [x] Tokens non prédictibles
- [x] Validation côté serveur
- [x] Révocation possible
- [x] Durée de vie limitée

---

## V4 – Accès et autorisation

- [x] Contrôles d’accès stricts
- [x] Protection contre les IDOR
- [x] Principe du moindre privilège

---

## V5 – Validation des entrées

- [x] Requêtes préparées
- [x] Validation côté serveur
- [x] Protection contre le mass assignment

---

## Conclusion

L’application atteint un  niveau de conformité satisfaisant OWASP ASVS Niveau 2 
pour une plateforme bancaire en ligne.
