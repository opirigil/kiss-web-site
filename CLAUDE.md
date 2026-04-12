@AGENTS.md

# WILD CLUB — Project Instructions

## Brand
- Brand name: **WILD CLUB**
- Type: Teaser site (pre-launch, no shop)
- Location: Geneva, Switzerland
- Current drop: KISS — Keep It Simple Sexy (SS26)

## Design Direction
- Minimalist, editorial, premium
- References: lemaire.fr, system.com
- Background: always #FFFFFF
- Red #CC2200: WILD CLUB brand name only
- Text: #111111, grey: #888888, border: #EEEEEE
- No gradients, no shadows, no border-radius, no animations except hover color

## Typography
- Display/Brand: Anton (Google Fonts)
- Phrases/CTA: Barlow Condensed Black Italic (Google Fonts)
- Labels/Body: Syne Mono (Google Fonts)
- Never use Inter, Roboto, Arial

## Tech Stack
- **Frontend**: Next.js 14 (App Router) + Tailwind CSS
- **Backend**: FastAPI (Python) in `backend/` with venv
- Node path: `/opt/homebrew/bin` (Apple Silicon Mac)
- Start frontend: `bash start-dev.sh`
- Start backend: `source backend/venv/bin/activate && uvicorn app.main:app --reload --port 8000`

## Structure
```
src/app/page.tsx          — Home (teaser: brand name, statement, email capture)
src/app/story/page.tsx    — Story page (centered, manifesto)
src/app/contact/page.tsx  — Contact page (centered, email)
src/components/BurgerMenu.tsx — Global burger menu (layout.tsx)
src/app/layout.tsx        — Root layout with fonts + BurgerMenu
src/app/globals.css       — Global styles, font utilities
backend/app/main.py       — FastAPI app
backend/app/schemas/      — Pydantic schemas (source of truth for API)
backend/app/routers/      — API routes
backend/app/data.py       — Mock data
```

## Rules
- White background everywhere, no dark sections
- Burger menu on all pages (via layout.tsx)
- No header/nav bar, only burger
- Sections separated by 1px solid #EEEEEE
- SDD (Spec-Driven Development): Pydantic schemas are the API contract
