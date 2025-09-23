// https://leetcode.com/problems/detonate-the-maximum-bombs/description/
// bombs[i] = [xi, yi, ri]
// X-coordinate, Y-coordinate, radius

function maximumDetonation(bombs) {
  const n = bombs.length;

  // 🔗 Construir grafo de adjacências
  // graph[i] = array de bombas que a bomba i pode detonar
  // const graph = Array.from({ length: n }, () => []);

  const graph = new Map();
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  console.log(graph);

  // Para cada par de bombas, verificar se uma pode detonar a outra
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        const [x1, y1, r1] = bombs[i];
        const [x2, y2] = bombs[j];

        // 📏 Calcular distância euclidiana ao quadrado
        const distanceSquared = (x1 - x2) ** 2 + (y1 - y2) ** 2;
        const radiusSquared = r1 ** 2;

        // Se a distância <= raio, então i pode detonar j
        if (distanceSquared <= radiusSquared) {
          graph.set(i, [...graph.get(i), j]);
          // graph[i].push(j);
        }
      }
    }
  }
  console.log(graph);
  let maxDetonations = 0;

  // 🔥 Para cada bomba como ponto inicial
  for (let i = 0; i < n; i++) {
    const visited = new Set();
    const detonationCount = dfs(i, graph, visited);
    maxDetonations = Math.max(maxDetonations, detonationCount);
  }

  return maxDetonations;
}

/**
 * DFS para contar quantas bombas são detonadas em cascata
 * @param {number} bombIndex - índice da bomba atual
 * @param {number[][]} graph - grafo de adjacências
 * @param {Set} visited - bombas já visitadas
 * @return {number} número total de bombas detonadas
 */
function dfs(bombIndex, graph, visited) {
  if (visited.has(bombIndex)) {
    return 0;
  }

  visited.add(bombIndex);
  let count = 1; // Conta a bomba atual

  // 🌀 Recursivamente detonar bombas adjacentes
  for (const neighbor of graph.get(bombIndex)) {
    count += dfs(neighbor, graph, visited);
  }

  return count;
}

const bombs1 = [
  [2, 1, 3],
  [6, 1, 4],
];
console.log(`Teste 1 (result 2): ${maximumDetonation(bombs1)}`); // Esperado: 2

const bombs2 = [
  [1, 1, 5],
  [10, 10, 5],
];
console.log(`Teste 2 (result 1): ${maximumDetonation(bombs2)}`); // Esperado: 1

const bombs3 = [
  [1, 2, 3],
  [2, 3, 1],
  [3, 4, 2],
  [4, 5, 3],
  [5, 6, 4],
];
console.log(`Teste 3 (result 5): ${maximumDetonation(bombs3)}`); // Esperado: 5
