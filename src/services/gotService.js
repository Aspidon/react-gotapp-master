export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        // if (!res.os) {
        //     throw new Error(`Could not fetch ${url} received ${res.status}`);
        // }

        return await res.json();
    }
    async getAllCharaster() {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharactor);
    }
    async getCharaster(id) {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharactor(character);
    }

    _transformCharactor(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPage: book.numberOfPage,
            publiser: book.publiser,
            realised: book.realised
        }
    }
}