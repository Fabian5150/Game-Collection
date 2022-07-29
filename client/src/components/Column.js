import React, { useState } from "react";
import { Grid, Icon } from "semantic-ui-react"

const MyColumn = (key) => {
  const [color, setColor] = useState('grey')
  const [icon, setIcon] = useState("square")

  const claimField = () => {
    if(color !== "grey"){
      return alert("field is already claimed, choose another one!")
    }

    setColor("red")
    setIcon("close")
  }

  return (
    <Grid.Column color={color} key={key} onClick={() => claimField()}>
      <Icon name={icon} size="massive" />
    </Grid.Column>
  )
}

export default MyColumn;