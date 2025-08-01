# Book exercises

https://github.com/egonSchiele/grokking_algorithms

Algorithms and data structures are foundational concepts in computer science and programming, working in conjunction to enable efficient problem-solving and software development.

## Data Structures:
A data structure is a specific way of organizing and storing data in a computer's memory to facilitate efficient access, retrieval, and manipulation. 

Different data structures are suited for different types of data and operations. Common examples include:

 - **Arrays:** Ordered collections of elements, accessed by an index.
 - **Linked Lists:** Collections of nodes, where each node contains data and
   a reference to the next node.
 - **Stacks:** Last-In, First-Out (LIFO) data structures, where elements are
   added and removed from the same end.
 - **Queues:** First-In, First-Out (FIFO) data structures, where elements
   are added at one end and removed from the other.
 - **Trees:** Hierarchical data structures consisting of nodes connected by
   edges, such as binary trees or balanced trees.
 - **Graphs:** Collections of nodes (vertices) and connections (edges)
   representing relationships between entities.
 - **Hash Tables:** Data structures that map keys to values for quick
   lookups using a hash function.

## Algorithms:

An algorithm is a well-defined, step-by-step procedure or set of instructions for solving a specific problem or performing a computational task.

Algorithms operate on data, often utilizing specific data structures to achieve their goals efficiently. 

Examples of algorithms include:

 - **Sorting Algorithms:** Procedures to arrange elements in a specific
   order (e.g., bubble sort, quicksort, merge sort).
 - **Searching Algorithms:** Procedures to find a specific element within a
   data structure (e.g., linear search, binary search).
 - **Graph Algorithms:** Algorithms for traversing and analyzing graphs
   (e.g., Dijkstra's algorithm for shortest path, Breadth-First Search, Bellman-Ford).
 - **Dynamic Programming:** A technique for solving complex problems by
   breaking them down into smaller, overlapping subproblems.

### Sorting Algorithms:

**Quicksort:**

Quicksort is a highly efficient, comparison-based sorting algorithm that operates on the principle of "divide and conquer." It is widely recognized for its average-case performance, often outperforming other sorting algorithms like Merge Sort or Heap Sort on large, unordered datasets.

- Divide and Conquer: It breaks down the sorting problem into smaller, more manageable sub-problems.
- In-place (or nearly in-place): It typically requires minimal additional memory space beyond the input array itself.
- Average-case efficiency: It generally performs very well on average, though its worst-case performance can be slower (e.g., when dealing with already sorted or nearly sorted data with a poor pivot selection strategy).

### Searching Algorithms:
**Binary search:**

The binary search algorithm is an efficient search algorithm used to find the position of a target value **within a sorted array or list**. It operates on the principle of repeatedly dividing the search interval in half.
The search begins by defining a search interval, typically encompassing the entire sorted array, with a 'low' index pointing to the first element and a 'high' index pointing to the last.
In each step, the algorithm calculates the middle index within the current search interval.

### Graph Algorithms:

**Breadth-First Search (BFS):**

Breadth-First Search (BFS) is a graph traversal algorithm that systematically explores a graph or tree data structure. It operates by exploring all the nodes at the current depth level before moving on to nodes at the next depth level. This **level-by-level exploration** is achieved by utilizing a **queue data structure**, following the First-In, First-Out (**FIFO**) principle. 

- Shortest Path in Unweighted Graphs: BFS guarantees finding the shortest path between a source node and any other reachable node in an **unweighted graph**, as it explores nodes in increasing order of their distance from the source.
- Level Order Traversal: It naturally performs a level-by-level traversal of the graph or tree.
- Connected Components: BFS can be used to identify all nodes within a connected component of a graph.
- Cycle Detection: It can detect cycles in both directed and undirected graphs.
- Flood Fill Algorithm: The concept of BFS is applied in algorithms like flood fill, where areas are filled outward from a starting point. 

**Dijkstra:**

Dijkstra's algorithm is a graph search algorithm that finds the shortest paths from a single source node to all other nodes in a **weighted graph**. It is widely used in applications like network routing protocols and mapping services to find optimal routes.

- Single-source shortest path: It calculates the shortest path from a designated starting node to every other reachable node in the graph.
- Non-negative edge weights: The algorithm requires that all edge weights (distances or costs) in the graph be non-negative. If negative weights are present, other algorithms like Bellman-Ford are necessary.
- Not support cycles in graph: It only wokrs for graphs without cycle references.
- Greedy approach: It iteratively selects the unvisited node with the smallest tentative distance from the source and explores its neighbors, updating their distances if a shorter path is found.


## Relationship and Importance:

Data structures and algorithms are intrinsically linked. The choice of data structure often dictates the efficiency of the algorithms that operate on it, and conversely, algorithms are designed to leverage the strengths of particular data structures. Understanding and effectively applying data structures and algorithms is crucial for:

 - **Writing efficient and optimized code:** Reducing time and space
   complexity.
 - **Solving complex problems:** Breaking down problems into manageable
   steps.
 - **Building scalable applications:** Ensuring performance as data volume
   increases.
 - **Excelling in technical interviews:** Demonstrating fundamental computer
   science knowledge.
