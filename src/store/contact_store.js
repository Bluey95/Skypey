import { createStore } from "redux";
import reducer from '../reducers/contacts';

const contact_store = createStore(reducer); 

export default contact_store;