import type { PostItem } from "~/model/post/endpoints";
import { mockCategories } from "~/model/mocks/categories";

export const mockPosts: PostItem[] = [
    {
        id: 0,
        title: 'Inside Schizophrenia Podcast',
        description: 'Inside Schizophrenia is a captivating monthly podcast that offers a distinctive glimpse into li.',
        dateCreated: new Date(Date.now()).toLocaleDateString(),
        category: mockCategories[0],
        photoCover: 'https://i.pinimg.com/originals/9c/7b/e4/9c7be43979a736a8695361a544630b97.jpg',
        content: '',
    },
    {
        id: 1,
        title: 'Osobowość typu borderline – charakterystyka, objawy, czym jest zaburzenie osobowości borderline?',
        dateCreated: '2024-01-01',
        description: `Borderline to zaburzenie charakteryzujące się odczuwaniem skrajnych i intensywnych emocji.
        Momenty spokoju, mogą zamienić się w stany depresyjne, a te w bardzo silne pobudzenie.
        Pacjenci z borderline doświadczają również stanów porównywanych do nerwicy wegetatywnej.`,
        category: mockCategories[1],
        photoCover: 'https://shorturl.at/owHS2',
        content: '',
      },
];