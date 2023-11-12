class Key {
  constructor(private signature: number = Math.random()) {}

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];
  protected key: Key | null = null;

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log("Person came in.");
    } else {
      console.log("Door is closed.");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(private houseKey: Key) {
    super();
    this.key = houseKey;
  }

  openDoor(enteredKey: Key) {
    if (enteredKey.getSignature() === this.key?.getSignature()) {
      this.door = true;
      console.log("Door is opened.");
    } else {
      console.log("Wrong key. Door remains closed.");
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
