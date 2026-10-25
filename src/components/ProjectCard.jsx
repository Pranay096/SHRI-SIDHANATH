import './ProjectCard.css';
import ProjectRegistration from './ProjectRegistration';

/**
 * One project, as a card: a full-bleed marketing render with a gradient overlay,
 * the project name as headline, the `detail` field as a tagline, and developer
 * branding at the bottom — matching the developer marketing style the client uses.
 *
 * Falls back to a typographic plate when no image is available.
 *
 * Shared by the homepage shortlist and the projects page.
 */
export default function ProjectCard({ project: p, onOpen }) {
  const meta = [p.area, p.config].filter(Boolean).join(' · ');

  return (
    <article className="pcard-entry">
    <button type="button" className="pcard" onClick={() => onOpen(p)} data-tilt="6" aria-label={`View details for ${p.name}`}>
      <span className="pcard__media">
        {p.image ? (
          <>
            <img src={p.image} alt={p.imageAlt ?? p.name} width="560" height="700" loading="lazy" />
            {/* Marketing overlay: gradient + headline + developer strip */}
            <span className="pcard__overlay" aria-hidden="true">
              <span className="pcard__overlay-top">
                <span className="pcard__headline">{p.name}</span>
              </span>
              <span className="pcard__overlay-bottom">
                <span className="pcard__dev-brand">
                  <img src="/images/branding/logo-mark-trimmed.png" alt="" width="28" height="15" />
                  <span className="pcard__dev-name">{p.developer || p.area}</span>
                </span>
                {p.area && <span className="pcard__location">{p.area}</span>}
              </span>
            </span>
          </>
        ) : (
          <span className="pcard__plate">
            <img src="/images/branding/logo-mark-trimmed.png" alt="" width="52" height="28" />
            <span className="h4">{p.developer || p.area}</span>
          </span>
        )}
        {p.imageCredit && <span className="pcard__credit mono-sm">Illus: {p.imageCredit}</span>}
        <span className="pcard__enquire mono-sm" aria-hidden="true">
          View details &rarr;
        </span>
      </span>

      <span className="pcard__body">
        <span className="pcard__row">
          <span className="pcard__name h5">{p.name}</span>
          {p.priceFrom && <span className="pcard__price mono-sm">From {p.priceFrom}</span>}
        </span>
        <span className="pcard__meta mono-sm">{meta}</span>
        {p.reraNumber && <>
          {p.developer && <span className="pcard__meta mono-sm">{p.developer}</span>}
          <span className="pcard__meta mono-sm">RERA: {p.reraNumber}</span>
          {p.status && <span className="pcard__meta mono-sm">{p.status}</span>}
          {p.completionDate && <span className="pcard__meta mono-sm">Proposed completion: {p.completionDate}</span>}
        </>}
      </span>
    </button>
    {/* Kept outside the button: a <details> inside an interactive button is
        invalid, and the registry facts are already one tap away in the panel —
        this stays for anyone skimming the grid without opening it. */}
    <ProjectRegistration project={p} />
    </article>
  );
}
