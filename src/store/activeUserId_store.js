import { createStore } from "redux";
import activeUserId from '../reducers/activeUserId';

const activeUserId_store = createStore(activeUserId); 

export default activeUserId_store;