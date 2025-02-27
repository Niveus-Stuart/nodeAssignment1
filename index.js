const message = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, Thank you for reading this message...");
    }, 1000);
  });
};

message()
  .then((message) => console.log(message))
  .catch((err) => console.log(err));

const fs = require("fs").promises;

const createAFile = async () => {
  try {
    await fs.writeFile(
      "sampleFile.txt",
      "This is a sample file with some random message."
    );
    console.log("file created successfully");
  } catch (error) {
    console.log("something went wrong ", error);
  }
};

createAFile();
