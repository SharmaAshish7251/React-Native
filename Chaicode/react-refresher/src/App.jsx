import H1 from "./H1";

function App() {
    return (
        <div>

            {/* Single Value Props */}
            <H1 title="Props Value" />

            {/* Multi Value Props */}
            <H1 title="Multi Valur Props" desc="multi value props description" />
        </div>

    );
}

export default App;