import React, { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function PatrentComponent() {
  const [Age, setAge] = useState(0);
  const [salary, setSalary] = useState(1000);

  const incrementAge = useCallback(() => {
    setAge(Age + 1);
  }, [Age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title title={"Use call Back"} />
      <Count Count={Age} />
      <Button handleClick={incrementAge} lable={"Add age"}>
        Increment Age
      </Button>
      <Count Count={salary} />
      <Button handleClick={incrementSalary} lable={"Add age"}>
        Increment salary
      </Button>
    </div>
  );
}

export default PatrentComponent;
