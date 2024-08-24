import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchMentors = async () => {
  return axios.get(`${API_BASE_URL}/mentors`);
};

export const createBooking = async (bookingData) => {
  return axios.post(`${API_BASE_URL}/bookings`, bookingData);
};

export const fetchBookings = async (studentId) => {
  return axios.get(`${API_BASE_URL}/bookings`, { params: { studentId } });
};
