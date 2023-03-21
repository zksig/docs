import React from "react";
import mixpanel from "mixpanel-browser";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

if (process.env.NODE_ENV === "production") {
  mixpanel.init("eec85d062d86fd7d20d2d8d5d20bf578");
  mixpanel.track("Privacy Policy View");
}

const Bullet = ({ children, number, title }) => {
  return (
    <div className="mb-10 flex justify-between">
      <span className="w-1/12">
        <b>{number}.</b>
      </span>
      <div className="flex w-11/12 flex-col">
        <h4 className="mb-4">
          <b>{title}</b>
        </h4>
        {children}
      </div>
    </div>
  );
};

const SubBullet = ({ children, subtitle, subNumber }) => {
  return (
    <div className="mb-6 flex">
      {!!subNumber && <p className="mr-8">{subNumber}.</p>}
      <div>
        <span className="mr-4 mb-2 inline-block">
          <b>{subtitle}</b>
        </span>
        {children}
      </div>
    </div>
  );
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-2/3 flex-col items-center p-20">
        <div className="mb-10">
          <div className="text-center font-semibold">
            ZKSIG, INC. PRIVACY POLICY
          </div>
        </div>

        <p className="mb-6 w-full text-start">
          zkSig, Inc. (the “Company”) is committed to maintaining robust privacy
          protections for its users.  Our Privacy Policy (“Privacy Policy”) is
          designed to help you understand how we collect, use and safeguard the
          information you provide to us and to assist you in making informed
          decisions when using our Service.
        </p>

        <p className="mb-6 w-full text-start">
          For purposes of this Agreement, “Site” refers to the Company’s
          website, which can be accessed at https://www.zksig.io.
        </p>

        <p className="mb-6 w-full text-start">
          “Service” refers to the Company’s services accessed via the Site, in
          which users can create, modify, sign, and share digital agreements or
          documents.
        </p>

        <p className="mb-6 w-full text-start">
          The terms “we,” “us,” and “our” refer to the Company.
        </p>

        <p className="mb-6 w-full text-start">
          “You” refers to you, as a user of our Site or our Service.
        </p>

        <p className="mb-12 w-full text-start">
          By accessing our Site or our Service, you accept our Privacy Policy
          and Terms of Use (available on https://www.zksig.io), and you consent
          to our collection, storage, use and disclosure of your Personal
          Information as described in this Privacy Policy.
        </p>

        <Bullet number="I" title="INFORMATION WE COLLECT">
          <span className="mb-4 inline-block">
            We collect “Non-Personal Information” and “Personal Information.”{" "}
            <b>Non-Personal Information</b> includes information that cannot be
            used to personally identify you, such as anonymous usage data,
            general demographic information we may collect, referring/exit pages
            and URLs, platform types, preferences you submit and preferences
            that are generated based on the data you submit and number of
            clicks. <b>Personal Information</b> includes your name and email,
            which you submit to us through the registration process at the Site.
          </span>
          <SubBullet
            subNumber="1"
            subtitle="Information collected via Technology"
          >
            <span className="mb-4 inline-block">
              To activate the Service you do not need to submit any Personal
              Information other than your email address. To use the Service
              thereafter, you do not need to submit further Personal
              Information. However, in an effort to improve the quality of the
              Service, we may track information provided to us by your browser
              or by our software application when you view or use the Service,
              such as the website you came from (known as the “referring URL”),
              the type of browser you use, the device from which you connected
              to the Service, the time and date of access, and other information
              that does not personally identify you. We track this information
              using cookies, or small text files which include an anonymous
              unique identifier. Cookies are sent to a user’s browser from our
              servers and are stored on the user’s computer hard drive. Sending
              a cookie to a user’s browser enables us to collect Non-Personal
              information about that user and keep a record of the user’s
              preferences when utilizing our services, both on an individual and
              aggregate basis. For example, the Company may use cookies to track
              the amount of time spent on different pages of our website.
            </span>
            <span className="mb-4 inline-block">
              The Company may use both persistent and session cookies;
              persistent cookies remain on your computer after you close your
              session and until you delete them, while session cookies expire
              when you close your browser.
            </span>
          </SubBullet>
          <SubBullet
            subNumber="2"
            subtitle="Information you provide us by registering for an account"
          >
            <span className="mb-4 inline-block">
              In addition to the information provided automatically by your
              browser when you visit the Site, to become a subscriber to the
              Service you will need to create a personal profile. You can create
              a profile by registering with the Service and entering your email
              address. By registering, you are authorizing us to collect, store
              and use your email address in accordance with this Privacy Policy.
            </span>
          </SubBullet>
          <SubBullet subNumber="3" subtitle="Children’s Privacy">
            <span className=" inline-block">
              The Site and the Service are not directed to anyone under the age
              of 13. The Site does not knowingly collect or solicit information
              from anyone under the age of 13, or allow anyone under the age of
              13 to sign up for the Service. In the event that we learn that we
              have gathered personal information from anyone under the age of 13
              without the consent of a parent or guardian, we will delete that
              information as soon as possible. If you believe we have collected
              such information, please contact us at hello@zksig.io.
            </span>
          </SubBullet>
        </Bullet>

        <Bullet number="II" title="HOW WE USE AND SHARE INFORMATION">
          <SubBullet subNumber="" subtitle="Personal Information">
            <span className="mb-4 inline-block">
              Except as otherwise stated in this Privacy Policy, we do not sell,
              trade, rent or otherwise share for marketing purposes your
              Personal Information with third parties without your consent. We
              may share Personal Information with vendors who are performing
              services for the Company, such as the servers for our email
              communications who are provided access to user’s email address for
              purposes of sending emails from us. Those vendors use your
              Personal Information only at our direction and in accordance with
              our Privacy Policy.
            </span>
            <span className="mb-4 inline-block">
              In general, the Personal Information you provide to us is used to
              help us communicate with you. For example, we use Personal
              Information to contact users in response to questions, solicit
              feedback from users, provide technical support, and inform users
              about promotional offers.
            </span>
            <span className="inline-block">
              We may share Personal Information with outside parties if we have
              a good-faith belief that access, use, preservation or disclosure
              of the information is reasonably necessary to meet any applicable
              legal process or enforceable governmental request; to enforce
              applicable Terms of Service, including investigation of potential
              violations; address fraud, security or technical concerns; or to
              protect against harm to the rights, property, or safety of our
              users or the public as required or permitted by law.
            </span>
          </SubBullet>
          <SubBullet subNumber="" subtitle="Non-Personal Information">
            <span className="mb-4 inline-block">
              In general, we use Non-Personal Information to help us improve the
              Service and customize the user experience. We also aggregate
              Non-Personal Information in order to track trends and analyze use
              patterns on the Site. This Privacy Policy does not limit in any
              way our use or disclosure of Non-Personal Information and we
              reserve the right to use and disclose such Non-Personal
              Information to our partners, advertisers and other third parties
              at our discretion.
            </span>
            <span className="inline-block">
              In the event we undergo a business transaction such as a merger,
              acquisition by another company, or sale of all or a portion of our
              assets, your Personal Information may be among the assets
              transferred. You acknowledge and consent that such transfers may
              occur and are permitted by this Privacy Policy, and that any
              acquirer of our assets may continue to process your Personal
              Information as set forth in this Privacy Policy. If our
              information practices change at any time in the future, we will
              post the policy changes to the Site so that you may opt out of the
              new information practices. We suggest that you check the Site
              periodically if you are concerned about how your information is
              used.
            </span>
          </SubBullet>
        </Bullet>

        <Bullet number="III" title="HOW WE PROTECT INFORMATION">
          <span className="inline-block">
            We implement security measures designed to protect your information
            from unauthorized access. Your account is protected by your account
            password and we urge you to take steps to keep your personal
            information safe by not disclosing your password and by logging out
            of your account after each use. We further protect your information
            from potential security breaches by implementing certain
            technological security measures including encryption, firewalls and
            secure socket layer technology. However, these measures do not
            guarantee that your information will not be accessed, disclosed,
            altered or destroyed by breach of such firewalls and secure server
            software. By using our Service, you acknowledge that you understand
            and agree to assume these risks.
          </span>
        </Bullet>

        <Bullet
          number="IV"
          title="YOUR RIGHTS REGARDING THE USE OF YOUR PERSONAL INFORMATION"
        >
          <span className="inline-block">
            You have the right at any time to prevent us from contacting you for
            marketing purposes.  When we send a promotional communication to a
            user, the user can opt out of further promotional communications by
            following the unsubscribe instructions provided in each promotional
            e-mail. Please note that notwithstanding the promotional preferences
            you indicate by either unsubscribing, we may continue to send you
            administrative emails including, for example, periodic updates to
            our Privacy Policy.
          </span>
        </Bullet>

        <Bullet number="V" title="LINKS TO OTHER WEBSITES">
          <span className="inline-block">
            As part of the Service, we may provide links to or compatibility
            with other websites or applications. However, we are not responsible
            for the privacy practices employed by those websites or the
            information or content they contain. This Privacy Policy applies
            solely to information collected by us through the Site and the
            Service. Therefore, this Privacy Policy does not apply to your use
            of a third party website accessed by selecting a link on our Site or
            via our Service. To the extent that you access or use the Service
            through or on another website or application, then the privacy
            policy of that other website or application will apply to your
            access or use of that site or application. We encourage our users to
            read the privacy statements of other websites before proceeding to
            use them.
          </span>
        </Bullet>

        <Bullet number="VI" title="CHANGES TO OUR PRIVACY POLICY">
          <span className="inline-block">
            The Company reserves the right to change this policy and our Terms
            of Service at any time.  We will notify you of significant changes
            to our Privacy Policy by sending a notice to the primary email
            address specified in your account or by placing a prominent notice
            on our site. Significant changes will go into effect 30 days
            following such notification. Non-material changes or clarifications
            will take effect immediately. You should periodically check the Site
            and this privacy page for updates.
          </span>
        </Bullet>

        <Bullet number="VII" title="CONTACT US">
          <span className="mb-4 inline-block">
            If you have any questions regarding this Privacy Policy or the
            practices of this Site, please contact us by sending an email to
            hello@zksig.io.
          </span>
          <span className="inline-block">
            Last Updated: This Privacy Policy was last updated on 24 Feb, 2023.
          </span>
        </Bullet>
      </main>
      <Footer />
    </>
  );
}
