import isFunction from '../commonUtil/isFunction'
var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
var toString = Object.prototype.toString;
var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;
var nativeIsView = typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView;
var typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;

function _(obj) {
  if (obj instanceof _) return obj;
  if (!(this instanceof _)) return new _(obj);
  this._wrapped = obj;
}

function getByteLength (obj) {
  return obj == null ? void 0 : obj['byteLength']
}

function isDataView (obj) {
  return toString.call(obj) === '[object DataView]'
}

function isBufferLike (obj) {
  var sizeProperty = getByteLength(obj)
  return typeof sizeProperty == 'number' && sizeProperty >= 0 && sizeProperty <= MAX_ARRAY_INDEX;
}

function isTypedArray(obj) {
  return nativeIsView ? (nativeIsView(obj) && !isDataView(obj)) : isBufferLike(obj) && typedArrayPattern.test(toString.call(obj));
}

function keys (obj) {
  if (Object.keys) {
    return Object.keys(obj)
  }
  var arr = []
  for (var key in obj) {
    if (this.has(obj, key)) {
      arr.push(key)
    }
  }
  return arr
}

function has (obj, name) {
  return Object.prototype.hasOwnProperty.call(obj, name)
}

function eq (a, b, aStack, bStack) {
  // 0 -0
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  // null undefined
  if (a == null || b == null) return false;
  // NaN
  if (a !== a) return b !== b;
  var type = typeof a;
  if (type !== 'function' && type !== 'object' && typeof b !== 'object') return false;
  return deepEq(a, b, aStack, bStack)
}

function deepEq(a, b, aStack, bStack) {
  // Unwrap any wrapped objects.
  if (a instanceof _) a = a._wrapped;
  if (b instanceof _) b = b._wrapped;
  // Compare `[[Class]]` names.
  var className = toString.call(a);
  if (className !== toString.call(b)) return false;
  switch (className) {
    // These types are compared by value.
    // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
    case '[object RegExp]':
    case '[object String]':
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return '' + a === '' + b;
    case '[object Number]':
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b;
      // An `egal` comparison is performed for other numeric values.
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case '[object Date]':
    case '[object Boolean]':
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;
    case '[object Symbol]':
      return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    case '[object ArrayBuffer]':
      // Coerce to `DataView` so we can fall through to the next case.
      return deepEq(new DataView(a), new DataView(b), aStack, bStack);
    case '[object DataView]':
      var byteLength = getByteLength(a);
      if (byteLength !== getByteLength(b)) {
        return false;
      }
      while (byteLength--) {
        if (a.getUint8(byteLength) !== b.getUint8(byteLength)) {
          return false;
        }
      }
      return true;
    default:
      break
  }

  if (isTypedArray(a)) {
    // Coerce typed arrays to `DataView`.
    return deepEq(new DataView(a.buffer), new DataView(b.buffer), aStack, bStack);
  }

  var areArrays = className === '[object Array]';
  if (!areArrays) {
    if (typeof a != 'object' || typeof b != 'object') return false;

    // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor &&
                             isFunction(bCtor) && bCtor instanceof bCtor)
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
  }
  // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  }

  // Add the first object to the stack of traversed objects.
  aStack.push(a);
  bStack.push(b);

  // Recursively compare objects and arrays.
  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false;
    // Deep compare the contents, ignoring non-numeric properties.
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var _keys = keys(a), key;
    length = _keys.length;
    // Ensure that both objects contain the same number of properties before comparing deep equality.
    if (keys(b).length !== length) return false;
    while (length--) {
      // Deep compare each member
      key = _keys[length];
      if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
    }
  }
  // Remove the first object from the stack of traversed objects.
  aStack.pop();
  bStack.pop();
  return true;
}

export default function isEqual(a, b) {
  return eq(a, b);
}
