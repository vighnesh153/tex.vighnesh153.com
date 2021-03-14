import React from "react";
// import axios from "axios";

import {useTheme} from "@material-ui/core";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import MathComponent from "./MathComponent";

import html2canvas from "html2canvas";

import Store from "./store";

function EditorAndPreview() {
  const theme = useTheme();

  const textFieldRef = React.useRef();
  const [editorValue, setEditorValue] = React.useState("");

  React.useEffect(() => {
    const subscription = Store.buttonClick.subscribe((value) => {
      const textArea = textFieldRef.current.querySelector('textarea');
      if (!textArea) {
        return;
      }
      const startIndex = parseInt(`${textArea.selectionStart}`);
      const endIndex = parseInt(`${textArea.selectionEnd}`);

      const s1 = editorValue.slice(0, startIndex);
      const s2 = editorValue.slice(endIndex);

      setEditorValue(s1 + value + s2);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [editorValue]);

  const download = () => {
    html2canvas(document.querySelector("#preview-content")).then(canvas => {
      const imageData = canvas.toDataURL("image/png");
      console.log(canvas.toDataURL());
      const link = document.createElement('a');
      link.download = 'image.png';
      link.href = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
      link.click();
    });
  };

  // const upload = () => {
  //   html2canvas(document.querySelector("#preview-content")).then(canvas => {
  //     const imageData = canvas.toDataURL().split(',')[1];
  //     axios.post("https://api.imgur.com/3/upload", {
  //       image: imageData,
  //     }, {
  //       headers: {
  //         Authorization: `Client-ID cd249eb8713e884`,
  //       }
  //     })
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   });
  // };

  const styles = {
    root: {
      height: '100%',
    },
    section: {
      height: '100%',
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      border: `1px solid ${theme.palette.divider}`,
    },
    sectionTitle: {
      width: '100%',
      maxWidth: 'unset',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      border: `1px solid ${theme.palette.divider}`,
      borderLeft: 'none',
      borderRight: 'none',
    },
    sectionContent: {
      width: '100%',
      position: 'relative',
      // padding: theme.spacing(1),
      maxWidth: 'unset',
      overflow: 'auto',
    },
  };

  return (
    <Grid container style={styles.root}>
      <Box style={styles.section}>
        <Grid
          item container xs={1} alignItems={"center"}
          justify={"flex-start"} style={styles.sectionTitle}
        >
          <Typography variant={"h6"} style={{fontWeight: 'bold'}}>
            Editor
          </Typography>
        </Grid>
        <Grid item xs={11} style={styles.sectionContent}>
          <TextField
            multiline
            ref={textFieldRef}
            variant={"outlined"}
            style={{width: '100%'}}
            rows={15}
            value={editorValue}
            onChange={(e) => setEditorValue(e.target.value)}
          />
        </Grid>
      </Box>
      <Box style={styles.section}>
        <Grid
          item container xs={1} alignItems={"center"}
          justify={"space-between"} style={styles.sectionTitle}
        >
          <Typography variant={"h6"} style={{fontWeight: 'bold'}}>
            Preview
          </Typography>
          <Button onClick={download} variant={"outlined"}>
            Download
          </Button>
        </Grid>
        <Grid item xs={11} style={styles.sectionContent}>
          <Box padding={2} id="preview-content">
            <MathComponent display tex={editorValue} />
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
}

export default EditorAndPreview;
