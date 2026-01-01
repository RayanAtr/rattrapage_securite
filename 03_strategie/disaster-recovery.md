# Plan de Reprise d’Activité (Disaster Recovery) – SecureBank

## Objectif

Assurer la  continuité de service  et la  récupération rapide des données 
en cas d’incident majeur (cyberattaque, panne, corruption de données).

---

## Scénarios couverts

- Compromission de la base de données
- Attaque par ransomware
- Indisponibilité du cloud provider
- Incident de sécurité majeur

---

## Stratégie de sauvegarde

- Sauvegardes quotidiennes chiffrées
- Stockage hors site
- Rétention de 30 jours
- Tests de restauration mensuels

---

## Objectifs de reprise

-  RPO (Recovery Point Objective)  : 24 heures
-  RTO (Recovery Time Objective)  : 4 heures

---

## Procédure de reprise

1. Détection de l’incident
2. Isolation des systèmes impactés
3. Restauration depuis les sauvegardes
4. Vérification de l’intégrité des données
5. Remise en production progressive

---

## Bénéfices métier

- Réduction des pertes financières
- Limitation de l’impact client
- Conformité réglementaire
- Renforcement de la résilience globale
