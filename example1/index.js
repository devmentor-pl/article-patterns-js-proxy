import Door from './Door.js';
import AntiBurglarDoor from './AntiBurglarDoor.js';

const door = new Door();
const antiBurglarDoor = new AntiBurglarDoor(door);

// korzystam z oryginalnego obiektu
door.open(); // Door is opened 😁

// korzystam z Proxy
antiBurglarDoor.open(); // Door closed 😲 You do not have the correct keys
