import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
});

const addUID = <T extends object>(obj: T) => {
  let UID = Math.floor(Math.random() * 1000);
  return { ...obj, UID };
};

let docOne = addUID({ name: "hello", age: 18 });

console.log(docOne);

enum ResourceType {
  Book,
  Person,
  Author,
}

interface Resource<T> {
  uid: string;
  ResourceType: ResourceType;
  data: T;
}

const docc: Resource<object> = {
  uid: "1",
  ResourceType: ResourceType.Book,
  data: { name: "Toan" },
};

console.log(docc);
