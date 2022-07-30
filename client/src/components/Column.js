import React, { useState } from "react";
import { Grid, Segment, Image } from "semantic-ui-react"

const MyColumn = ({player, setPlayer}) => {
  const [square, setSquare] = useState('empty')

  const claimField = () => {
    if(square !== "empty"){
      return alert("field is already claimed, choose another one!")
    }

    if(player === 1){
      setSquare("p1")
      setPlayer(2)
    } else {
      setSquare("p2")
      setPlayer(1)
    }
  }

  return (
    <Grid.Column onClick={() => claimField()}>
      <Segment basic>
        <Image src={`/images/square-${square}.png`}/>
      </Segment>
    </Grid.Column>
  )
}

export default MyColumn;