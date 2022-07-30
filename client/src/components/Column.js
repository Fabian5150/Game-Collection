import React, { useState } from "react";
import { Grid, Segment, Image } from "semantic-ui-react"

const MyColumn = (key) => {
  const [square, setSquare] = useState('empty')

  const claimField = () => {
    if(square !== "empty"){
      return alert("field is already claimed, choose another one!")
    }

    setSquare("p1")
  }

  return (
    <Grid.Column
      key={key} 
      onClick={() => claimField()}
    >
      
      <Segment basic>
        <Image src={`/images/square-${square}.png`}/>
      </Segment>
    </Grid.Column>
  )
}

export default MyColumn;