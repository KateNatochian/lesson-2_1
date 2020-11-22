input = +prompt('Укажите количество чисел из ряда Фибоначчи для вывода',);
first = 0;
second = 1;
if (input == 1) {
  console.log(first);
  document.write(first);
} else if (input <= 0) {
  console.error('Ошибка');
  // document.write('Ошибка')
} else {
  console.log(first);
  console.log(second);
  document.write(first + ' ' + second);
}
for (i = 0; i < input - 2; i = i + 1) {
  third = first + second;
  console.log(third);
  document.write(' ' + third);
  first = second;
  second = third;
}
