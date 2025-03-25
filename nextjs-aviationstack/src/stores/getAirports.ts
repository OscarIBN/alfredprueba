import axios from 'axios';
import { create } from 'zustand';

interface StoreState {
    data: any | null;
    isLoading: boolean;
    error: string | null;
    limit: number;
    offset: number;
    fetchData: (limit: any, offset: any) => Promise<void>;
}

const useStore = create<StoreState>((set) => ({
    data: {},
    isLoading: false,
    error: null,
    limit: 5,
    offset: 0,
    fetchData: async (limit: any, offset: any) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get(`https://api.aviationstack.com/v1/airports?limit=${limit}&offset=${offset}&access_key=c2f20092eebba28005be84e3b0c3f844`);
            set({ data: response.data, isLoading: false });
        } catch (error: any) {
            set({ error: error.message, isLoading: false });
        }
    }
}));

export default useStore;