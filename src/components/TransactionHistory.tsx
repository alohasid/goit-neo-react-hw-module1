import React from "react";

interface Transaction {
    id: string;
    type: string;
    amount: string;
    currency: string;
}

interface TransactionHistoryProps {
    items: Transaction[];
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ items }) => {
    return (
        <table className="transaction-history">
            <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>
            <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default TransactionHistory;