export const validatePhone = (phone: string): boolean => {
  const cleanPhone = phone.replace(/\D/g, "");
  return cleanPhone.length === 11 && cleanPhone.startsWith("7");
};

export const formatPhone = (value: string): string => {
  const phone = value.replace(/\D/g, "");
  if (phone.length === 0) return "";
  if (phone.length <= 1) return "+7";
  if (phone.length <= 4) return `+7 (${phone.slice(1)}`;
  if (phone.length <= 7) return `+7 (${phone.slice(1, 4)}) ${phone.slice(4)}`;
  if (phone.length <= 9)
    return `+7 (${phone.slice(1, 4)}) ${phone.slice(4, 7)}-${phone.slice(7)}`;
  return `+7 (${phone.slice(1, 4)}) ${phone.slice(4, 7)}-${phone.slice(7, 9)}-${phone.slice(9, 11)}`;
};
