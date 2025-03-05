import React from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <>
      <motion.section
        className="px-6 pt-20 py-10 lg:px-60 text-gray-700 bg-[radial-gradient(circle_at_left,#FDE7E1_20%,#FFF9EC_30%,#FFFFFF_60%)]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.article
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Terms & <span className="text-blue-500">Conditions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            By accessing or using the services provided by Cloud Sparrow
            Technology, you agree to comply with and be bound by these Terms and
            Conditions. Please read them carefully before using our website or
            services
          </motion.p>

          {[
            {
              title: "1. Services Provided",
              content:
                "Cloud Sparrow Technology provides digital solutions, including website development, mobile app development, and other related services. We may update or change the services offered at any time without prior notice.",
            },
            {
              title: "2. User Responsibilities",
              list: [
                "You agree to use our services only for lawful purposes and in accordance with applicable laws.",
                "You agree not to engage in any activity that could harm our systems, networks, or services.",
                "You must provide accurate, current, and complete information when using our services.",
              ],
            },
            {
              title: "3. Intellectual Property",
              content:
                "All content, including text, images, logos, and software, provided on our website or services, is the property of Cloud Sparrow Technology or its licensors. You may not use, copy, or distribute any content without express permission.",
            },
            {
              title: "4. Payment and Billing",
              list: [
                "Services provided may be subject to charges, as detailed in your agreement.",
                "You agree to pay all fees for services rendered. Payment terms will be outlined in your contract.",
              ],
            },
            {
              title: "5. Limitation of Liability",
              content:
                "To the maximum extent permitted by law, Cloud Sparrow Technology will not be liable for any indirect, incidental, or consequential damages arising out of the use of our services.",
            },
            {
              title: "6. Termination",
              content:
                "We may suspend or terminate your access to our services at any time if you violate these Terms and Conditions.",
            },
            {
              title: "7. Changes to Terms",
              content:
                "We reserve the right to modify or update these Terms and Conditions at any time. Any changes will be posted on this page, and the revised version will become effective immediately.",
            },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold">{section.title}</h2>
              {section.content && <p>{section.content}</p>}
              {section.list && (
                <ul className="list-disc pl-5">
                  {section.list.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 + 0.1 }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.article>
      </motion.section>

      <motion.section
        className="px-6 py-10 lg:px-60 text-gray-700 bg-[radial-gradient(circle_at_right,#FDE7E1_20%,#FFF9EC_30%,#FFFFFF_60%)]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.article
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Privacy <span className="text-blue-500">Policy</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            At Cloud Sparrow Technology, we take your privacy seriously. This
            Privacy Policy outlines how we collect, use, store, and protect your
            personal information when you visit our website or use our services.
          </motion.p>

          {[
            {
              title: "1. Information We Collect",
              content: [
                <p key="personal">
                  <strong>Personal Information:</strong> We collect personal
                  information, such as name, email address, phone number, billing
                  information, and other details you provide when using our services.
                </p>,
                <p key="usage">
                  <strong>Usage Data:</strong> We may collect information on how our
                  website and services are accessed and used, including IP addresses,
                  browser types, and pages viewed.
                </p>,
              ],
            },
            {
              title: "2. How We Use Your Information",
              list: [
                "Provide and improve our services.",
                "Communicate with you regarding updates or promotions.",
                "Process transactions and manage your account.",
                "Ensure the security of our website and services.",
              ],
            },
            {
              title: "3. Data Security",
              content:
                "We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, or disclosure.",
            },
            {
              title: "4. Sharing of Your Information",
              content:
                "We do not share or sell your personal information to third parties, except as required by law or when necessary to deliver our services, such as working with trusted service providers who help us operate our website.",
            },
            {
              title: "5. Cookies",
              content:
                "We use cookies and similar technologies to track site activity, improve user experience, and personalize content. You may disable cookies through your browser settings.",
            },
            {
              title: "6. Your Rights",
              list: ["Access, update, or delete your data.", "Opt out of marketing communications at any time."],
            },
            {
              title: "7. Changes to This Policy",
              content: [
                "We may update this Privacy Policy from time to time. When we do, we will post the updated version on our website.",
                <p key="contact">
                  For any questions or concerns regarding this Privacy Policy, please contact us at:{" "}
                  <a href="mailto:info@cloudsparrowtechnology.com" className="text-[#407BFF] underline">
                    info@cloudsparrowtechnology.com
                  </a>
                </p>,
              ],
            },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold">{section.title}</h3>
              {Array.isArray(section.content) ? section.content.map((item, i) => <p key={i}>{item}</p>) : <p>{section.content}</p>}
              {section.list && (
                <ul className="list-disc pl-5">
                  {section.list.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 + 0.1 }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.article>
      </motion.section>

      <motion.section
        className="px-6 py-10 lg:px-60 text-gray-700 bg-[radial-gradient(circle_at_left,#FDE7E1_20%,#FFF9EC_30%,#FFFFFF_60%)]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.article
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Refund <span className="text-blue-500">Policy</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            At Cloud Sparrow Technology, we aim to ensure the satisfaction of our clients with the services provided.
            However, due to the nature of digital services, we have a strict refund policy.
          </motion.p>

          {[
            {
              title: "1. Eligibility for Refund",
              list: [
                "Refunds are available only if services were not provided as per the contract or agreed specifications.",
                "In cases of dispute or dissatisfaction, we will review your case and determine if a refund or compensation is warranted.",
              ],
            },
            {
              title: "2. Non-Refundable Services",
              content:
                "Certain services, such as custom website development or app design, are non-refundable once work has started or is delivered. This includes any work that has been completed and delivered to the client.",
            },
            {
              title: "3. Requesting a Refund",
              content: (
                <p>
                  To request a refund, please contact us at{" "}
                  <a href="mailto:info@cloudsparrowtechnology.com" className="text-[#407BFF] underline">
                    info@cloudsparrowtechnology.com
                  </a>
                  . Provide a detailed explanation of the issue, including why you believe a refund is necessary.
                </p>
              ),
            },
            {
              title: "4. Refund Process",
              content:
                "If you are eligible for a refund, we will process the refund after the approval of the request. Refunds will be issued via the original payment method.",
            },
            {
              title: "5. Dispute",
              content:
                "If you feel the service was not provided in accordance with the agreed terms, we will work with you to resolve the issue. If a resolution cannot be reached, you may be entitled to a partial refund based on the completed work.",
            },
            {
              title: "6. Changes to This Policy",
              content: [
                "We reserve the right to amend or update this Refund Policy at any time. The updated version will be posted on our website.",
                <p key="contact">
                  For any refund-related inquiries, please contact us at:{" "}
                  <a href="mailto:info@cloudsparrowtechnology.com" className="text-[#407BFF] underline">
                    info@cloudsparrowtechnology.com
                  </a>
                </p>,
              ],
            },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold">{section.title}</h3>
              {Array.isArray(section.content) ? section.content.map((item, i) => <p key={i}>{item}</p>) : <p>{section.content}</p>}
              {section.list && (
                <ul className="list-disc pl-5">
                  {section.list.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 + 0.1 }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.article>
      </motion.section>
    </>
  );
};

export default TermsAndConditions;