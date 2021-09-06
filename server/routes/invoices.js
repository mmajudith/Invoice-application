import express from 'express';
import { getInvoices, createInvoices } from '../controller/invoices.js';

const router = express.Router();

router.get('/', getInvoices)
router.post('/', createInvoices)

export default router