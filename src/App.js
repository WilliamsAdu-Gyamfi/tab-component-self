import { useState } from "react";

const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const App = function () {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <Tab onSelectTabbed={setActiveTab} />

      {activeTab <= 2 ? <Display activeTab={activeTab} /> : <DifferentTap />}
    </div>
  );
};

const Tab = function ({ onSelectTabbed }) {
  return (
    <div className="tabs">
      <button onClick={() => onSelectTabbed(0)}>Tab 1</button>
      <button onClick={() => onSelectTabbed(1)}>Tab 2</button>
      <button onClick={() => onSelectTabbed(2)}>Tab 3</button>
      <button onClick={() => onSelectTabbed(3)}>Tab 4</button>
    </div>
  );
};

const Display = function ({ activeTab }) {
  const item = content[activeTab];

  return <div>{item && <Message item={item} key={item.summary} />}</div>;
};

const Message = function ({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  const handleHideDetails = function () {
    setShowDetails((h) => !h);
  };

  const handlePlusOnce = function () {
    setLikes((likes) => likes + 1);
  };

  const handlePlusTrice = function () {
    handlePlusOnce();
    handlePlusOnce();
    handlePlusOnce();
  };
  return (
    <div>
      <h1>{item.summary}</h1>
      {showDetails && <p>{item.details}</p>}
      <div>
        <button onClick={handleHideDetails}>
          {showDetails ? "Hide details" : "Show details"}
        </button>
        <button>{likes}❤️</button>
        <span>
          <button onClick={handlePlusOnce}>+</button>
        </span>
        <span>
          <button onClick={handlePlusTrice}>+++</button>
        </span>
        <div>
          <button>Undo</button>
          <span>
            <button>Undo in 2s</button>
          </span>
        </div>
      </div>
    </div>
  );
};

const DifferentTap = function () {
  return (
    <div>
      <h5>CALL TO REGISTER</h5>
    </div>
  );
};

export default App;
