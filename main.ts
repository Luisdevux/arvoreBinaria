import { ArvoreBinaria } from './src/arvoreBinaria/BinaryTree';

console.log("Criando a árvore e adicionando elementos:\n");

const arvore = new ArvoreBinaria();

// Inserir
arvore.inserir(10);
arvore.inserir(5);
arvore.inserir(15);
arvore.inserir(3);
arvore.inserir(7);

console.log("Elementos adicionados:\n");

console.log("Raiz:", arvore.raiz);     // O primeiro número ali foi 10, então deve mostar 10 na raiz

// Percorrer em ordem
console.log("\nExibindo em ordem crescente:");
arvore.exibirArvore();

// Buscar elementos
console.log("\nBuscando os elementos:");
console.log(`7: ${arvore.buscar(7)}`);
console.log(`15: ${arvore.buscar(15)}`);
console.log(`100: ${arvore.buscar(100)}`);