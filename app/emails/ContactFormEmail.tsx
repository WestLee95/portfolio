
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
      <Body style={{ fontFamily: "sans-serif", backgroundColor: "#f4f4f5", padding: "20px" }}>
        <Container style={{ backgroundColor: "#ffffff", padding: "24px", borderRadius: "8px" }}>
          <Heading style={{ color: "#111827", fontSize: "20px", marginBottom: "12px" }}>
            New {contactService ? contactService.toUpperCase() : "GENERAL"} Inquiry
          </Heading>
          <Hr style={{ borderColor: "#e5e7eb", margin: "16px 0" }} />
          <Text style={{ fontSize: "14px", color: "#374151" }}>
            <strong>Sender Name:</strong> {name}
          </Text>
          <Text style={{ fontSize: "14px", color: "#374151" }}>
            <strong>Reply Email:</strong> {email}
          </Text>
          <Text style={{ fontSize: "14px", color: "#374151" }}>
            <strong>Service Selected:</strong> {contactService}
          </Text>
          <Text style={{ fontSize: "14px", fontWeight: "bold", marginTop: "16px", color: "#111827" }}>
            Project Details:
          </Text>
          <Text style={{ fontSize: "14px", color: "#4b5563", whiteSpace: "pre-wrap" }}>
            {details}
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;







