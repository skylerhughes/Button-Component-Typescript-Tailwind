import Button from "./components/Button"

export default function App() {
  return (
<main className="m-4">

<h1 className="text-4xl mb-4">Button components</h1>

<div className="space-x-4 space-y-4">
  <Button onClick={() => alert("Clicked")}>Default button</Button>
   </div>
    <Button variant="primary">Primary button</Button>
    <Button variant="secondary">Secondary button</Button>
    <Button variant="danger">Cancel button</Button>
    <div className="space-x-4 space-y-4">
    <Button size="sm">Small button</Button>
    <Button size="md">Medium button</Button>
    <Button size="lg">Large button</Button>
    </div>
</main>

  );
}
