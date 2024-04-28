import type { PostCategoryItem } from "~/model/categories/endpoints";
import { PostCategory } from '~/model/filter/categories';

export interface PostItem {
    id: number,
    title: string,
    description: string,
    dateCreated: string,
    category: PostCategoryItem,
    // author: string,
    photoCover: string,
    content: string,
}

export const mockPosts: PostItem[] = [
    {
      id: 1,
      title: 'Osobowość typu borderline – charakterystyka, objawy, czym jest zaburzenie osobowości borderline?',
      content: '',
      dateCreated: '2024-01-01',
      description: `Borderline to zaburzenie charakteryzujące się odczuwaniem skrajnych i intensywnych emocji.
      Momenty spokoju, mogą zamienić się w stany depresyjne, a te w bardzo silne pobudzenie.
      Pacjenci z borderline doświadczają również stanów porównywanych do nerwicy wegetatywnej.`,
      category: {
        name: PostCategory.bpd,
        color: 'lightgreen',
        textColor: 'black',
      },
      photoCover: 'https://shorturl.at/owHS2',
    },
    {
      id: 2,
      title: 'Osobowość typu borderline – charakterystyka, objawy, czym jest zaburzenie osobowości borderline?',
      content: '',
      dateCreated: '2024-01-01',
      description: `Borderline to zaburzenie charakteryzujące się odczuwaniem skrajnych i intensywnych emocji.
      Momenty spokoju, mogą zamienić się w stany depresyjne, a te w bardzo silne pobudzenie.
      Pacjenci z borderline doświadczają również stanów porównywanych do nerwicy wegetatywnej.`,
      category: {
        name: PostCategory.bpd,
        color: 'lightblue',
        textColor: 'white',
      },
      photoCover: 'https://shorturl.at/owHS2',
    },
    {
      id: 3,
      title: 'Osobowość typu borderline – charakterystyka, objawy, czym jest zaburzenie osobowości borderline?',
      content: '',
      dateCreated: '2024-01-01',
      description: `Borderline to zaburzenie charakteryzujące się odczuwaniem skrajnych i intensywnych emocji.
      Momenty spokoju, mogą zamienić się w stany depresyjne, a te w bardzo silne pobudzenie.
      Pacjenci z borderline doświadczają również stanów porównywanych do nerwicy wegetatywnej.`,
      category: {
        name: PostCategory.bpd,
        color: 'cyan',
        textColor: '#FFFFFF',
      },
      photoCover: 'https://shorturl.at/owHS2',
    }
  ];