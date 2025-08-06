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
- Time Complexity: Best and Average Case: O(N log N) | Worst Case: O(N^2) (occurs in scenarios like an already sorted array with a consistently poor pivot choice).

**Bubble sort:**

Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through a list, compares adjacent elements, and swaps them if they are in the wrong order (e.g., if the first element is larger than the second in an ascending sort). This process is repeated until no swaps are needed during a complete pass, indicating the list is sorted.
The name "bubble sort" comes from the way larger elements "bubble up" to the end of the list with each pass, similar to how air bubbles rise in water.

- Simplicity: It is one of the easiest sorting algorithms to understand and implement.
- Time Complexity: Its average and worst-case time complexity is O(N^2), making it inefficient for large datasets.
- In-place sorting: It sorts the array without requiring extra storage space.
- Stability: It is a stable sorting algorithm, meaning that elements with equal values maintain their relative order in the sorted output.

How it works:
- Iterate through the list: Start from the beginning of the list and compare the first element with the second.
- Compare and Swap: If the elements are in the wrong order (e.g., for ascending sort, if the current element is greater than the next), swap them.
- Move to the next pair: Continue this comparison and swapping process for all adjacent pairs in the list during a single pass.
- Repeat Passes: After one pass, the largest (or smallest, depending on the sort order) unsorted element will be in its correct position at the end of the unsorted portion of the list. Repeat the entire process for the remaining unsorted portion of the list.
- Termination: The algorithm terminates when a full pass through the list occurs without any swaps, meaning the list is sorted.


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
