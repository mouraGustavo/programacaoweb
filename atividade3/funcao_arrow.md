# Arrow functions <h1>
> Uma expressão **arrow function** possui uma sintaxe mais curta quando comparada a uma expressão de função e não tem seu próprio **this**, 
> **arguments**, **super** ou **new.target**. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, 
> e elas não podem ser usadas como construtoras (constructors).
 
Exemplo:
~~~javascript
var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

elements.map(function(element) {
  return element.length;
}); // esta sentença retorna o array: [8, 6, 7, 9]

// A função regular acima pode ser escrita como a arrow function abaixo
elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]

// Quando só existe um parâmetro, podemos remover os parênteses envolvendo os parâmetros:
elements.map(element => {
  return element.length;
}); // [8, 6, 7, 9]

// Quando a única sentença em uma arrow function é `return`, podemos remover `return` e remover
// as chaves envolvendo a sentença
elements.map(element => element.length); // [8, 6, 7, 9]

// Esta atribuição de parâmetro de destruição (destructing parameter) pode ser escrita como visto abaixo. Entretanto, note que
// não há um específico `"length"` para selecionar qual propriedade nós queremos obter. Ao invés disso, o nome literal
// da própria variável `length` é usado como a propriedade que queremos recuperar do objeto.
elements.map(({ length }) => length); // [8, 6, 7, 9]
~~~