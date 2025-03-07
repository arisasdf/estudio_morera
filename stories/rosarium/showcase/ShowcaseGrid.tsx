import { RosariumH3 } from "@rosarium/RosariumHeading";
import _ from "lodash";
import React, { Children, PropsWithChildren } from "react";

interface ShowcaseGridProps extends PropsWithChildren<any> {
  title: string;
  rowLength?: number;
}

const ShowcaseGrid: React.FC<ShowcaseGridProps> = ({ title, rowLength = 3, children }) => {
  const childrenRows = _.chunk(Children.toArray(children), rowLength);

  return <>
    <RosariumH3>{title}</RosariumH3>
    <table>
      {childrenRows.map((row) => (
        <tr>
          { row.map((child) => (
            <td style={{padding: "10px", border: "1px solid var(--tinctus-gray-200)"}}>{child}</td>
          ))}
        </tr>
      ))}
    </table>
  </>
};

export default ShowcaseGrid;
