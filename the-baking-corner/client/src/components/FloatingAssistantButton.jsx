import {
  Link,
  useLocation
} from 'react-router-dom';

export default function FloatingAssistantButton() {
  const location = useLocation();

  // אין צורך להציג את הכפתור
  // כשכבר נמצאים בעמוד העוזר.
  if (
    location.pathname ===
    '/ai-assistant'
  ) {
    return null;
  }

  return (
    <Link
      to="/ai-assistant"
      aria-label="Open Baking Assistant"
      title="Baking Assistant"
      style={{
        position: 'fixed',
        right: '24px',
        bottom: '24px',
        width: '58px',
        height: '58px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#111',
        color: '#d4af37',
        border: '2px solid #d4af37',
        boxShadow:
          '0 5px 18px rgba(0, 0, 0, 0.25)',
        textDecoration: 'none',
        zIndex: 1000
      }}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 5.5H19V15.5H10L5 19V5.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />

        <path
          d="M12 7L12.6 8.4L14 9L12.6 9.6L12 11L11.4 9.6L10 9L11.4 8.4L12 7Z"
          fill="currentColor"
        />

        <circle
          cx="8.5"
          cy="12.5"
          r="0.8"
          fill="currentColor"
        />

        <circle
          cx="15.5"
          cy="12.5"
          r="0.8"
          fill="currentColor"
        />
      </svg>
    </Link>
  );
}