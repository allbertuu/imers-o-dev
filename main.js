let section = document.getElementById("historias");

const historias = [
  {
    titulo: "Superando o Câncer: Uma Nova Chance",
    autor: "Ana Silva",
    resumo:
      "A história inspiradora de Ana, que após um diagnóstico de câncer, decidiu transformar sua vida e ajudar outras pessoas.",
    categoria: "Saúde",
  },
  {
    titulo: "Do Zero ao Topo: A História de um Empreendedor",
    autor: "Pedro Santos",
    resumo:
      "A jornada de Pedro, que começou do nada e construiu um império, compartilhando suas estratégias e desafios.",
    categoria: "Carreira",
  },
  {
    titulo: "Perdendo o Medo de Viver",
    autor: "Maria Oliveira",
    resumo:
      "A história de Maria, que superou seus medos e encontrou a coragem para realizar seus sonhos.",
    categoria: "Vida",
  },
  {
    titulo: "A Força da Amizade em Tempos Difíceis",
    autor: "João Souza",
    resumo:
      "A história de João, que encontrou na amizade a força para superar um momento difícil.",
    categoria: "Amizade",
  },
  {
    titulo: "Viajando Solo e Descobrindo a Si Mesmo",
    autor: "Laura Santos",
    resumo:
      "A jornada de Laura, que decidiu viajar sozinha e descobriu uma nova versão de si mesma.",
    categoria: "Viagens",
  },
  {
    titulo: "Superando a Perda de um Entente Querido",
    autor: "Carlos Pereira",
    resumo:
      "A história de Carlos, que aprendeu a lidar com a dor da perda e a seguir em frente.",
    categoria: "Luto",
  },
  {
    titulo: "A Jornada de um Pai Solo",
    autor: "André Silva",
    resumo:
      "A história de André, que como pai solteiro, superou desafios e construiu uma família feliz.",
    categoria: "Família",
  },
  {
    titulo: "Do Bullying à Autoestima",
    autor: "Sofia Santos",
    resumo:
      "A história de Sofia, que superou o bullying e aprendeu a amar a si mesma.",
    categoria: "Superação",
  },
  {
    titulo: "A Adoção que Transformou Duas Vidas",
    autor: "Ana e Pedro",
    resumo: "A história de Ana e Pedro, que encontraram o amor na adoção.",
    categoria: "Família",
  },
];

let resultados = "";

for (let historia of historias) {
  resultados += `
    <article><h2>${historia.titulo}</h2>
    <p><strong>Autor:</strong> ${historia.autor}</p>
    <p>${historia.resumo}</p>
    <button class="botao-ler-historia">Desejo conhecer mais</button></article>
  `;
  section.innerHTML = resultados;
}
