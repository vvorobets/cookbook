import React from 'react';
import ButtonControlsGroup from "../components/ButtonControlsGroup";

import { Grid, Header, Image } from "semantic-ui-react";

const MainHeader = () => (
      <React.Fragment>
        <Header as="h1" textAlign="center">
          <hr/>
          <Image
            circular
            src="https://www.seriouseats.com/images/2016/03/20150203-menu-yu-xian-sichuan-eggplant-fish-flavor-12-thumb-1500xauto-418828.jpg"
          />
          Cookbook Academy<br/>
          <Header.Subheader>
          <br/>Manage your favourite cook recipes.<hr/>
          </Header.Subheader>
        </Header>
        <Grid>
          <Grid.Row centered>{ButtonControlsGroup()}</Grid.Row>
        </Grid>
      </React.Fragment>
);

export default MainHeader;