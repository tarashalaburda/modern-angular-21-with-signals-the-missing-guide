import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { BooksList } from './components/books-list/books-list';
import { SearchBox } from './components/search-box/search-box';
import { BookCard } from './components/book-card/book-card';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, BookCard, SearchBox, BooksList, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
