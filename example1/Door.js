import DoorInterface from './interface/DoorInterface.js';

export default class Door extends DoorInterface {
    #isOpened = false;

    open() {
        this.#isOpened = true;
        console.log(`Door is ${this.#isOpened ? 'opened 😁' : 'closed 😲'}`);
    }
}
