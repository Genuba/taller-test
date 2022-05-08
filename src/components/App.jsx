import React, { useState, useEffect } from "react";
import Title from "./Title";
import Icons from "./Icons";

const App = () => {
  const [state, setState] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [image, setImage] = useState("");

  const handleChange = (key) => {
    var e = userInfo[key];
    var requestAdapter = {
      name: {
        key: "My name is",
        value: e.title + ". " + e.first + " " + e.last,
      },
      email: {
        key: "My email address is",
        value: e,
      },
      dob: {
        key: "My birth is",
        value: e.date,
      },
      location: {
        key: "My address is",
        value: e.country + " " + e.state,
      },
      cell: {
        key: "My phone is",
        value: e,
      },
      login: {
        key: "My password is",
        value: e.password,
      },
    };

    setState({
      identifier: requestAdapter[key].key,
      value: requestAdapter[key].value,
    });
  };

  useEffect(() => {
    fetch(" https://randomuser.me/api/")
      .then((res) => res.json())
      .then((json) => {
        setUserInfo(json.results[0]);
        setImage(json.results[0].picture.large);
        setState({
          identifier: "My name is",
          value:
            json.results[0].name.title +
            ". " +
            json.results[0].name.first +
            " " +
            json.results[0].name.last,
        });
      });
  }, []);

  return (
    <>
      <Title identifier={state.identifier} value={state.value} image={image} />
      <Icons state={userInfo} handleChange={handleChange} />
    </>
  );
};

export default App;
