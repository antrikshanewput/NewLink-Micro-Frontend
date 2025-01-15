import { useQuery } from '@tanstack/react-query';
import axiosInstance, { microServices } from '../services/api/axiosInstance';

const fetchProfile = async () => {
  const token = '';

  try {
    const response = await axiosInstance(
      'get',
      '/user',
      {},
      {
        server: microServices.AUTH_URL,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error.response || error.message);
    throw error;
  }
};

const useProfile = () => {
  return useQuery({ queryKey: ['profile'], queryFn: fetchProfile });
};

export default useProfile;
