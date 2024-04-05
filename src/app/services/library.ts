export interface BookModel
{
    id: number;
    name: string;
    categoryId: number;
    authorId: number;
    pageCount: number;
    yearRelease: number;
    imageUrl: string;
    description: null | string;
    inStock: boolean;
}

export interface CreateBookModel
{
    name: string;
    categoryId: number;
    pageCount: number;
    yearRelease: number;
    image: File | null;
    description: string | null;
    inStock: boolean;
    authorId: number;
}