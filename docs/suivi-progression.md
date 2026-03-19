# Suivi de progression des participants

## Idée

Base de données pour enregistrer la progression de chaque participant aux ateliers, avec un tableau de bord utilisateur et une vue admin pour Vincent.

## Architecture envisagée

**Stack : Supabase** (PostgreSQL + Auth + API JS)
- Compatible avec le site statique Astro / GitHub Pages (client JS côté navigateur)
- Gratuit jusqu'à 50 000 utilisateurs actifs

## Fonctionnalités

### Côté participant (`/mon-suivi/`)
- Connexion email + mot de passe (ou lien magique)
- Cases à cocher par étape sur chaque page d'atelier
- Tableau de bord avec progression sur tous les ateliers

### Côté admin (`/admin/`)
- Liste de tous les participants inscrits
- Progression de chacun, atelier par atelier
- Identification des étapes qui bloquent le plus de monde

## Questions à trancher avant de démarrer

1. **Granularité du suivi** : juste "atelier terminé/pas terminé", ou étape par étape à l'intérieur de chaque atelier ?
2. **Inscription** : Vincent crée les comptes manuellement, ou les participants s'inscrivent seuls ?
3. **Vue admin** : tableau simple "qui a fait quoi" ou plus de détail (dates, temps passé) ?

## Estimation

~1 journée de développement.
