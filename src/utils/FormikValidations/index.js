export const REQUIRED_VALIDATION = (value) => {
  let error;
  if (!value) {
    error = 'This field is required*';
  }
  return error;
};
