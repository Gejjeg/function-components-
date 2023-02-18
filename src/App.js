import { Sum } from "./Sum";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Welcome name="Bassey"/>
      <Sum numbers={[1, 2, 52]}/>
    </div>
  )
};