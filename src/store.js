import { Subject } from "rxjs";

const buttonClick = new Subject("");

const Store = {
  buttonClick: {
    publish: (value) => buttonClick.next(value),
    subscribe: (cb) => buttonClick.subscribe(cb),
  },
};

export default Store;
