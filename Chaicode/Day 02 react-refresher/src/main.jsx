import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById("root")).render(
// with render we can't use return
    <div>
        <App />
        <h2>React Refresher</h2>

    </div>
)
