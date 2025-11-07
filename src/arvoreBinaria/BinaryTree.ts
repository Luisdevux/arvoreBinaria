// Discente: Luis Felipe Lopes

// Classe que representa os nós da árvore
class arvoreNo {
    valor: number;                  // O valor vai ficar guardado aqui
    esquerda: arvoreNo | null;      // Aqui vai ficar o nó filho da esquerda
    direita: arvoreNo | null;       // Aqui vai ficar o nó filho da direita

    constructor(valor: number) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}


// Classe que representa a Árvore em si
class ArvoreBinaria {
    raiz: arvoreNo | null;                                              // A raiz é o topo da árvore, o primeiro nó, o primeiro elemento add na árvore


    constructor() {
        this.raiz = null;                                               // A árvore vai começar vazia, para depois ir fazendo as verificações e inserir
    }

    inserir(valor: number): void {
        const novoNo = new arvoreNo(valor);

        if(this.raiz === null) {
            this.raiz = novoNo;                                         // Se a árvore está vazia, então a raiz vai receber o valor

        } else {
            this.inserirRecursivamente(this.raiz, novoNo);              // Se já tiver algum valor na raiz, então chama a função recursiva para adicionar um novo nó

        }
    }

    private inserirRecursivamente(noAtual: arvoreNo, novoNo: arvoreNo): void {         // Método privado que vai encontrar e inserir o novo nó após as verificações
        // Se o novo valor é menor, então direciona ele para a esquerda do nó atual
        if(novoNo.valor < noAtual.valor) {
            if(noAtual.esquerda === null) {
                // Se estiver vazio, insere aqui
                noAtual.esquerda = novoNo;
            } else {
                // Se não estiver vazio, vai continuar buscando
                this.inserirRecursivamente(noAtual.esquerda, novoNo);
            }
        }
        // Já se o novo valor é maior, então direciona ele para a direita do nó atual
        else {
            if(noAtual.direita === null) {
                noAtual.direita = novoNo;
            } else {
                this.inserirRecursivamente(noAtual.direita, novoNo);
            }
        }
    }

    percorrerEmOrdem(): number[] {
        const resultado: number[] = [];                                                 // Array que vai guardar os valores na ordem
        this.percorrerRecursivamente(this.raiz, resultado);
        return resultado;
    }

    percorrerRecursivamente(noArvore: arvoreNo | null, resultado: number[]): void {     // Método privado que vai percorrer a árvore e guardar os valores em ordem
        if(noArvore !== null) {
            // Primeiro visita todos os nós da esquerda
            this.percorrerRecursivamente(noArvore.esquerda, resultado);

            // Depois visita o nó atual
            resultado.push(noArvore.valor);

            // Agora, ele vai visitar todos os nós da direita
            this.percorrerRecursivamente(noArvore.direita, resultado);
        }
    }

    exibirArvore(): void {
        const valores = this.percorrerEmOrdem();
        console.log("Árvore em ordem:", valores.join(" -> "));
    }


    buscar(valor: number): boolean {
        return this.buscarRecursivamente(this.raiz, valor);
    }

    private buscarRecursivamente(noAtual: arvoreNo | null, valor: number): boolean {
        if(noAtual === null) {
            return false;                           // Não encontrou o valor
        }

        if(valor === noAtual.valor) {
            return true;                            // Encontrou o valor
        }

        // Se o valor é menor, busca na esquerda
        if(valor < noAtual.valor) {
            return this.buscarRecursivamente(noAtual.esquerda, valor);
        }
        // Se o valor é maior, busca na direita
        else {
            return this.buscarRecursivamente(noAtual.direita, valor);
        }
    }
}

export { ArvoreBinaria, arvoreNo };