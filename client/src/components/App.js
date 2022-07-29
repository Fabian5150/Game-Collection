import React from "react";
import { Button, Icon } from "semantic-ui-react"

const App = () => {
  return (
    <div>
      <Button animated="fade">
        <Button.Content visible>Fang mich doch</Button.Content>
        <Button.Content hidden>heheheha</Button.Content>
      </Button>
    </div>
  )
}

export default App;