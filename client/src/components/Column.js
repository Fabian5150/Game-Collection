import React, { useState } from "react";
import { Grid } from "semantic-ui-react"

const MyColumn = (key) => {
  const [color, setColor] = useState('green')

  const changeColor = () => {
    if(color === "green"){
      setColor("red")
    } else setColor('green')
  }

  return (
    <Grid.Column color={color} key={key} onClick={() => changeColor()}>⚫</Grid.Column>
  )
}

export default MyColumn;