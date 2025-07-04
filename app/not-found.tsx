import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'Page you are looking for does not exist',
  openGraph: {
    title: 'Page not found',
    description: 'Page you are looking for does not exist',
    url: `/not-found`,
    siteName: 'NoteHub',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'Page not found',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page not found',
    description: 'Page you are looking for does not exist',
    images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
  },
};

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>404 - Page not found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}
