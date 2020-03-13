import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Fab from'@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import VoicemailOutlinedIcon from '@material-ui/icons/VoicemailOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';


import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selector: "one",
    };
  }

  render() {

    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#ffffff',
        },
        secondary: {
          light: '#0066ff',
          main: '#ffffff',
          contrastText: '#3f4a75',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
      },
    });
    return (
      <ThemeProvider theme={theme}>
        <div className="App bg">
          <Container maxWidth="m">
            <Grid 
              container
              justify="center"
              className="bg main_wrapper"
            >
              <Grid 
                item
                className="txt_1"
              >
                  Are you making the most of your<br/>money <span className="txt_2">whatever<br/>your life stage ?</span>
                  <List 
                    component="nav"
                    className="list"
                  >
                    <ListItem
                      button
                      className={ this.state.selector === "one"? "listItem list_selected": "listItem" }
                    >
                        <ChevronRightIcon />
                        Getting Started
                    </ListItem>
                    <ListItem
                      className={ this.state.selector === "two"? "listItem list_selected": "listItem" }
                    >
                        <ChevronRightIcon />
                        Focusing on the future
                    </ListItem>
                    <ListItem
                      className={ this.state.selector === "three"? "listItem list_selected": "listItem" }
                    >
                        <ChevronRightIcon />
                        Thinking about your retirement
                    </ListItem>
                    <ListItem
                      className={ this.state.selector === "four"? "listItem list_selected": "listItem" }
                    >
                        <ChevronRightIcon />
                        Enjoying your retirement
                    </ListItem>
                    <ListItem
                      className={ this.state.selector === "five"? "listItem list_selected": "listItem" }
                    >
                        <ChevronRightIcon />
                        Creating a legacy
                    </ListItem>
                  </List>
              </Grid>
              <Grid 
                item
                className="pic_1_1"
              >
                <div 
                  className={ "pic_"+this.state.selector }>
                <div className="inner_row row_1">
                    <div className="btn btn_top">
                      <Fab
                        color="primary" 
                        aria-label="getting started"
                        className={ this.state.selector === "one"? "selected": "fab" }
                        onClick={() => this.setState({ selector: "one" })}
                      >
                        <AccountBalanceOutlinedIcon />
                      </Fab>
                    </div>
                </div>
                <div className="inner_row row_2">
                    <div className="btn btn_lh">
                      <Fab 
                        color="primary" 
                        aria-label="focusing on the future"
                        className={ this.state.selector === "five"? "selected": "fab" }
                        onClick={() => this.setState({ selector: "five" })}
                      >
                        <VoicemailOutlinedIcon />
                      </Fab>
                    </div>
                    <div className="btn btn_rh">
                      <Fab 
                        color="primary" 
                        aria-label="thinking about retirement"
                        // className="fab"
                        className={ this.state.selector === "two"? "selected": "fab" }
                        onClick={() => this.setState({ selector: "two" })}
                      >
                        <VpnKeyOutlinedIcon />
                      </Fab>
                    </div>
                </div>
                <div className="inner_row row_3">
                    <div className="btn btn_btm_lh">
                      <Fab 
                        color="primary" 
                        aria-label="enjoying your retirement"
                        className={ this.state.selector === "four"? "selected": "fab" }
                        onClick={() => this.setState({ selector: "four" })}
                      >
                        <LocalAtmOutlinedIcon />
                      </Fab>
                    </div>
                    <div className="btn btn_btm_rh">
                      <Fab 
                        color="primary" 
                        aria-label="add"
                        className={ this.state.selector === "three"? "selected": "fab" }
                        onClick={() => this.setState({ selector: "three" })}
                      >
                        <BathtubOutlinedIcon />
                      </Fab>
                    </div>
                </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

// function App() {

//   let state ={ selector: "one" }

//   function changeMenu(_s){
//     state.selector = _s;
//     console.log("Change", state.selector);
//   }
//   // better as abstract
//   const theme = createMuiTheme({
//     palette: {
//       primary: {
//         main: '#ffffff',
//       },
//       secondary: {
//         light: '#0066ff',
//         main: '#ffffff',
//         contrastText: '#3f4a75',
//       },
//       contrastThreshold: 3,
//       tonalOffset: 0.2,
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <div className="App bg">
//         <Container maxWidth="m">
//           <Grid 
//             container
//             justify="center"
//             className="bg main_wrapper"
//           >
//             <Grid 
//               item
//               className="txt_1"
//             >
//                 Are you making the most of your money <span className="txt_2">whatever your life stage</span>
//                 <List 
//                   component="nav"
//                   className="list"
//                 >
//                   <ListItem
//                     button
//                     className="listItem"
//                   >
//                       <ChevronRightIcon />
//                       Getting Started
//                   </ListItem>
//                   <ListItem
//                     className="listItem"
//                   >
//                       <ChevronRightIcon />
//                       Focusing on the future
//                   </ListItem>
//                   <ListItem
//                     className="listItem"
//                   >
//                       <ChevronRightIcon />
//                       Thinking about your retirement
//                   </ListItem>
//                   <ListItem
//                     className="listItem"
//                   >
//                       <ChevronRightIcon />
//                       Enjoying your retirement
//                   </ListItem>
//                   <ListItem
//                     className="listItem"
//                   >
//                       <ChevronRightIcon />
//                       Creating a legacy
//                   </ListItem>
//                 </List>
//             </Grid>
//             <Grid 
//               item
//               className="pic_1_1"
//             >
//               <div className="pic_1">
//               {this.state.selector}
//               <div className="inner_row row_1">
//                   <div className="btn">
//                     <Fab
//                       color="primary" 
//                       aria-label="getting started"
//                       className={ state.selector === "one"? "selected": null }
//                       size="large"
//                       onClick={() => { changeMenu('one') }}
//                     >
//                       <AccountBalanceOutlinedIcon />
//                     </Fab>
//                   </div>
//               </div>
//               <div className="inner_row row_2">
//                   <div className="btn btn_lh">
//                     <Fab 
//                       color="primary" 
//                       aria-label="focusing on the future"
//                       className="fab"
//                       onClick={() => { changeMenu('two') }}
//                     >
//                       <VoicemailOutlinedIcon />
//                     </Fab>
//                   </div>
//                   <div className="btn btn_rh">
//                     <Fab 
//                       color="primary" 
//                       aria-label="thinking about retirement"
//                       className="fab"
//                     >
//                       <VpnKeyOutlinedIcon />
//                     </Fab>
//                   </div>
//               </div>
//               <div className="inner_row row_3">
//                   <div className="btn btn_btm_lh">
//                     <Fab 
//                       color="primary" 
//                       aria-label="enjoying your retirement"
//                       className="fab"
//                     >
//                       <LocalAtmOutlinedIcon />
//                     </Fab>
//                   </div>
//                   <div className="btn btn_btm_rh">
//                     <Fab 
//                       color="primary" 
//                       aria-label="add"
//                       className="fab"
//                     >
//                       <BathtubOutlinedIcon />
//                     </Fab>
//                   </div>
//               </div>
//               </div>
//             </Grid>
//           </Grid>
//         </Container>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;
