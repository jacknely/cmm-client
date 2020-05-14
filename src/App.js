import React from "react";

import { Chart, Selector } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";
import measurementImage from "./image/image.png";

class App extends React.Component {
  state = {
    data: [],
    program: "",
    point: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleProgramChange = async (program) => {
    const fetchedData = await fetchData();
    const data = [
      ...fetchedData.filter((item) => item.program_id === program),
    ];
    this.setState({ data, program });
  };

  handlePointChange = async (point) => {
    const fetchedData = await fetchData();
    const data = [...fetchedData.filter((item) => item.point === point)];
    this.setState({ data, point });
  };

  render() {
    const { data, point } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={measurementImage} alt="covid" />
        <Selector
          handleProgramChange={this.handleProgramChange}
          handlePointChange={this.handlePointChange}
        />
        <Chart data={data} point={point} />
      </div>
    );
  }
}

export default App;
