import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FooterAccordion() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Hakkımızda
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="flex flex-col items-start justify-center">
              <span>Tarihçe</span>
              <span>Şirketimiz</span>
              <span>Mağazalarımız</span>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
