import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    storage: Storage;
    cache: {[key: string]: string} = {};

    constructor() {
        this.storage = localStorage;
    }

    clear() : void {
        this.storage.clear();
        this.cache = {};
    }

    has(key: string) : boolean {
        let inCache = this.cache[key] != null;
        return inCache || this.storage.getItem(key) != null;
    }

    set(key: string, value: any) : void {
        let jsonVal = value != null ? JSON.stringify(value) : null;
        this.storage.setItem(key, jsonVal);
        this.cache[key] = value;
    }

    get(key: string, defaultValue?: any) : any {
        let value = this.cache[key];
        if (value == null) {
            let rawValue = this.storage.getItem(key);
            value = rawValue !== null ? JSON.parse(rawValue) : null;
            this.cache[key] = value;
        }
        return value != null ? value : defaultValue;
    }

    remove(key: string) : any {
        let value = this.get(key);
        this.storage.removeItem(key);
        delete this.cache[key];
        return value;
    }
    
}