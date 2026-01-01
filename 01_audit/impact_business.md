# Impact Business – Vulnérabilités Critiques SecureBank

## Contexte général

SecureBank est une banque en ligne gérant :
- des  données personnelles sensibles  (identité, coordonnées)
- des  données financières  (soldes, transactions)
- environ  10 000 clients actifs 


Ce document analyse l’impact métier des  trois vulnérabilités critiques 
identifiées lors de l’audit.

---

## 1. SQL Injection sur l’endpoint `/api/login`

### Description synthétique
Cette vulnérabilité permet à un attaquant de contourner l’authentification et
d’accéder à des comptes utilisateurs, y compris potentiellement des comptes
administrateurs.

---

### Impact métier

- Accès non autorisé aux comptes clients
- Consultation et modification de données personnelles
- Accès indirect aux fonctionnalités financières
- Risque de compromission globale du système d’information


---

### Coût potentiel d’une exploitation

- Fraudes financières (virements, manipulations de soldes)
- Coûts d’investigation forensique
- Mobilisation des équipes IT et sécurité
- Déploiement d’urgence de correctifs
- Assistance client massive

 Estimation réaliste  :  
 Plusieurs centaines de milliers d’euros, voire davantage en cas d’exploitation à grande échelle.

---

### Atteinte à la réputation

- Perte immédiate de confiance des clients
- Mauvaise couverture médiatique (« faille de sécurité dans une banque »)
- Résiliation de comptes et fuite des clients vers la concurrence


---

### Conformité RGPD / PCI-DSS

- Violation du RGPD (articles 5 et 32 : sécurité et confidentialité)
- Accès non autorisé à des données personnelles
- Obligation légale de notification à la CNIL et aux clients
- Non-respect des exigences PCI-DSS concernant le contrôle d’accès

---

## 2. Contournement de l’authentification (token forgeable)

### Description synthétique
Le mécanisme de génération de token est faible et prédictible, permettant
l’usurpation d’identité sans authentification réelle.

---

### Impact métier

- Usurpation de comptes clients
- Accès aux opérations sensibles (virements, modification de profil)
- Impossibilité de garantir l’identité réelle des utilisateurs

 Le système d’authentification perd toute crédibilité.

---

### Coût potentiel d’une exploitation

- Remboursement des transactions frauduleuses
- Augmentation significative des tickets support
- Déploiement d’une refonte complète de l’authentification
- Potentielle perte de partenaires ou d’investisseurs

 Estimation réaliste  :  
 *Dizaines à centaines de milliers d’euros*

---

### Atteinte à la réputation

- Image de banque
