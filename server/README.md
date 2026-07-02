# Mohammad Awada Tattoos

A modern tattoo studio website built with **Laravel**, **React**, **Filament**, **MySQL**, and **Cloudflare R2**.

The project allows clients to browse the artist's portfolio, submit tattoo appointment requests with reference images, while providing the artist with a professional admin panel for managing appointments.

---

# Features

## Client Website

- Dynamic Hero section
- Dynamic Gallery
- About section
- Booking Form
- Google Maps integration
- Responsive design

---

## Booking System

- Complete tattoo appointment form
- Upload multiple reference images
- Upload multiple skin area images
- Form validation
- Automatic booking number generation
- Appointment stored in MySQL
- Images uploaded directly to Cloudflare R2

---

## Admin Panel (Filament)

- Secure login
- Gallery management
- Hero image management
- Appointment management
- Dynamic content editing

---

## Cloud Storage

Images are stored in Cloudflare R2.

Folders:

```
gallery/

appointments/
    reference/
    skin/
```

---

# Tech Stack

## Backend

- Laravel 12
- PHP 8.3

## Frontend

- React
- Vite

## Database

- MySQL

## Admin Panel

- Filament v4

## Storage

- Cloudflare R2

## Email

- Resend (integration in progress)

---

# Current Project Status

| Feature | Status |
|----------|--------|
| React Frontend | ✅ |
| Laravel Backend | ✅ |
| Dynamic Gallery | ✅ |
| Dynamic Hero | ✅ |
| Booking Form | ✅ |
| Image Upload | ✅ |
| Cloudflare R2 | ✅ |
| Filament Admin | ✅ |
| Booking Number | ✅ |
| Email Notifications | 🚧 |
| Appointment Dashboard | 🚧 |
| Deployment | 🚧 |
| SEO | 🚧 |

---

# Folder Structure

```
server/

app/

Http/

Controllers/

Models/

Services/

Mail/

Filament/

resources/

js/

components/

pages/

views/

routes/

database/

storage/
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/MohammadAwadaTattoos.git
```

Install PHP dependencies

```bash
composer install
```

Install JavaScript dependencies

```bash
npm install
```

Copy environment

```bash
cp .env.example .env
```

Generate application key

```bash
php artisan key:generate
```

Run migrations

```bash
php artisan migrate
```

Start Laravel

```bash
php artisan serve
```

Start Vite

```bash
npm run dev
```

---

# Environment Variables

Required services:

- MySQL
- Cloudflare R2
- Resend

Example:

```
DB_CONNECTION=mysql

FILESYSTEM_DISK=r2

MAIL_MAILER=resend

RESEND_API_KEY=

R2_ACCESS_KEY_ID=

R2_SECRET_ACCESS_KEY=

R2_BUCKET=

R2_ENDPOINT=

R2_URL=
```

---

# Roadmap

## Phase 1

- Website
- Gallery
- Hero
- Booking Form

Completed

---

## Phase 2

- Backend
- Cloudflare R2
- Appointment System

Completed

---

## Phase 3

- Filament Appointment Dashboard
- Email Notifications
- Artist Workflow

In Progress

---

## Phase 4

- Deployment
- SEO
- Performance
- Analytics

Planned

---

# License

Private project.

© Mohammad Awada Tattoos