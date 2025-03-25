import {create} from 'zustand';

const airportStore = create((set) => ({
  airport: null,
  setAirport: (airport:any) => set({ airport }),
}));

export default airportStore;