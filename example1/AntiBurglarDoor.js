import DoorInterface from './interface/DoorInterface.js';
import Door from './Door.js';

export default class AntiBurglarDoor extends DoorInterface {
    #originalDoor;

    constructor(originalDoor) {
        super();
        if (!(originalDoor instanceof Door)) {
            throw new Error(
                'The original door must be an instance of DoorInterface'
            );
        }

        this.#originalDoor = originalDoor;
    }

    checkKeys() {
        // nie mamy właściwych kluczy
        const hasCorrectKeys = false;
        return hasCorrectKeys;
    }

    open() {
        // jeśli mamy właściwe klucze, to otwórz drzwi
        if (this.checkKeys()) {
            this.#originalDoor.open();
            return;
        }

        console.log('Door closed 😲 You do not have the correct keys');
    }
}
