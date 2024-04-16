export const getDownloads = async (packageName: string) => {
  console.log({ packageName });

  const data = await fetch(
    `http://localhost:3000/api/html/${packageName}`
  ).then((res) => res.json());

  return data;
};
