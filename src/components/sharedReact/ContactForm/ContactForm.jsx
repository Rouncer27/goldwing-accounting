import { useState } from "react";

import handleErrorModalClose from "./functions/handleErrorModalClose.js";
import handleSuccessModalClose from "./functions/handleSuccessModalClose.js";
import handleOnChange from "./functions/handleOnChange.js";
import submitForm from "./functions/submitForm.js";

import ErrorModal from "./Modals/ErrorModal";
import SubmitModal from "./Modals/SubmitModal";
import SuccessModal from "./Modals/SuccessModal";

import Input from "./Components/Input/Input.jsx";
import Textarea from "./Components/Textarea/Textarea.jsx";

import "./contactForm.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    yourEmail: "",
    phone: "",
    comments: "",
    _wpcf7_unit_tag: "wpcf7-f546-948",
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    captachError: false,
    validationFailedError: false,
    timeOutError: false,
    unknownError: false,
    errors: [],
  });

  return (
    <div className="contact-form">
      <form
        className="contact-form-fields"
        onSubmit={(event) =>
          submitForm(event, setFormStatus, formStatus, setFormData, formData)
        }
      >
        <fieldset>
          <Input
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.firstName}
            label="First Name"
            id="firstName"
            type="text"
            size="half"
            placeholder="First Name"
            required={true}
            error={formStatus.errors.find(
              (error) => error.idref === "firstName",
            )}
          />
          <Input
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.lastName}
            label="Last Name"
            id="lastName"
            type="text"
            size="half"
            placeholder="Last Name"
            required={true}
            error={formStatus.errors.find(
              (error) => error.idref === "lastName",
            )}
          />
          <Input
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.phone}
            label="Phone Number"
            id="phone"
            type="text"
            size="half"
            placeholder="Phone Number"
            required={true}
            error={formStatus.errors.find((error) => error.idref === "phone")}
          />
          <Input
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.yourEmail}
            label="Email"
            id="yourEmail"
            type="email"
            size="half"
            placeholder="Email"
            required={true}
            error={formStatus.errors.find(
              (error) => error.idref === "yourEmail",
            )}
          />
          <Textarea
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.comments}
            label="Comments"
            id="comments"
            size="full"
            placeholder="Comments"
            required={true}
            rows="10"
            error={formStatus.errors.find(
              (error) => error.idref === "comments",
            )}
          />
        </fieldset>
        <div className="contact-form-fields-button">
          <button type="submit">Submit</button>
        </div>
      </form>
      {formStatus.submitting && <SubmitModal />}
      {formStatus.success && (
        <SuccessModal
          handleSuccessModalClose={() =>
            handleSuccessModalClose(setFormStatus, formStatus, setFormData)
          }
        />
      )}
      {formStatus.errorWarnDisplay && (
        <ErrorModal
          handleErrorModalClose={() =>
            handleErrorModalClose(setFormStatus, formStatus)
          }
          errorMessages={formStatus.errors}
          validationFailedError={formStatus.validationFailedError}
          timeOutError={formStatus.timeOutError}
          unknownError={formStatus.unknownError}
        />
      )}
    </div>
  );
};

export default ContactForm;
