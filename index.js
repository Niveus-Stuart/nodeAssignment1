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
