import storage from 'localforage';
export default storage.createInstance({
  name: process.env.REACT_APP_STORAGE_KEY,
  driver: storage.LOCALSTORAGE
});
