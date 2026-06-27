const DevSnippets = [
  // React
  {
    id: 1,
    category: "React",
    title: "Manage Component State Using useState",
    content: `const [count, setCount] = useState(0);`,
    tags: ["hooks", "state", "beginner"],
    fav: false,
  },
  {
    id: 2,
    category: "React",
    title: "Run Side Effects With useEffect",
    content: `useEffect(() => {
  console.log("Mounted");
}, []);`,
    tags: ["hooks", "lifecycle", "beginner"],
    fav: false,
  },
  {
    id: 3,
    category: "React",
    title: "Create Reusable Toggle Custom Hook",
    content: `function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  return [value, () => setValue(!value)];
}`,
    tags: ["hooks", "custom", "intermediate"],
    fav: false,
  },
  {
    id: 4,
    category: "React",
    title: "Share Global State Using Context",
    content: `const UserContext = createContext();`,
    tags: ["context", "state management", "intermediate"],
    fav: false,
  },

  // Python
  {
    id: 5,
    category: "Python",
    title: "Read Text File Using Context",
    content: `with open("file.txt", "r") as f:
    print(f.read())`,
    tags: ["file handling", "beginner"],
    fav: true,
  },
  {
    id: 6,
    category: "Python",
    title: "Generate Lists With Comprehension Syntax",
    content: `squares = [x * x for x in range(10)]`,
    tags: ["list", "comprehension", "beginner"],
    fav: true,
  },
  {
    id: 7,
    category: "Python",
    title: "Loop Through Dictionary Key Values",
    content: `for key, value in data.items():
    print(key, value)`,
    tags: ["dictionary", "loop", "beginner"],
    fav: true,
  },
  {
    id: 8 ,
    category: "Python",
    title: "Parse JSON String Into Object",
    content: `import json

data = json.loads(json_string)`,
    tags: ["json", "parsing", "intermediate"],
    fav: true,
  },

  // CSS
  {
    id: 9,
    category: "CSS",
    title: "Center Content Using Flexbox Layout",
    content: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
    tags: ["flexbox", "layout", "beginner"],
    fav: true,
  },
  {
    id: 10,
    category: "CSS",
    title: "Create Responsive Three Column Grid",
    content: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}`,
    tags: ["grid", "layout", "intermediate"],
    fav: false,
  },
  {
    id: 11,
    category: "CSS",
    title: "Truncate Long Text With Ellipsis",
    content: `.text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}`,
    tags: ["text", "overflow", "beginner"],
    fav: false,
  },
  {
    id: 12,
    category: "CSS",
    title: "Apply Simple Dark Mode Theme",
    content: `body {
  background: #121212;
  color: #ffffff;
}`,
    tags: ["theme", "dark mode", "intermediate"],
    fav: false,
  },


  // JavaScript
  {
    id: 13,
    category: "JavaScript",
    title: "Optimize Events With Debounce Function",
    content: `function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}`,
    tags: ["performance", "optimization", "intermediate"],
    fav: true,
  },
  {
    id: 14,
    category: "JavaScript",
    title: "Fetch Remote Data Using API",
    content: `const data = await fetch(url)
  .then(res => res.json());`,
    tags: ["fetch", "api", "intermediate"],
    fav: false,
  },
  {
    id: 15,
    category: "JavaScript",
    title: "Filter Arrays Based On Conditions",
    content: `const activeUsers = users.filter(
  user => user.active
);`,
    tags: ["array", "filter", "beginner"],
    fav: false,
  },
  {
    id: 16,
    category: "JavaScript",
    title: "Extract Properties Using Destructuring Syntax",
    content: `const { name, age } = user;`,
    tags: ["object", "destructuring", "beginner"],
    fav: true,
  },
];

export default DevSnippets;