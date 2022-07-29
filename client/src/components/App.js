import React from "react";
import _ from 'lodash';
import { 
  Button, 
  Container, 
  Segment, 
  Grid, 
} from "semantic-ui-react"

import MyColumn from "./Column";

const App = () => {
  const renderMyColumns = _.times(9, (i) => (
    <MyColumn key={i} />
  ))

  return (
    <Container>
      <Segment>
        <Grid padded columns={3}>
          {renderMyColumns}
        </Grid>
      </Segment>
    </Container>
  )
}

export default App;