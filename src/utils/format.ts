
function formatDateDayMonth(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');

  return `${day}/${month}`;
}

function formatDateToAmerican(inputDate: string): string {
  const [day, month, year] = inputDate.split('-');
  return `${year}-${month}-${day}`;
}

function formatDate(): string {
  const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return `${month} ${day}, ${year}`;
}

console.log(formatDate()); // Exemplo de saída: Abril 10, 2021


export { formatDateDayMonth, formatDateToAmerican };

