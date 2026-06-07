/* --- Corporate Design Foundations --- */
:root {
    --costa-maroon: #631D2F;      /* Iconic primary commercial brand color */
    --costa-dark-burgundy: #4A1220;
    --costa-gold: #DDA15E;
    --costa-soft-bg: #F9F6F0;     /* Refined off-white layout surface */
    --text-main: #222222;
    --text-muted: #555555;
    --white: #FFFFFF;
    --border-light: #E5E0D8;
    --font-stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    --transition-smooth: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-stack);
    color: var(--text-main);
    background-color: var(--white);
    line-height: 1.5;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

/* --- Dynamic Buttons --- */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 28px;
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none;
    border-radius: 30px;
    transition: var(--transition-smooth);
    cursor: pointer;
    border: none;
}

.btn-primary {
    background-color: var(--costa-maroon);
    color: var(--white);
}

.btn-primary:hover {
    background-color: var(--costa-dark-burgundy);
}

.btn-outline {
    background-color: transparent;
    color: var(--costa-maroon);
    border: 2px solid var(--costa-maroon);
}

.btn-outline:hover {
    background-color: var(--costa-maroon);
    color: var(--white);
}

.btn-accent {
    background-color: var(--text-main);
    color: var(--white);
}

.btn-accent:hover {
    background-color: #000000;
}

.btn-sm {
    padding: 8px 18px;
    font-size: 0.85rem;
}

/* --- Header System --- */
.main-header {
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: var(--white);
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}

.utility-bar {
    background-color: var(--costa-soft-bg);
    border-bottom: 1px solid var(--border-light);
    font-size: 0.75rem;
    padding: 8px 0;
}

.utility-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.utility-bar a {
    color: var(--text-muted);
    text-decoration: none;
    margin-right: 20px;
    font-weight: 500;
}

.utility-bar a:hover {
    color: var(--costa-maroon);
}

.utility-bar .util-login-btn {
    margin-right: 0;
    background-color: var(--border-light);
    padding: 2px 10px;
    border-radius: 12px;
    color: var(--text-main);
}

.navbar {
    padding: 16px 0;
}

.nav-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.brand-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.4rem;
    font-weight: 800;
    letter-spacing: 1px;
    color: var(--costa-maroon);
    text-decoration: none;
}

.logo-circle {
    background-color: var(--costa-maroon);
    color: var(--white);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.95rem;
}

.nav-menu a {
    color: var(--text-main);
    text-decoration: none;
    font-weight: 600;
    margin: 0 16px;
    font-size: 0.95rem;
    transition: var(--transition-smooth);
}

.nav-menu a:hover {
    color: var(--costa-maroon);
}

.mobile-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 1.3rem;
    color: var(--text-main);
    cursor: pointer;
}

/* --- Hero Showcase Section --- */
.hero-showcase {
    background-color: var(--costa-soft-bg);
    padding: 60px 0;
    overflow: hidden;
}

.hero-split {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;
    align-items: center;
}

.hero-text-content .badge {
    display: inline-block;
    background-color: var(--costa-gold);
    color: #4A2800;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 4px 12px;
    border-radius: 12px;
    margin-bottom: 16px;
}

.hero-text-content h1 {
    font-size: 3.2rem;
    line-height: 1.15;
    color: var(--costa-maroon);
    margin-bottom: 20px;
}

.hero-text-content p {
    font-size: 1.1rem;
    color: var(--text-muted);
    margin-bottom: 32px;
    max-width: 520px;
}

.hero-cta-group {
    display: flex;
    gap: 16px;
}

.hero-image-wrapper img {
    width: 100%;
    height: 420px;
    object-fit: cover;
    border-radius: 24px;
    box-shadow: 0 12px 30px rgba(0,0,0,0.08);
}

/* --- Rewards Ecosystem Banner --- */
.loyalty-banner {
    background-color: var(--costa-maroon);
    color: var(--white);
    padding: 60px 0;
}

.loyalty-grid {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 60px;
    align-items: center;
}

.mock-app-card {
    background-color: var(--costa-dark-burgundy);
    padding: 30px;
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.card-brand {
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 24px;
}

.beans-counter {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
}

.bean {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255,255,255,0.3);
}

.bean.active {
    background-color: var(--costa-gold);
    color: var(--costa-dark-burgundy);
}

.card-status {
    font-size: 0.85rem;
    opacity: 0.8;
}

.loyalty-info h2 {
    font-size: 2.2rem;
    margin-bottom: 16px;
}

.loyalty-info p {
    font-size: 1.05rem;
    opacity: 0.9;
    margin-bottom: 30px;
    max-width: 620px;
}

.app-badges {
    display: flex;
    gap: 12px;
}

.app-btn {
    background-color: var(--white);
    color: var(--text-main);
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: var(--transition-smooth);
}

.app-btn:hover {
    transform: translateY(-2px);
    background-color: var(--costa-soft-bg);
}

/* --- Combo Promo Cards --- */
.campaigns-section {
    padding: 80px 24px;
}

.section-title-block {
    margin-bottom: 40px;
}

.section-title-block.center {
    text-align: center;
}

.section-title-block h2 {
    font-size: 2rem;
    color: var(--costa-maroon);
    margin-bottom: 8px;
}

.section-title-block p {
    color: var(--text-muted);
}

.campaign-cards-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.campaign-card {
    border: 1px solid var(--border-light);
    border-radius: 16px;
    overflow: hidden;
    background-color: var(--white);
    transition: var(--transition-smooth);
}

.campaign-card:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.05);
}

.card-tag {
    background-color: var(--costa-soft-bg);
    padding: 8px 20px;
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--costa-maroon);
    text-transform: uppercase;
}

.campaign-body {
    padding: 30px;
}

.campaign-body h3 {
    font-size: 1.4rem;
    margin-bottom: 6px;
}

.price-point {
    font-size: 1.25rem;
    font-weight: 800;
    color: var(--costa-maroon);
    margin-bottom: 12px;
}

.campaign-body p {
    color: var(--text-muted);
    margin-bottom: 24px;
    font-size: 0.95rem;
}

.card-link {
    color: var(--text-main);
    text-decoration: none;
    font-weight: 700;
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 6px;
}

.card-link:hover {
    color: var(--costa-maroon);
}

/* --- Interactive Filterable Product Menu --- */
.interactive-menu-module {
    background-color: var(--costa-soft-bg);
    padding: 80px 0;
}

.menu-controls {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 40px;
}

.filter-chip {
    background-color: var(--white);
    border: 1px solid var(--border-light);
    padding: 10px 24px;
    border-radius: 20px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    font-size: 0.9rem;
    transition: var(--transition-smooth);
}

.filter-chip.active, .filter-chip:hover {
    background-color: var(--costa-maroon);
    color: var(--white);
    border-color: var(--costa-maroon);
}

.corporate-menu-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
}

.product-item-card {
    background-color: var(--white);
    border-radius: 12px;
    padding: 24px;
    border: 1px solid rgba(0,0,0,0.03);
    box-shadow: 0 4px 12px rgba(0,0,0,0.02);
    display: flex;
    animation: layoutFade 0.35s ease-out forwards;
}

.product-item-card.hidden {
    display: none;
}

.product-meta {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
}

.product-meta h3 {
    font-size: 1.2rem;
    color: var(--text-main);
}

.item-tag {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    background-color: var(--border-light);
    padding: 2px 8px;
    border-radius: 4px;
}

.product-details p {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-bottom: 16px;
}

.nutrition-matrix {
    display: flex;
    gap: 8px;
    align-items: center;
}

.nutri-badge {
    font-size: 0.75rem;
    font-weight: 700;
    background-color: #ECE7DF;
    padding: 2px 8px;
    border-radius: 10px;
}

.allergen-badge {
    font-size: 0.75rem;
    background-color: #F0E2E5;
    color: var(--costa-maroon);
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 10px;
}

.status-badge.vegan {
    font-size: 0.75rem;
    background-color: #E2F0E5;
    color: #1E632F;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 10px;
}

/* --- Enterprise Footer System --- */
.corporate-footer {
    background-color: #241A1C;
    color: var(--white);
    padding: 60px 0 0 0;
}

.footer-main-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.9fr 0.9fr 1fr;
    gap: 40px;
    margin-bottom: 50px;
}

.footer-brand-column h3 {
    letter-spacing: 1px;
    margin-bottom: 16px;
    color: var(--white);
}

.footer-brand-column p {
    font-size: 0.85rem;
    opacity: 0.6;
    margin-bottom: 20px;
    max-width: 260px;
}

.corporate-socials {
    display: flex;
    gap: 14px;
}

.corporate-socials a {
    color: var(--white);
    opacity: 0.5;
    font-size: 1.1rem;
    transition: var(--transition-smooth);
}

.corporate-socials a:hover {
    opacity: 1;
    color: var(--costa-gold);
}

.footer-links-column h4 {
    font-size: 0.95rem;
    margin-bottom: 18px;
    font-weight: 600;
    color: var(--costa-gold);
}

.footer-links-column a {
    display: block;
    color: var(--white);
    opacity: 0.7;
    text-decoration: none;
    font-size: 0.85rem;
    margin-bottom: 10px;
    transition: var(--transition-smooth);
}

.footer-links-column a:hover {
    opacity: 1;
    padding-left: 4px;
}

.footer-bottom-bar {
    border-top: 1px solid rgba(255,255,255,0.06);
    padding: 24px 0;
    font-size: 0.8rem;
    color: rgba(255,255,255,0.4);
}

/* --- Viewport Layout Adjustments --- */
@keyframes layoutFade {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 992px) {
    .hero-split {
        grid-template-columns: 1fr;
        text-align: center;
    }
    .hero-text-content p {
        margin: 0 auto 32px auto;
    }
    .hero-cta-group {
        justify-content: center;
    }
    .hero-image-wrapper img {
        height: 320px;
    }
    .loyalty-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }
    .footer-main-grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 768px) {
    .hide-mobile {
        display: none !important;
    }
    .mobile-toggle {
        display: block;
    }
    .nav-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: var(--white);
        flex-direction: column;
        padding: 20px 0;
        box-shadow: 0 10px 15px rgba(0,0,0,0.05);
        border-top: 1px solid var(--border-light);
    }
    .nav-menu.active {
        display: flex;
    }
    .nav-menu a {
        padding: 12px 24px;
        margin: 0;
        width: 100%;
    }
    .campaign-cards-grid, .corporate-menu-grid {
        grid-template-columns: 1fr;
    }
}
