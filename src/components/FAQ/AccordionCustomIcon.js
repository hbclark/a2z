import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export default function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}><span className="">01.What materials can I recycle with your company?</span>
</AccordionHeader>
        <AccordionBody>
        We recycle paper, cardboard, plastics, glass, and metals. Specific accepted types are listed on our website for reference.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        02.How should I prepare my items for recycling?
        </AccordionHeader>
        <AccordionBody>
        Please rinse containers, flatten cans and boxes, and remove non-recyclable elements like plastic lids and pizza box liners before recycling.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
       03.Do you offer residential recycling pick-up services?
        </AccordionHeader>
        <AccordionBody>
        Yes, we offer residential pick-ups in several areas. Please visit our website or contact us to check availability in your area.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        04.What happens to the materials after they are collected?
        </AccordionHeader>
        <AccordionBody>
        Collected materials are sorted, cleaned, and processed at our facility, then sold to manufacturers who reuse them in new products.
        </AccordionBody>
      </Accordion>
    </>
  );
}