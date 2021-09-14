import { combineReducer } from 'redux';

import invoices from './invoiceReducer'

export default combineReducer({ invoices })