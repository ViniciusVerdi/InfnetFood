export function FormatDate(dateInput) {
  if (!dateInput) {
    return 'Data indefinida';
  }

  const date = new Date(dateInput);

  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
