import React from 'react'
import styled from 'styled-components'

export const Privacy = () => {
  return (
    <AboutusContainer>
    <section className='about-container'>
    <div className='aboutus'>
        <div className='about-image'>
            {/* <p>picture</p> */}
            <img src="../images/about_us.jpg" alt="" />
        </div>
        <div className='about-text'>
        <h2>1. Introduction</h2>
            <p>Welcome to <strong>Orientiques</strong>. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application and services, including communications via the Facebook (Meta) WhatsApp API.</p>

            <h2>2. Information We Collect</h2>
            <ul>
                <li><strong>Personal Identification Information:</strong> Name, phone number, and other contact details.</li>
                <li><strong>Message Data:</strong> Any messages sent via WhatsApp through our app for communication purposes.</li>
                <li><strong>Technical Information:</strong> IP address, device type, browser type, and usage details.</li>
                <li><strong>Metadata:</strong> Timestamps, delivery status, and analytics data related to WhatsApp messages.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <ul>
                <li>To send and receive messages via WhatsApp for customer communication.</li>
                <li>To provide customer support and respond to inquiries.</li>
                <li>To enhance user experience and improve our services.</li>
                <li>To analyze and optimize the performance of our WhatsApp API integration.</li>
                <li>To comply with legal obligations and protect against fraudulent activity.</li>
            </ul>

            <h2>4. Data Sharing and Disclosure</h2>
            <p>We do not sell or rent your personal data. However, we may share your data in the following cases:</p>
            <ul>
                <li><strong>With WhatsApp (Meta):</strong> To facilitate communication via the WhatsApp API, as per their data policies.</li>
                <li><strong>With Service Providers:</strong> Third-party vendors who assist in providing and improving our services (e.g., cloud hosting, analytics, customer support tools).</li>
                <li><strong>For Legal Compliance:</strong> When required by law, regulation, or legal process.</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

            <h2>6. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul>
                <li>Access, update, or delete your personal data.</li>
                <li>Withdraw consent for WhatsApp communication at any time.</li>
                <li>Request information about the data we collect and how we process it.</li>
            </ul>
            <p>To exercise these rights, please contact us at <a href="mailto:jason.ortq@gmail.com">jason.ortq@gmail.com</a>.</p>

            <h2>7. Data Retention</h2>
            <p>We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. After this period, data will be securely deleted or anonymized.</p>

            <h2>8. Third-Party Links and Integrations</h2>
            <p>Our app may contain links to third-party websites or services, including WhatsApp. We are not responsible for their privacy policies, and we encourage you to review their terms before using their services.</p>

            <h2>9. Changes to This Privacy Policy</h2>
            <p>We may update this policy from time to time. Any changes will be posted on this page with an updated "Effective Date." Your continued use of our services after any modifications indicates acceptance of the new terms.</p>

            <h2>10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us at:</p>
            <ul>
                <li><strong>Email:</strong> <a href="mailto:jason.ortq@gmail.com">jason.ortq@gmail.com</a></li>
                <li><strong>Address:</strong> 14, Jalan Damansara Permai, 50490Kuala Lumpur.</li>
            </ul>
        </div>
    </div>
    </section>
    </AboutusContainer>
  )
}

const AboutusContainer = styled.nav`

.about-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content:center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 50px;
    padding: 50px;
  }
  
  .aboutus {
    display: flex;
    justify-content: center;
    width: 80%;
  }
  
  .about-text, .about-image {
    width: 50%;
    line-height: 2;
    padding: 10px;
    font-size: 15px;
  }

  .about-image img {
    width: 450px;
    height: 900px;
  }

  @media only screen and (max-width: 760px) {

    .aboutus {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content:center;
        align-items: center;
        width: 100%;
      }

      .about-text, .about-image {
        width: 100%;
      }

`