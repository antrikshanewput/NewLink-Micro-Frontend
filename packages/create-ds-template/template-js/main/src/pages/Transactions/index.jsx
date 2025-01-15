import React from 'react';
import useTransactions from '../../hooks/useTransactions';
import { Page, PageContent } from '../../components/Page';

export default function Transactions() {
  const { data, isLoading } = useTransactions();
  if (isLoading) return <p>Loading...</p>;

  return (
    <Page pt={0} mt='-1.25rem' containerSize='md' overflow={'hidden'}>
      <PageContent pt={'40px'}>
        <div>
          <h1>Transactions</h1>
          {data?.length === 0 ? (
            <p>No transactions found.</p>
          ) : (
            <ul>
              {data?.map((transaction) => (
                <li key={transaction.transactionId}>
                  <p>
                    <strong>Transaction ID:</strong> {transaction.transactionId}
                  </p>
                  <p>
                    <strong>Status:</strong> {transaction.status}
                  </p>
                  <p>
                    <strong>Memo:</strong> {transaction.memo}
                  </p>
                  <p>
                    <strong>Type:</strong> {transaction.type}
                  </p>
                  <p>
                    <strong>Timestamp:</strong> {transaction.timestamp}
                  </p>
                  <h4>Transfers:</h4>
                  <ul>
                    {transaction?.transfers.slice(transaction.transfers.length - 2).map((transfer, index) => (
                      <li key={index}>
                        <p>
                          <strong>Account:</strong> {transfer.account}
                        </p>
                        <p>
                          <strong>Amount:</strong> {transfer.amount}
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
      </PageContent>
    </Page>
  );
}
