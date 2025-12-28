export const db = {
  _data: {},
};

export function doc(db, collection, id) {
  return { collection, id };
}

export async function updateDoc(ref, data) {
  if (!db._data[ref.collection]) db._data[ref.collection] = {};
  if (!db._data[ref.collection][ref.id]) db._data[ref.collection][ref.id] = {};
  Object.assign(db._data[ref.collection][ref.id], data);
}

export function increment(n) {
  return n;
}

export function collection(db, name, parentId, sub) {
  return { name, parentId, sub };
}

export async function addDoc(ref, data) {
  if (!db._data[ref.name]) db._data[ref.name] = [];
  db._data[ref.name].push(data);
}
