// Задача 1. Печатное издание

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  get state() {
    return this._state;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  fix() {
    this.state = this.state * 1.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}


// Задача 2. Библиотека

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    const index = this.books.findIndex(book => book.name === bookName);
    if (index !== -1) {
      return this.books.splice(index, 1)[0];
    }
    return null;
  }
}


// Задача 3. Журнал успеваемости *

class Student {
  constructor(name) {
    this.name = name;
    // Структура для хранения оценок: { subjectName: [marksArray], ... }
    this.marks = {};
  }

  addMark(mark, subjectName) {
    // Валидация оценки
    if (mark < 2 || mark > 5) {
      return; // Не добавляем, если оценка вне диапазона
    }

    // Проверяем наличие предмета, если нет - создаём массив
    if (!this.marks[subjectName]) {
      this.marks[subjectName] = [];
    }

    // Добавляем оценку
    this.marks[subjectName].push(mark);
  }

  getAverageBySubject(subjectName) {
    // Проверяем наличие предмета
    if (!this.marks[subjectName] || this.marks[subjectName].length === 0) {
      return 0;
    }

    // Считаем сумму оценок
    const sum = this.marks[subjectName].reduce((acc, mark) => acc + mark, 0);
    // Возвращаем среднее
    return sum / this.marks[subjectName].length;
  }

  getAverage() {
    // Получаем все предметы
    const subjects = Object.keys(this.marks);
    // Если нет предметов, среднее 0
    if (subjects.length === 0) {
      return 0;
    }

    // Суммируем средние по всем предметам
    const totalAverage = subjects.reduce((acc, subject) => {
      return acc + this.getAverageBySubject(subject);
    }, 0);

    // Возвращаем общее среднее
    return totalAverage / subjects.length;
  }
}