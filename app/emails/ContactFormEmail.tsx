import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Hr,
  Preview,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  details: string;
  contactService: string;
}

export const ContactEmail = ({
  name,
  email,
  details,
  contactService,
}: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Inquiry from {name}</Preview>
      <Body style={{ fontFamily: "sans-serif", backgroundColor: "#021013", padding: "20px" }}>
        <Container style={{ backgroundColor: "#062c33", padding: "24px", borderRadius: "12px", border: "1px solid #0d4b56" }}>
          <Heading style={{ color: "#ffffff", fontSize: "20px", marginBottom: "12px" }}>
            New {contactService ? contactService.toUpperCase() : "GENERAL"} Inquiry
          </Heading>
          <Hr style={{ borderColor: "#0d4b56", margin: "16px 0" }} />
          <Text style={{ fontSize: "14px", color: "#e0f2fe" }}>
            <strong>Sender Name:</strong> {name}
          </Text>
          <Text style={{ fontSize: "14px", color: "#e0f2fe" }}>
            <strong>Reply Email:</strong> {email}
          </Text>
          <Text style={{ fontSize: "14px", color: "#e0f2fe" }}>
            <strong>Service Selected:</strong> {contactService === "dev" ? "Frontend App Development" : "Social Media & Content Strategy"}
          </Text>
          <Text style={{ fontSize: "14px", fontWeight: "bold", marginTop: "16px", color: "#00e5ff" }}>
            Project Details:
          </Text>
          <Text style={{ fontSize: "14px", color: "#ccfbf1", whiteSpace: "pre-wrap" }}>
            {details}
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;