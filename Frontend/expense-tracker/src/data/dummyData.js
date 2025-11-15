import { v4 as uuidv4 } from 'uuid'

export const categories = {
  income: ['Salary','Freelance','Investments','Gift'],
  expense: ['Rent','Groceries','Transport','Entertainment','Utilities']
}

export const summary = {
  totalIncome: 7200,
  totalExpenses: 3420,
  balance: 3780
}

export const transactions = [
  { id: uuidv4(), type: 'income', title: 'Monthly Salary', amount: 5000, category: 'Salary', date: '2025-11-01' },
  { id: uuidv4(), type: 'income', title: 'Side gig', amount: 1200, category: 'Freelance', date: '2025-11-10' },
  { id: uuidv4(), type: 'expense', title: 'Grocery run', amount: 220, category: 'Groceries', date: '2025-11-12' },
  { id: uuidv4(), type: 'expense', title: 'Electricity bill', amount: 80, category: 'Utilities', date: '2025-11-05' },
  { id: uuidv4(), type: 'expense', title: 'Movie night', amount: 40, category: 'Entertainment', date: '2025-11-08' }
]
