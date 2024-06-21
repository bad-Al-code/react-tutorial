# React Tutorial

#### Virtual DOM

- Virual DOM is a concept implemented by libraries like REACT to improve performance and optimize updates.
- The Virtual DOM is a lightweight, in-memory representation of the actual DOM (Document Object Model). React creates a copy of the real DOM, which it uses to detect changes and efficiently update the real DOM.
- _Render_:- When a component’s state or props change, React re-renders the component, creating a new Virtual DOM tree.
- _Diffing_:- React compares this new Virtual DOM tree with the previous one to identify what has changed (a process known as **"reconciliation"**).
- **Patching**:- React then updates the actual DOM only where changes have been detected, minimizing the number of updates and thus improving performance.
- **BENEFITS**
  - _Performance_: By reducing the number of direct manipulations to the actual DOM, which is slow and resource-intensive, React can make updates much faster.
  - _Abstraction_: Developers can work with an abstract version of the UI and let React handle the efficient updates, simplifying the development process.

#### Fibre

**[React Fibre Architecture](https://github.com/acdlite/react-fiber-architecture)**

## License

[ChaiAurCode](https://www.youtube.com/@chaiaurcode)
