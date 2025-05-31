const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function fetchRatings() {
  const response = await fetch(`${API_URL}/ratings`);
  if (!response.ok) throw new Error('Failed to fetch ratings');
  return response.json();
}

export async function addRating(ratingData) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/ratings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(ratingData),
  });
  if (!response.ok) throw new Error('Failed to add rating');
  return response.json();
}
