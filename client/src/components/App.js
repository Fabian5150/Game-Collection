import React, { useState } from "react";
import _ from 'lodash';
import { 
  Container, 
  Segment, 
  Grid, 
} from "semantic-ui-react"

import MyColumn from "./Column";

const App = () => {
  const [player, setPlayer] = useState(1)

  const renderMyColumns = _.times(9, (i) => (
    <MyColumn key={i} player={player} setPlayer={setPlayer}/>
  ))

  return (
    <Container>
      <Segment>
        <Grid columns={3}>
          {renderMyColumns}
        </Grid>
      </Segment>
    </Container>
  )
}

export default App;