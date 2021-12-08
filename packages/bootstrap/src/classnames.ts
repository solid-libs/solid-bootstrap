// Source: https://github.com/lukeed/clsx/blob/master/src/index.js

export type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined;

export interface ClassDictionary {
  [id: string]: any;
}

export interface ClassArray extends Array<ClassValue> {}

function toVal(mix: ClassValue) {
  var k,
    y,
    str = "";

  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if ((y = toVal(mix[k]))) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix![k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }

  return str;
}

export default function (...classes: ClassValue[]) {
  var i = 0,
    tmp,
    x,
    str = "";
  while (i < classes.length) {
    if ((tmp = classes[i++])) {
      if ((x = toVal(tmp))) {
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
}
