import { company, whatsappUrl } from '../../data/company'

function WhatsAppIcon() {
  return (
    <svg
      className="whatsapp-icon"
      viewBox="0 0 32 32"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M16.04 3A12.92 12.92 0 0 0 5.08 22.76L3 29l6.45-2.03A12.99 12.99 0 1 0 16.04 3Zm0 23.8c-2.07 0-4.1-.58-5.85-1.68l-.42-.26-3.83 1.2 1.24-3.72-.28-.43a10.72 10.72 0 1 1 9.14 4.89Zm5.88-8.03c-.32-.16-1.91-.94-2.21-1.05-.3-.1-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.26-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6a9.7 9.7 0 0 1-1.79-2.22c-.19-.32-.02-.5.14-.66.15-.14.32-.37.49-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.55-.73-.56h-.62c-.22 0-.57.08-.87.4-.3.33-1.13 1.11-1.13 2.7 0 1.59 1.16 3.13 1.32 3.35.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.62-.1 1.91-.78 2.18-1.53.27-.76.27-1.41.19-1.54-.08-.14-.3-.22-.62-.38Z" />
    </svg>
  );
}

function FloatingWhatsApp() {
  if (!whatsappUrl) {
    return (
      <span
        className="floating-action whatsapp-button disabled"
        aria-label="WhatsApp contact is not configured"
        title="WhatsApp contact is not configured"
      >
        <WhatsAppIcon />
        <span className="whatsapp-label">Chat on WhatsApp</span>
      </span>
    );
  }

  return (
    <a
      className="floating-action whatsapp-button"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Contact ${company.name} on WhatsApp`}
    >
      <WhatsAppIcon />
      <span className="whatsapp-label">Chat on WhatsApp</span>
    </a>
  );
}

export default FloatingWhatsApp;
