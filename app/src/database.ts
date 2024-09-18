import { Database, open } from 'sqlite';
import sqlite3 from 'sqlite3';

type book = {
  readonly id?: number,
  title: string,
  author?: string,
  isbn?: string,
  year?: string
}

let database: Database;

open({
    filename: './db.sqlite',
    driver: sqlite3.Database
  }).then((db) => {
    database = db;
  })

export async function listBooks(): Promise<book[]> {
  return await database.all('SELECT * FROM book');
}

export async function findBookById(id: string): Promise<book[] | undefined> {
  return await database.get('SELECT * FROM book WHERE id = ?', id);
}

export async function createBook(book:book): Promise<any> {
  return await database.run(
    'INSERT INTO book(title, author, isbn, year) VALUES (:title, :author, :isbn, :year)',
    {
      ':title': book.title,
      ':author': book.author,
      ':isbn': book.isbn,
      ':year': book.year
    }
  )
}

export async function updateBook(book: book): Promise<any> {
  const { id, title, author, isbn, year } = book;
  const sql = 'UPDATE book SET title = ?, author = ?, isbn = ?, year = ? WHERE id = ?';
  return await database.run(sql, [title, author, isbn, year, id]);
}

export async function deleteBook(id: string): Promise<any> {
  const sql = 'DELETE FROM book WHERE id = ?';
  return database.run(sql, [id]);
}