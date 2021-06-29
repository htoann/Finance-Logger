var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
var form = document.querySelector(".new-item-form");
// inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
// list template instance
var ul = document.querySelector("ul");
var list = new ListTemplate(ul);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var values = [
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    ];
    var doc;
    if (type.value === "invoice") {
        doc = new (Invoice.bind.apply(Invoice, __spreadArray([void 0], values)))();
    }
    else {
        doc = new (Payment.bind.apply(Payment, __spreadArray([void 0], values)))();
    }
    list.render(doc, type.value, "end");
});
var addUID = function (obj) {
    var UID = Math.floor(Math.random() * 1000);
    return __assign(__assign({}, obj), { UID: UID });
};
var docOne = addUID({ name: "hello", age: 18 });
console.log(docOne);
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Book"] = 0] = "Book";
    ResourceType[ResourceType["Person"] = 1] = "Person";
    ResourceType[ResourceType["Author"] = 2] = "Author";
})(ResourceType || (ResourceType = {}));
var docc = {
    uid: "1",
    ResourceType: ResourceType.Book,
    data: { name: "Toan" },
};
console.log(docc);
