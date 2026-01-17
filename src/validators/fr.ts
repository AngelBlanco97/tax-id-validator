export const validateFR = (value: any): boolean => {
  if (typeof value !== "string") return false;

  const cleanValue = value.replace(/\s|-/g, "");

  if (!/^\d{9}$/.test(cleanValue) && !/^\d{14}$/.test(cleanValue)) {
    return false;
  }

  let sum = 0;
  let shouldDouble = false;

  for (let i = cleanValue.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanValue.charAt(i), 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};
