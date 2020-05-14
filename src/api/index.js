import axios from "axios";

const url = "https://e6miwjcdy4.execute-api.eu-west-1.amazonaws.com/dev";

export const fetchData = async () => {
  try {
    const {
      data: { body },
    } = await axios.get(url);
    return body;
  } catch (error) {
    console.log(error);
  }
};

export const fetchProgramPoint = async (program, point) => {
  const programUrl = `${url}?program_id=${program}&point=${point}`;
  try {
    const {
      data: { body },
    } = await axios.get(programUrl);
    return body;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPrograms = async () => {
  try {
    const {
      data: { body },
    } = await axios.get(url);
    return [...new Set(body.map((item) => item.program_id))];
  } catch (error) {
    console.log(error);
  }
};

export const fetchPoints = async () => {
  try {
    const {
      data: { body },
    } = await axios.get(url);
    return [...new Set(body.map((item) => item.point))];
  } catch (error) {
    console.log(error);
  }
};
