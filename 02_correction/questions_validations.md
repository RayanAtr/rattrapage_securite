# Questions de validation – Sécurité des systèmes

Cette section répond explicitement aux questions de validation demandées
dans l’énoncé, afin de démontrer la compréhension des concepts de sécurité
au-delà de la simple implémentation technique.

---

## 1. Comment tester la correction d’une SQL Injection ?

La correction d’une SQL Injection peut être testée de plusieurs manières :

### a) Test manuel
- Envoyer des payloads classiques d’injection SQL (ex : `' OR '1'='1`)
- Vérifier que :
  - l’authentification échoue,
  - aucune donnée n’est retournée,
  - aucune erreur SQL n’est exposée.

### b) Test automatisé
- Écrire des tests de sécurité automatisés (ex : avec Jest + Supertest)
- Vérifier que l’API retourne un code HTTP 401 ou 400
- Intégrer ces tests dans une CI/CD pour éviter les régressions.

### c) Analyse du code
- Vérifier l’utilisation exclusive de requêtes préparées
- S’assurer qu’aucune concaténation SQL n’est présente.

 Une correction est considérée valide si l’injection ne modifie plus
la logique de la requête SQL.

---

## 2. Quelle est la différence entre authentification et autorisation ?

### Authentification
L’authentification consiste à  vérifier l’identité d’un utilisateur .

Exemples :
- Login / mot de passe
- Token JWT
- Certificat

---

### Autorisation
L’autorisation consiste à  vérifier les droits d’un utilisateur authentifié 
sur une ressource ou une action.

Exemples :
- Droit d’effectuer un virement
- Accès à un compte spécifique
- Rôle administrateur ou utilisateur

---

### Résumé

| Concept | Objectif |
|------|---------|
| Authentification | Vérifier l’identité |
| Autorisation | Vérifier les permissions |

---

## 3. Pourquoi utiliser bcrypt plutôt que SHA-256 pour les mots de passe ?

SHA-256 est une fonction de hachage  rapide , conçue pour l’intégrité des données,
mais  inadaptée au stockage des mots de passe .

### Problèmes de SHA-256
- Trop rapide → vulnérable aux attaques par brute force
- Sensible aux attaques par GPU / rainbow tables
- Pas de gestion native du sel

---

### Avantages de bcrypt
- Fonction de hachage  lente et adaptative 
- Intègre automatiquement un  sel 
- Paramètre de coût ajustable (work factor)
- Résistant aux attaques par force brute

bcrypt est donc  spécifiquement conçu pour le stockage sécurisé
des mots de passe , contrairement à SHA-256.

---

## 4. Comment gérer les secrets en production ?

Les secrets (mots de passe, clés API, clés JWT) ne doivent  jamais 
être stockés en clair dans le code source.

### Bonnes pratiques
- Utiliser des  variables d’environnement 
- Ne jamais versionner les fichiers `.env`
- Séparer les secrets par environnement (dev, test, prod)
- Restreindre les accès aux secrets

### Solutions possibles
- Variables d’environnement système
- Secret manager (AWS Secrets Manager, Vault, etc.)
- Rotation régulière des secrets

Une bonne gestion des secrets réduit fortement le risque
de compromission globale du système.

---

## Conclusion

Ces réponses démontrent la compréhension des concepts fondamentaux
de la sécurité applicative et justifient les choix techniques
mis en œuvre dans la correction.
