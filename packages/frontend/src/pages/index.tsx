import React from "react";
import { Button } from "../shared/components/button";

const Web = () => {
  return (
    <div
      style={{
        padding: "15px",
        display: "flex",
        gap: "10px",
        flexDirection: "row",
      }}
    >
      <Button color="primary" variant="default">
        Primary
      </Button>
      <Button color="secondary" variant="default">
        Secondary
      </Button>
      <Button color="destructive" variant="default">
        Destructive
      </Button>
    </div>
  );
};

export default Web;
