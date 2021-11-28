import shakespear from "shakespeare-data";

const Sonnet = () => {
  let sonnet = shakespear.sonnets.random();
  return <p>{sonnet.lines.slice(0, 10).join(" ")}</p>;
};

export default Sonnet;
