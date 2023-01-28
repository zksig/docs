import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function PrivacyPolicy() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title} - Privacy Policy`}
      description="zkSig Privacy Policy"
    >
      <main>
        <h1>Coming soon...</h1>
      </main>
    </Layout>
  );
}
