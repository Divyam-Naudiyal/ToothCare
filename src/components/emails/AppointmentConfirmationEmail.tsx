import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";



interface AppointmentConfirmationEmailProps {
  doctorName: string;
  appointmentDate: string;
  appointmentTime: string;
  appointmentType: string;
  duration: string;
  price: string;
}

function AppointmentConfirmationEmail({
  doctorName,
  appointmentDate,
  appointmentTime,
  appointmentType,
  duration,
  price,
}: AppointmentConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your dental appointment has been confirmed</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src="/logo.png"
              width="50"
              height="50"
              alt="ToothCare"
              style={logo}
            />
            <Text style={logoText}>ToothCare</Text>
          </Section>

          <Heading style={h1}>Appointment Confirmed! 🦷</Heading>

          <Text style={text}>Hi there,</Text>

          <Text style={text}>
            Your dental appointment has been successfully booked. Here are the details:
          </Text>

          <Section style={appointmentDetails}>
            <Text style={detailLabel}>Doctor</Text>
            <Text style={detailValue}>{doctorName}</Text>

            <Text style={detailLabel}>Appointment Type</Text>
            <Text style={detailValue}>{appointmentType}</Text>

            <Text style={detailLabel}>Date</Text>
            <Text style={detailValue}>{appointmentDate}</Text>

            <Text style={detailLabel}>Time</Text>
            <Text style={detailValue}>{appointmentTime}</Text>

            <Text style={detailLabel}>Duration</Text>
            <Text style={detailValue}>{duration}</Text>

            <Text style={detailLabel}>Cost</Text>
            <Text style={detailValue}>{price}</Text>

            <Text style={detailLabel}>Location</Text>
            <Text style={detailValue}>Dental Center</Text>
          </Section>

          <Text style={text}>
            Please arrive 15 minutes early for your appointment. If you need to reschedule or
            cancel, please contact us at least 24 hours in advance.
          </Text>

          <Section style={buttonContainer}>
            <Link style={button} href={process.env.NEXT_PUBLIC_APP_URL + "/appointments"}>
              View My Appointments
            </Link>
          </Section>

          <Text style={footer}>
            Best regards,
            <br />
            The ToothCare Team
          </Text>

          <Text style={footerText}>
            If you have any questions, please contact us at support@dentwise.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default AppointmentConfirmationEmail;

// 🎨 Softer, Professional Cyberpunk Styles

const main = {
  backgroundColor: "#0d0d18",
  fontFamily:
    '"Orbitron", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  color: "#e5e7eb", // soft white
};

const container = {
  margin: "0 auto",
  padding: "32px 0 48px",
  maxWidth: "600px",
};

const logoContainer = {
  textAlign: "center" as const,
  marginBottom: "28px",
};

const logo = {
  borderRadius: "10px",
  display: "inline-block",
  verticalAlign: "middle",
  boxShadow: "0 0 6px rgba(255, 0, 200, 0.35)", // reduced glow
};

const logoText = {
  fontSize: "22px",
  fontWeight: "800",
  color: "#ff4fd6", // softer pink
  margin: "0",
  display: "inline",
  marginLeft: "10px",
  textShadow: "0 0 4px rgba(255, 0, 200, 0.45)", // subtle glow
  letterSpacing: "0.8px",
};

const h1 = {
  color: "#4df2ff", // softer cyan
  fontSize: "26px",
  fontWeight: "900",
  textAlign: "center" as const,
  margin: "26px 0",
  textShadow: "0 0 6px rgba(77, 242, 255, 0.35)",
  letterSpacing: "0.8px",
};

const text = {
  color: "#d1d5db",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "16px 0",
};

const appointmentDetails = {
  backgroundColor: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255, 0, 200, 0.5)",
  borderRadius: "12px",
  padding: "22px",
  margin: "24px 0",
  boxShadow: "0 0 10px rgba(255, 0, 200, 0.25)", // much softer
};

const detailLabel = {
  color: "#4df2ff",
  fontSize: "13px",
  fontWeight: "600",
  margin: "8px 0 3px 0",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
};

const detailValue = {
  color: "#ffffff",
  fontSize: "17px",
  fontWeight: "700",
  margin: "0 0 14px 0",
};

const buttonContainer = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const button = {
  background: "linear-gradient(90deg, #ff3ad1, #33eaff)", // softer gradient
  borderRadius: "10px",
  color: "#0c0c1d",
  fontSize: "15px",
  fontWeight: "700",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 26px",
  boxShadow: "0 0 8px rgba(255, 58, 209, 0.4), 0 0 8px rgba(51, 234, 255, 0.4)", // reduced
  letterSpacing: "0.4px",
};

const footer = {
  color: "#e5e7eb",
  fontSize: "14px",
  lineHeight: "22px",
  margin: "32px 0 14px 0",
  textAlign: "center" as const,
};

const footerText = {
  color: "#9ca3af",
  fontSize: "12px",
  lineHeight: "20px",
  margin: "14px 0 0 0",
  textAlign: "center" as const,
};
