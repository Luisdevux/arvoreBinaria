// Discente: Luis Felipe Lopes

import { ArvoreBinaria } from '../arvoreBinaria/BinaryTree';

describe('ArvoreBinaria', () => {
    let arvore: ArvoreBinaria;

    beforeEach(() => {
        arvore = new ArvoreBinaria();
    });

    // TESTES DE INSERIR
    test('deve criar uma árvore vazia', () => {
        expect(arvore.raiz).toBeNull();
    });

    test('deve inserir um único elemento como raiz', () => {
        arvore.inserir(10);

        expect(arvore.raiz).not.toBeNull();
        expect(arvore.raiz?.valor).toBe(10);
        expect(arvore.raiz?.esquerda).toBeNull();
        expect(arvore.raiz?.direita).toBeNull();
    });

    test('deve inserir múltiplos elementos corretamente', () => {
        arvore.inserir(10);
        arvore.inserir(5);
        arvore.inserir(15);
        arvore.inserir(3);
        arvore.inserir(7);

        // Verifica a raiz da árvore
        expect(arvore.raiz?.valor).toBe(10);

        // verifica o lado esquerdo
        expect(arvore.raiz?.esquerda?.valor).toBe(5);
        expect(arvore.raiz?.esquerda?.esquerda?.valor).toBe(3);
        expect(arvore.raiz?.esquerda?.direita?.valor).toBe(7);

        // verifica o lado direito
        expect(arvore.raiz?.direita?.valor).toBe(15);
    });

    test('deve criar a árvore completa com os 7 elementos', () => {
        arvore.inserir(10);
        arvore.inserir(5);
        arvore.inserir(15);
        arvore.inserir(3);
        arvore.inserir(7);
        arvore.inserir(12);
        arvore.inserir(18);

        // Verifica a raiz da árvore
        expect(arvore.raiz?.valor).toBe(10);

        // Vai verificando e esperando adicionando os valores corretos
        expect(arvore.raiz?.esquerda?.valor).toBe(5);
        expect(arvore.raiz?.direita?.valor).toBe(15);
        expect(arvore.raiz?.esquerda?.esquerda?.valor).toBe(3);
        expect(arvore.raiz?.esquerda?.direita?.valor).toBe(7);
        expect(arvore.raiz?.direita?.esquerda?.valor).toBe(12);
        expect(arvore.raiz?.direita?.direita?.valor).toBe(18);
    });

    test('deve insrir elementos em ordem crescente', () => {
        arvore.inserir(1);
        arvore.inserir(2);
        arvore.inserir(3);
        arvore.inserir(4);
        arvore.inserir(5);

        // Vai verificando os elementos a direita da árvore e seus nós filhos e inserindo em cada poisição
        expect(arvore.raiz?.valor).toBe(1);
        expect(arvore.raiz?.direita?.valor).toBe(2);
        expect(arvore.raiz?.direita?.direita?.valor).toBe(3);
        expect(arvore.raiz?.direita?.direita?.direita?.valor).toBe(4);
        expect(arvore.raiz?.direita?.direita?.direita?.direita?.valor).toBe(5);
    });

    test('deve insrir elementos em ordem decrescente', () => {
        arvore.inserir(5);
        arvore.inserir(4);
        arvore.inserir(3);
        arvore.inserir(2);
        arvore.inserir(1);

        expect(arvore.raiz?.valor).toBe(5);
        expect(arvore.raiz?.esquerda?.valor).toBe(4);
        expect(arvore.raiz?.esquerda?.esquerda?.valor).toBe(3);
        expect(arvore.raiz?.esquerda?.esquerda?.esquerda?.valor).toBe(2);
        expect(arvore.raiz?.esquerda?.esquerda?.esquerda?.esquerda?.valor).toBe(1);
    });

    test('deve lidar com valores duplicados', () => {
        arvore.inserir(10);
        arvore.inserir(5);
        arvore.inserir(15);
        arvore.inserir(10);
        arvore.inserir(5);
        arvore.inserir(15);

        expect(arvore.raiz?.valor).toBe(10);
        expect(arvore.raiz?.esquerda?.valor).toBe(5);
        expect(arvore.raiz?.direita?.valor).toBe(15);
    });

    // TESTES DE PERCORRER EM ORDEM
    test('deve retornar array vazio para árvore vazia', () => {
        const resultado = arvore.percorrerEmOrdem();
        expect(resultado).toEqual([]);
    });

    test('deve retornar valores em ordem crescente', () => {
        arvore.inserir(10);
        arvore.inserir(5);
        arvore.inserir(15);
        arvore.inserir(3);
        arvore.inserir(7);
        arvore.inserir(12);
        arvore.inserir(20);

        const resultado = arvore.percorrerEmOrdem();
        expect(resultado).toEqual([3, 5, 7, 10, 12, 15, 20]);
    });

    test('deve funcionar com valores inseridos em ordem crescente', () => {
        arvore.inserir(1);
        arvore.inserir(2);
        arvore.inserir(3);
        arvore.inserir(4);

        const resultado = arvore.percorrerEmOrdem();
        expect(resultado).toEqual([1, 2, 3, 4]);
    });

    test('deve funcionar com valores inseridos em ordem decrescente', () => {
        arvore.inserir(4);
        arvore.inserir(3);
        arvore.inserir(2);
        arvore.inserir(1);

        const resultado = arvore.percorrerEmOrdem();
        expect(resultado).toEqual([1, 2, 3, 4]);
    });

    // TESTES DE BUSCA
    test('deve encontrar elemento que existe na raiz', () => {
        arvore.inserir(20);
        arvore.inserir(8);
        arvore.inserir(12);
        arvore.inserir(10);

        expect(arvore.buscar(10)).toBe(true);
    });

    test('deve encontrar elemento na esquerda', () => {
        arvore.inserir(6);
        arvore.inserir(4);
        arvore.inserir(5);
        arvore.inserir(2);
        arvore.inserir(7);
        arvore.inserir(3);

        expect(arvore.buscar(5)).toBe(true);
        expect(arvore.buscar(3)).toBe(true);
    });

    test('deve encontrar elemento na direita', () => {
        arvore.inserir(8);
        arvore.inserir(3);
        arvore.inserir(9);
        arvore.inserir(6);
        arvore.inserir(15);
        arvore.inserir(11);
        
        expect(arvore.buscar(15)).toBe(true);
    });

    test('deve retornar false para elemento que não existe', () => {
        expect(arvore.buscar(18)).toBe(false);
        expect(arvore.buscar(-5)).toBe(false);
    });

    test('deve retornar false em árvore vazia', () => {
        expect(arvore.buscar(10)).toBe(false);
    });
});