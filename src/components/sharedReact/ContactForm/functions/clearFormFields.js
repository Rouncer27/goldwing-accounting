const clearFormFields = (setFormData) => {
  setFormData(() => {
    return {
      firstName: "",
      lastName: "",
      yourEmail: "",
      phone: "",
      comments: "",
      _wpcf7_unit_tag: "wpcf7-f546-948",
    };
  });
};

export default clearFormFields;
