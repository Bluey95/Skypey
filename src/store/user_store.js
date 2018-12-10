import { createStore } from "redux";
import user from '../reducers/user';

const user_store = createStore(user); 
export default user_store;