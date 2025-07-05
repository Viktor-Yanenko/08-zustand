import NoteForm from '../../../../components/NoteForm/NoteForm';
import css from './CreateNote.module.css';
// import { NOTE_TAGS } from '../../../../types/note';

export default async function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
