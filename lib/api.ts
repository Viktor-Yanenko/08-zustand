import axios from "axios";
import { type NewNoteData, type Note } from "../types/note";

const API_KEY = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
const API_URL = 'https://notehub-public.goit.study/api/notes';

const HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
}

interface NotesHttpResponse{
    notes: Note[];
    totalPages: number;
}

export async function fetchNotes(searchQuery: string, page: number, tag?: string): Promise<NotesHttpResponse> {
    const params: {
        page: number;
        perPage: number;
        search?: string;
        tag?: string;
    } = {
        page,
        perPage: 12,
    }

    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery !== '') {
        params.search = trimmedQuery;
    }

    if (tag) {
        params.tag = tag;
    }
    
    const response = await axios.get<NotesHttpResponse>(API_URL, {
        params,
        headers: HEADERS,
    });
    return response.data;
}

export async function deleteNote(noteId: number): Promise<Note> {
    const response = await axios.delete<Note>(`${API_URL}/${noteId}`, {
        headers: HEADERS,
    })
    return response.data;
}

export async function createNote(noteData: NewNoteData): Promise<Note> {
    const response = await axios.post<Note>(API_URL, noteData, {
        headers: HEADERS,
    })
    return response.data;
}

export async function fetchNoteById(id: number): Promise<Note> {
    const response = await axios.get<Note>(`${API_URL}/${id}`, {
        headers: HEADERS,
    });
    return response.data;
}