import { RosariumH3 } from "@rosarium/RosariumHeading";
import _ from "lodash";
import React, { Children, PropsWithChildren } from "react";

interface ShowcaseGridProps extends PropsWithChildren<any> {
  title: string;
  columns?: number;
}

const ShowcaseGrid: React.FC<ShowcaseGridProps> = ({
  title,
  columns = 3,
  children,
}) => {
  const childrenRows = _.chunk(Children.toArray(children), columns);

  return (
    <>
      <RosariumH3>{title}</RosariumH3>
      <table>
        <tbody>
          {childrenRows.map((row, rIndex) => (
            <tr key={rIndex}>
              {row.map((child, dIndex) => (
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid var(--tinctus-gray-200)",
                    verticalAlign: "middle",
                  }}
                  key={`${rIndex}-${dIndex}`}
                >
                  {child}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ShowcaseGrid;
