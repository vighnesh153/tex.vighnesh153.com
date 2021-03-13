import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';

import MathComponent from "./MathComponent";

import data from "./data";
import Store from "./store";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: '100%',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabPanel: {
    width: 'calc(100% - 162px)',
    height: '100%',
    overflowY: 'auto',
  },
}));

function MyButton(props) {
  return (
    <Button
      variant={"outlined"}
      style={{height: props.height }}
      onClick={() => Store.buttonClick.publish(props.code)}
    >
      <MathComponent display tex={`\\large {${props.children}}`} />
    </Button>
  );
}

MyButton.propTypes = {
  inputIndex: PropTypes.number,
  height: PropTypes.number,
};

function Buttons() {
  const theme = useTheme();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Input types vertical tabs"
        className={classes.tabs}
      >
        {data.map((tab, index) => (
          <Tab key={index} label={tab.name} {...a11yProps(index)} />
        ))}
      </Tabs>
      {data.map((tab, tabIndex) => (
        <TabPanel key={tabIndex} className={classes.tabPanel} value={value} index={tabIndex}>
          <Box
            display={'grid'}
            justifyContent={'center'}
            gridTemplateColumns={`repeat(auto-fit, ${data[tabIndex].width}px)`}
            gridGap={theme.spacing(2.5)}
          >
            {data[tabIndex].inputs.map((input, inputIndex) => (
              <MyButton
                key={inputIndex}
                variant={"outlined"}
                height={data[tabIndex].height}
                code={input.code}
              >
                {input.name}
              </MyButton>
            ))}
          </Box>
        </TabPanel>
      ))}
    </div>
  );
}

export default Buttons;
