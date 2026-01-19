const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) console.error("error");

    const result = await response.json();

    return result;
  } catch (err) {
    console.log(err);
  }
};

const ApiService = { getUsers };

export default ApiService;
