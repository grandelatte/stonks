export default function authenticationHeader() {
  const token = sessionStorage.getItem('token');
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
}
