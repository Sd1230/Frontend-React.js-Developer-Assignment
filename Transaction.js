import React, { useState } from 'react';
import { validateWalletAddress, validateAmount } from '../services/validation';
import { submitDataToFirestore } from '../services/api';

function Transaction() {
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    const isWalletValid = validateWalletAddress(walletAddress);
    const isAmountValid = validateAmount(amount);

    if (!isWalletValid) {
      setError('Wallet address is not valid.');
      return;
    }

    if (!isAmountValid) {
      setError('Amount is not valid.');
      return;
    }

    // Submit data to Firestore
    try {
      await submitDataToFirestore({ walletAddress, amount });
      setError('');
    } catch (error) {
      setError('Error submitting data to Firestore.');
    }
  };

  return (
    <div>
      <h2>Transaction Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Wallet Address:
          <input type="text" value={walletAddress} onChange={(e) => setWalletAddress(e.target.value)} />
        </label>
        <br />
        <label>
          Amount:
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Transaction;
