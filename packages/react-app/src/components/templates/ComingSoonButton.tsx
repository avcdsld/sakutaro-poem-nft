import React from "react";

import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const ComingSoonButton: React.FC<{ label: string; max: number }> = (props) => {
  return (
    <>
      <div>
        <Text align="center" color="white" weight="bold">
          {props.label}
        </Text>

        <div className="m-auto p-4">
          <Button color="gray" rounded={true}>
            Coming Soon !
          </Button>
        </div>

        <div style={{ textAlign: "center", fontSize: "0.8em" }} className="flex items-center justify-center mb-10">
          <Text align="center" color="white">
            &nbsp;
          </Text>
        </div>
      </div>
    </>
  );
};
