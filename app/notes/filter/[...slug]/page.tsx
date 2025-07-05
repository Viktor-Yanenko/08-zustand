import { fetchNotes } from '../../../../lib/api';
import NotesClient from './Notes.client';
import { Metadata } from 'next';

interface NotesPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({
  params,
}: NotesPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = slug[0] === 'all' ? undefined : slug[0];

  return {
    title: tag ? `Notes: ${tag}` : 'All notes',
    description: tag ? `Notes filtered by '${tag}' tag` : 'All notes',
    openGraph: {
      title: tag ? `Notes: ${tag}` : 'All notes',
      description: tag ? `Notes filtered by '${tag}' tag` : 'All notes',
      url: `https://08-zustand-rho.vercel.app/notes/filter/${slug.join('/')}`,
      siteName: 'NoteHub',
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          width: 1200,
          height: 630,
          alt: tag ? `Notes: ${tag}` : 'All notes',
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: tag ? `Notes: ${tag}` : 'All notes',
      description: tag ? `Notes filtered by '${tag}' tag` : 'All notes',
      images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
    },
  };
}

export default async function NotesPage({ params }: NotesPageProps) {
  const { slug } = await params;
  const tag = slug[0] === 'all' ? undefined : slug[0];
  const notesResponse = await fetchNotes('', 1, tag);

  return (
    <NotesClient
      initialNotes={notesResponse.notes}
      initialTotalPages={notesResponse.totalPages}
      tag={tag}
    />
  );
}
