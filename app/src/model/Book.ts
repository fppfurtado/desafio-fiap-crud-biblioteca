export class Book {
    
    constructor(
        public readonly id: number,
        private _title: string, 
        private _author: string , 
        private _isbn: string, 
        private _year: number
    ) {}

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get author(): string {
        return this._author;
    }

    set author(author: string) {
        this._author = author;
    }

    get isbn(): string {
        return this._isbn;
    }

    set isbn(isbn: string) {
        this._isbn = isbn;
    }

    get year(): number {
        return this._year;
    }

    set year(year: number) {
        this._year = year;
    }

}