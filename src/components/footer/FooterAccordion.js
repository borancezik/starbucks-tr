import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FooterAccordion({ SubItems, Title, PanelName }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === PanelName}
      onChange={handleChange(PanelName)}
      sx={{ boxShadow: 0 }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ width: "33%", flexShrink: 0, fontSize: 23 }}>
          {Title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <div className="flex flex-col items-start justify-center text-sm">
            {SubItems.map((item, index) => (
              <span key={index}>{item?.Title}</span>
            ))}
          </div>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
