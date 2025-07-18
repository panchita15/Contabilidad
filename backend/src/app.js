const express = require('express');
const app = express();
app.use(express.json());

// Routers
const purchasesRouter = require('./routes/purchases');
const salesRouter = require('./routes/sales');
const dteRouter = require('./routes/dte');
const reportsRouter = require('./routes/reports');
const clientsRouter = require('./routes/clients');
const quotesRouter = require('./routes/quotes');
const bankingRouter = require('./routes/banking');
const payrollRouter = require('./routes/payroll');

app.use('/purchases', purchasesRouter);
app.use('/sales', salesRouter);
app.use('/dte', dteRouter);
app.use('/reports', reportsRouter);
app.use('/clients', clientsRouter);
app.use('/quotes', quotesRouter);
app.use('/banking', bankingRouter);
app.use('/payroll', payrollRouter);

app.get('/', (req, res) => {
  res.json({ message: 'ERP Backend API' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
