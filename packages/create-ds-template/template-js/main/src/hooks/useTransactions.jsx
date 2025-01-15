import { useQuery } from '@tanstack/react-query';
import axiosInstance, { microServices } from '../services/api/axiosInstance';

const fetchTransactions = async () => {
  try {
    const response = await axiosInstance(
      'get',
      '/hedera/accounts/0.0.12345/transactions',
      {},
      {
        server: microServices.BLOCK_URL,
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error in fetchTransactions:', error);
    throw error;
  }
};

const useTransactions = () => {
  return useQuery({ queryKey: ['transactions'], queryFn: fetchTransactions });
};

export default useTransactions;
