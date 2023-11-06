import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Link from "@/components/Link/Link";
import TextBlock from "@/components/TextBlock/TextBlock";

const App = () => {
  return (
  <>
    <Button>Click</Button>
    <p>Testing my <Link>Link</Link> component</p>
    <Input label="label" />
    <TextBlock
      title="Title"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a erat a felis bibendum condimentum eu eget metus. Duis interdum est nec quam molestie sollicitudin. Pellentesque posuere viverra leo, non volutpat tellus pharetra ac. Donec quis nunc magna. Proin in eros id arcu euismod scelerisque."
    />
  </>
  )
}

export default App;
