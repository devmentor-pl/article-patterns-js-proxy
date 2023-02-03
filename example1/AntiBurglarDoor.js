import DoorInterface from './interface/DoorInterface.js';
import Door from './Door.js';

export default class AntiBurglarDoor extends DoorInterface {
    #originalDoor;

    constructor(originalDoor) {
        super();
        this.#originalDoor = originalDoor;

        if (!(originalDoor instanceof Door)) {
            throw new Error(
                'The original door must be an instance of DoorInterface'
            );
        }
    }

    checkKeys() {
        // nie mamy wlasciwych kluczy
        const hasCorrectKeys = false;
        return hasCorrectKeys;
    }

    open() {
        // jesli mamy wlasciwe klucze, to otworz drzwi
        if (this.checkKeys()) {
            this.#originalDoor.open();
            return;
        }

        console.log('Door closed 😲 You do not have the correct keys');
    }
}
