import {
  Link,
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Trang</h2>
      <Link to="about">Test</Link>
    </div>
  );
}

export default Home;