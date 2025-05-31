const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function fetchStores() {
  const response = await fetch(`${API_URL}/stores`);
  if (!response.ok) throw new Error('Failed to fetch stores');
  return response.json();
}

export async function addStore(storeData) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/stores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(storeData),
  });
  if (!response.ok) throw new Error('Failed to add store');
  return response.json();
}
