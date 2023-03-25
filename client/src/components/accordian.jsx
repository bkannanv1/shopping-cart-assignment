import React from "react";
import * as RadixAccordian from "@radix-ui/react-accordion";
import styles from "./accordian.module.css";

const { root, item, header, trigger, content, contentText } = styles;

function Accordian({ triggerText, children }) {
  return (
    <RadixAccordian.Root className={root} type="single" collapsible>
      <RadixAccordian.Item className={item} value="item-1">
        <AccordionTrigger>{triggerText}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </RadixAccordian.Item>
    </RadixAccordian.Root>
  );
}

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <RadixAccordian.Header className={header}>
      <RadixAccordian.Trigger className={trigger} {...props} ref={forwardedRef}>
        {children}
      </RadixAccordian.Trigger>
    </RadixAccordian.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <RadixAccordian.Content className={content} {...props} ref={forwardedRef}>
      <div className={contentText}>{children}</div>
    </RadixAccordian.Content>
  )
);

export { Accordian };
