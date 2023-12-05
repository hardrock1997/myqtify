import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./Accordion.module.css";

export default function BasicAccordion({text}) {
  return (
    <>
    <h1 className={styles.text}>{text}</h1>
    <div className={styles.wrapper}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.icon}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={styles.accordionSummaryWrapper}
        >
          <Typography className={styles.accordionText}>is Qtify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Yes! it is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.icon}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={styles.accordionSummaryWrapper}
        >
          <Typography className={styles.accordionText}>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This feature is about to come!
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
    </>
  );
}
