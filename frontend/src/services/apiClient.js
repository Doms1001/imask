// frontend/src/services/apiClient.js
// small helper with fallback to your PC IP so mobile Expo can reach it
const DEFAULT_BASE = "http://192.168.0.102:3000"; // replace if different
const BASE_URL = DEFAULT_BASE;

export async function testBackend() {
  const res = await fetch(`${BASE_URL}/ping`).catch((e) => {
    throw new Error("Backend unreachable: " + e.message);
  });
  if (!res.ok) throw new Error("Backend responded with non-OK");
  return res.json();
}

export async function getItems() {
  const res = await fetch(`${BASE_URL}/items`);
  if (!res.ok) throw new Error("Failed to fetch items");
  return res.json();
}

export default {
  testBackend,
  getItems,
  BASE_URL,
};
