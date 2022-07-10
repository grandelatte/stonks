import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useContext } from 'react';
import TransactionContext from '../../contexts/TransactionContext';
import useCompletionToast from '../hooks/useCompletionToast';

export default function GetTransactions() {
  const { getAccessTokenSilently } = useAuth0;
  const [showSuccessToast, showErrorToast] = useCompletionToast();
  const { setTransactions } = useContext(TransactionContext);

  const getTransactions = async () => {
    const token = await getAccessTokenSilently();
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/transactions/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  };

  const runGetTransactions = () => {
    getTransactions()
      .then((response) => {
        console.log(response.data);
        setTransactions(response.data);
      })
      .catch((err) => showErrorToast(err));
  };

  return runGetTransactions();
}