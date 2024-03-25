import { fields } from "./data";
import { Form } from "./Form";

export default function App() {
  return (
    <div className="App">
      <h1>Dynamic form</h1>
      <Form fields={fields} />
    </div>
  );
}
