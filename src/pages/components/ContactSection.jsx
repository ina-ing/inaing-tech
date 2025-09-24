import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../theme/color/ColorTheme";
import ContactImg from "../../assets/images/impact.avif";
import SideHeading from "../../components/heading/SideHeading";
import ArrowButton from "../../components/button/ArrowButton";

const Wrapper = styled.div`
  max-width: 100%;
  background-color: ${colors.primaryBase};
  padding: 20px 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
  padding: 0px 20px;
  display: flex;
  gap: 40px;
  overflow: hidden;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

const ContactForm = styled.div`
  padding-top: 60px;
  width: 100%;
  flex: 1;
  min-width: 0;

  @media (max-width: 800px) {
    padding-top: 0px;
  }
`;

const Image = styled.img`
  flex: 1;
  width: 100%;
  height: auto;
  max-width: 530px;
  max-height: 700px;
  border-radius: 32px;
  object-fit: cover;
  overflow: hidden;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  min-width: 0;
  padding: 14px;
  border-radius: 12px;
  outline: none;
  font-size: 16px;
  color: #333;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  caret-color: ${colors.white};

  &:focus {
    border-color: ${colors.white};
  }

  &::placeholder {
    color: ${colors.white};
  }
`;

const Select = styled.select`
  flex: 1;
  padding: 14px 40px 14px 16px;
  border-radius: 12px;
  outline: none;
  font-size: 16px;
  color: #fff;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  caret-color: ${colors.white};
  background-image: url("data:image/svg+xml,%3Csvg fill='white' height='18' viewBox='0 0 20 20' width='18' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.516 7.548l4.484 4.452 4.484-4.452L15.48 9 10 14.452 4.52 9z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 20px 20px;

  &:hover {
    border-color: ${colors.primaryBase};
  }

  &:focus {
    border-color: ${colors.primaryDark};
    box-shadow: 0 0 0 2px rgba(20, 20, 20, 0.05);
  }
`;

const TextArea = styled.textarea`
  width: inherit;
  padding: 14px 16px;
  color: ${colors.white};
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid transparent;
  resize: vertical;
  min-height: 120px;
  outline: none;
  font-size: 16px;
  line-height: 1.6;
  transition: all 0.3s ease;
  box-sizing: border-box;
  caret-color: ${colors.white};

  &:focus {
    border-color: ${colors.white};
  }

  &::placeholder {
    color: ${colors.white};
  }
`;

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <Wrapper>
      <Container>
        <ContactForm>
          <SideHeading
            subheading={"Contact Us"}
            heading={"Get in touch with our experts team"}
          />
          <Form onSubmit={handleSubmit}>
            {/* Row 1: Name & Email */}
            <Row>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Row>

            {/* Row 2: Service Dropdown */}
            <Select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="web">Web Development</option>
              <option value="app">App Development</option>
              <option value="uiux">UI/UX Design</option>
            </Select>

            {/* Row 3: Budget Dropdown */}
            <Select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            >
              <option value="">Select Budget</option>
              <option value="$1000-$5000">$1000 - $5000</option>
              <option value="$5000-$10000">$5000 - $10000</option>
              <option value="$10000+">$10000+</option>
            </Select>

            {/* Row 4: Message */}
            <TextArea
              name="message"
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <ArrowButton text={"Submit your Form"} variant="secondary" />
          </Form>
        </ContactForm>

        <Image src={ContactImg} alt="contact image" />
      </Container>
    </Wrapper>
  );
}

export default ContactSection;
