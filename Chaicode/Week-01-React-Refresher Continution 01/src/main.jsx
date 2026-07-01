import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById("root")).render(
// with render we can't use return
    <div>
        <h2>Day 02 React Refresher</h2>
        <App />

    </div>
)
