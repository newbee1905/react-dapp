import {
  Link,
} from "react-router-dom";

function Home() {
  return (
    <div p="x-[2rem] y-[1rem]" >
      <h2>H</h2>
			<Link to="about">Test</Link>
    </div>
  );
}

export default Home;