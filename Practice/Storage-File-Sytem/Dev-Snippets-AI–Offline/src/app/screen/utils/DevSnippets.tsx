const DevSnippets = [

  {
    id: 1,
    category: "React",
    icon: "react",
    iconColor: "#61DAFB",
    title: "Manage Component State Using useState",
    content: `const [count, setCount] = useState(0);`,
    tags: ["hooks", "state", "beginner"],
    fav: false,
  },
  {
    id: 2,
    category: "React",
    icon: "react",
    iconColor: "#61DAFB",
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
    icon: "react",
    iconColor: "#61DAFB",
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
    icon: "react",
    iconColor: "#61DAFB",
    title: "Share Global State Using Context",
    content: `const UserContext = createContext();`,
    tags: ["context", "state management", "intermediate"],
    fav: false,
  },


  {
    id: 5,
    category: "JavaScript",
    icon: "js",
    iconColor: "#F7DF1E",
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
    id: 6,
    category: "JavaScript",
    icon: "js",
    iconColor: "#F7DF1E",
    title: "Fetch Remote Data Using API",
    content: `const data = await fetch(url)
  .then(res => res.json());`,
    tags: ["fetch", "api", "intermediate"],
    fav: false,
  },
  {
    id: 7,
    category: "JavaScript",
    icon: "js",
    iconColor: "#F7DF1E",
    title: "Filter Arrays Based On Conditions",
    content: `const activeUsers = users.filter(
  user => user.active
);`,
    tags: ["array", "filter", "beginner"],
    fav: false,
  },
  {
    id: 8,
    category: "JavaScript",
    icon: "js",
    iconColor: "#F7DF1E",
    title: "Extract Properties Using Destructuring Syntax",
    content: `const { name, age } = user;`,
    tags: ["object", "destructuring", "beginner"],
    fav: true,
  },


  {
    id: 9,
    category: "TypeScript",
    icon: "code",
    iconColor: "#3178C6",
    title: "Create Interface",
    content: `interface User {
  id: number;
  name: string;
}`,
    tags: ["interface", "types"],
    fav: false,
  },
  {
    id: 10,
    category: "TypeScript",
    icon: "code",
    iconColor: "#3178C6",
    title: "Generic Function",
    content: `function identity<T>(value: T): T {
  return value;
}`,
    tags: ["generic"],
    fav: false,
  },


  {
    id: 11,
    category: "Python",
    icon: "python",
    iconColor: "#FFD43B",
    title: "Read Text File Using Context",
    content: `with open("file.txt", "r") as f:
    print(f.read())`,
    tags: ["file handling", "beginner"],
    fav: true,
  },
  {
    id: 12,
    category: "Python",
    icon: "python",
    iconColor: "#FFD43B",
    title: "Generate Lists With Comprehension Syntax",
    content: `squares = [x * x for x in range(10)]`,
    tags: ["list", "comprehension"],
    fav: true,
  },
  {
    id: 13,
    category: "Python",
    icon: "python",
    iconColor: "#FFD43B",
    title: "Loop Through Dictionary Key Values",
    content: `for key, value in data.items():
    print(key, value)`,
    tags: ["dictionary", "loop"],
    fav: true,
  },
  {
    id: 14,
    category: "Python",
    icon: "python",
    iconColor: "#FFD43B",
    title: "Parse JSON String Into Object",
    content: `import json

data = json.loads(json_string)`,
    tags: ["json", "parsing"],
    fav: true,
  },

  {
    id: 15,
    category: "CSS",
    icon: "css3-alt",
    iconColor: "#1572B6",
    title: "Center Content Using Flexbox Layout",
    content: `.container{
  display:flex;
  justify-content:center;
  align-items:center;
}`,
    tags: ["flexbox", "layout"],
    fav: true,
  },
  {
    id: 16,
    category: "CSS",
    icon: "css3-alt",
    iconColor: "#1572B6",
    title: "Create Responsive Three Column Grid",
    content: `.grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
}`,
    tags: ["grid"],
    fav: false,
  },
  {
    id: 17,
    category: "CSS",
    icon: "css3-alt",
    iconColor: "#1572B6",
    title: "Truncate Long Text With Ellipsis",
    content: `.text{
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}`,
    tags: ["text"],
    fav: false,
  },
  {
    id: 18,
    category: "CSS",
    icon: "css3-alt",
    iconColor: "#1572B6",
    title: "Apply Simple Dark Mode Theme",
    content: `body{
  background:#121212;
  color:#fff;
}`,
    tags: ["theme"],
    fav: false,
  },


  {
    id: 19,
    category: "HTML",
    icon: "html5",
    iconColor: "#E34F26",
    title: "Basic HTML Template",
    content: `<!DOCTYPE html>
<html>
<head></head>
<body></body>
</html>`,
    tags: ["html"],
    fav: false,
  },


  {
    id: 20,
    category: "Node.js",
    icon: "node-js",
    iconColor: "#68A063",
    title: "Simple Express Server",
    content: `const express=require("express");
const app=express();

app.listen(3000);`,
    tags: ["express"],
    fav: false,
  },


  {
    id: 21,
    category: "Git",
    icon: "git-alt",
    iconColor: "#F05032",
    title: "Clone Repository",
    content: `git clone https://github.com/user/repo.git`,
    tags: ["git"],
    fav: false,
  },

  {
    id: 22,
    category: "Docker",
    icon: "docker",
    iconColor: "#2496ED",
    title: "Run Docker Container",
    content: `docker run -p 3000:3000 image-name`,
    tags: ["docker"],
    fav: false,
  },
];

export default DevSnippets;