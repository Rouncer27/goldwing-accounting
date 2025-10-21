import axios from "axios";

export const handler = async function (req, context) {
  const FORM_POST_URL = `https://goldwing.swbdatabases3.com/wp-json/contact-form-7/v1/contact-forms/7/feedback`;
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const formData = JSON.parse(req.body);

  const formDataArray = Object.entries(formData);
  const bodyFormData = new FormData();
  formDataArray.forEach((field) => {
    bodyFormData.append(field[0], field[1]);
  });

  // Just a test to see if the timeout is working //
  // await new Promise((resolve) => setTimeout(resolve, 15000));

  const response = await axios.post(FORM_POST_URL, bodyFormData, config);
  console.log("Good-Bye Trevor!!");
  return {
    statusCode: response.status,
    body: JSON.stringify({
      data: response.data,
    }),
  };
};
