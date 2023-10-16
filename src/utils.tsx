import * as React from "react";
/*
Wrapper components around regular divs to improve code readability
with nested divs
*/

export function HStack(
  props: React.HTMLAttributes<HTMLDivElement>
): React.ReactElement {
  const className = `flex flex-row ${props.className}`;
  return <div {...props} className={className}></div>;
}

export function VStack(
  props: React.HTMLAttributes<HTMLDivElement>
): React.ReactElement {
  const className = `flex flex-col ${props.className}`;
  return <div {...props} className={className}></div>;
}

export function Center(
  props: React.HTMLAttributes<HTMLDivElement>
): React.ReactElement {
  const className = `flex items-center justify-center ${props.className}`;
  return <div {...props} className={className}></div>;
}

export function Box(
  props: React.HTMLAttributes<HTMLDivElement>
): React.ReactElement {
  const className = `${props.className}`;
  return <div {...props} className={className}></div>;
}

export function Headings(
  props: React.HTMLAttributes<HTMLDivElement>
): React.ReactElement {
  const className = `font-custom text-2xl ${props.className}`;
  return <div {...props} className={className}></div>;
}