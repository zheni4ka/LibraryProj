export interface BookModel
{
    id: number;
    name: string;
    pageCount: number;
    yearRelease: number;
    imageUrl: string;
    description: null | string;
    inStock: boolean;
}

export interface CreateBookModel
{
    name: string;
    pageCount: number;
    yearRelease: number;
    image: File | null;
    description: string | null;
    inStock: boolean;
}