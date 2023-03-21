import React, { cloneElement } from "react";
import mixpanel from "mixpanel-browser";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

if (process.env.NODE_ENV === "production") {
  mixpanel.init("eec85d062d86fd7d20d2d8d5d20bf578");
  mixpanel.track("Terms of Use View");
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
        {children?.length
          ? children?.map((child) => cloneElement(child, { number }))
          : cloneElement(children, { number })}
      </div>
    </div>
  );
};

const SubBullet = ({ children, number, subtitle, subNumber }) => {
  return (
    <div className="mb-6 flex">
      <p className="mr-8">
        {number}.{subNumber}
      </p>
      <div>
        <span className="mr-4">
          <b>{subtitle}</b>
        </span>
        {children}
      </div>
    </div>
  );
};

const Clause = ({ letter, clauseTitle, children }) => {
  return (
    <div className="mb-4 flex">
      <p className="mx-8">({letter})</p>
      <div>
        {!!clauseTitle && (
          <span className="mr-4">
            <b>{clauseTitle}</b>
          </span>
        )}
        {children}
      </div>
    </div>
  );
};

export default function TermsOfUse() {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-2/3 flex-col items-center p-20">
        <div className="mb-10">
          <div className="text-center font-semibold">WEBSITE TERMS OF USE</div>
          <div className="text-center font-semibold">VERSION 1.0</div>
          <div className="text-center font-semibold">
            LAST REVISED ON: 24 FEB, 2023
          </div>
        </div>

        <p className="mb-6">
          The website located at www.zksig.io (the <b>“Site”</b>) is a
          copyrighted work belonging to ZKSIG, INC. (<b>“Company”</b>,
          <b>“us”</b>, <b>“our”</b>, and <b>“we”</b>). Certain features of the
          Site may be subject to additional guidelines, terms, or rules, which
          will be posted on the Site in connection with such features. All such
          additional terms, guidelines, and rules are incorporated by reference
          into these Terms.
        </p>

        <p className="mb-6">
          THESE TERMS OF USE (THESE <b>“TERMS”</b>) SET FORTH THE LEGALLY
          BINDING TERMS AND CONDITIONS THAT GOVERN YOUR USE OF THE SITE. BY
          ACCESSING OR USING THE SITE, YOU ARE ACCEPTING THESE TERMS (ON BEHALF
          OF YOURSELF OR THE ENTITY THAT YOU REPRESENT), AND YOU REPRESENT AND
          WARRANT THAT YOU HAVE THE RIGHT, AUTHORITY, AND CAPACITY TO ENTER INTO
          THESE TERMS (ON BEHALF OF YOURSELF OR THE ENTITY THAT YOU REPRESENT).
          YOU MAY NOT ACCESS OR USE THE SITE OR ACCEPT THE TERMS IF YOU ARE NOT
          AT LEAST 18 YEARS OLD. IF YOU DO NOT AGREE WITH ALL OF THE PROVISIONS
          OF THESE TERMS, DO NOT ACCESS AND/OR USE THE SITE.
        </p>

        <p className="mb-6">
          <b>
            PLEASE BE AWARE THAT SECTION 9.2 OF THESE TERMS CONTAINS PROVISIONS
            GOVERNING HOW DISPUTES THAT YOU AND WE HAVE AGAINST EACH OTHER ARE
            RESOLVED, INCLUDING, WITHOUT LIMITATION, ANY DISPUTES THAT AROSE OR
            WERE ASSERTED PRIOR TO THE EFFECTIVE DATE OF YOUR ACCEPTANCE OF
            THESE TERMS. IN PARTICULAR, IT CONTAINS AN ARBITRATION AGREEMENT
            WHICH WILL, WITH LIMITED EXCEPTIONS, REQUIRE DISPUTES BETWEEN US TO
            BE SUBMITTED TO BINDING AND FINAL ARBITRATION. UNLESS YOU OPT OUT OF
            THE ARBITRATION AGREEMENT: (1) YOU WILL ONLY BE PERMITTED TO PURSUE
            DISPUTES OR CLAIMS AND SEEK RELIEF AGAINST US ON AN INDIVIDUAL
            BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS OR
            REPRESENTATIVE ACTION OR PROCEEDING; AND (2) YOU ARE WAIVING YOUR
            RIGHT TO PURSUE DISPUTES OR CLAIMS AND SEEK RELIEF IN A COURT OF LAW
            AND TO HAVE A JURY TRIAL.
          </b>
        </p>

        <Bullet number="1" title="ACCOUNTS">
          <SubBullet subNumber="1" subtitle="Account Creation.">
            <span>
              In order to use certain features of the Site, you must register
              for an account (<b>“Account”</b>) and provide certain information
              about yourself as prompted by the account registration form. You
              represent and warrant that: (a) all required registration
              information you submit is truthful and accurate; (b) you will
              maintain the accuracy of such information. You may delete your
              Account at any time, for any reason, by following the instructions
              on the Site. Company may suspend or terminate your Account in
              accordance with Section 8.{" "}
            </span>
          </SubBullet>

          <SubBullet subNumber="2" subtitle="Account Responsibilities.">
            <span>
              You are responsible for maintaining the confidentiality of your
              Account login information and are fully responsible for all
              activities that occur under your Account. You agree to immediately
              notify Company of any unauthorized use, or suspected unauthorized
              use of your Account or any other breach of security. Company
              cannot and will not be liable for any loss or damage arising from
              your failure to comply with the above requirements.
            </span>
          </SubBullet>
        </Bullet>

        <Bullet number="2" title="ACCESS TO THE SITE">
          <SubBullet subNumber="1" subtitle="License.">
            <span>
              Subject to these Terms, Company grants you a non-transferable,
              non-exclusive, revocable, limited license to use and access the
              Site solely for your own personal, noncommercial use.
            </span>
          </SubBullet>
          <SubBullet subNumber="2" subtitle="Certain Restrictions.">
            <span>
              The rights granted to you in these Terms are subject to the
              following restrictions: (a) you shall not license, sell, rent,
              lease, transfer, assign, distribute, host, or otherwise
              commercially exploit the Site, whether in whole or in part, or any
              content displayed on the Site; (b) you shall not modify, make
              derivative works of, disassemble, reverse compile or reverse
              engineer any part of the Site; (c) you shall not access the Site
              in order to build a similar or competitive website, product, or
              service; and (d) except as expressly stated herein, no part of the
              Site may be copied, reproduced, distributed, republished,
              downloaded, displayed, posted or transmitted in any form or by any
              means. Unless otherwise indicated, any future release, update, or
              other addition to functionality of the Site shall be subject to
              these Terms. All copyright and other proprietary notices on the
              Site (or on any content displayed on the Site) must be retained on
              all copies thereof.
            </span>
          </SubBullet>
          <SubBullet subNumber="3" subtitle="Modification.">
            <span>
              Company reserves the right, at any time, to modify, suspend, or
              discontinue the Site (in whole or in part) with or without notice
              to you. You agree that Company will not be liable to you or to any
              third party for any modification, suspension, or discontinuation
              of the Site or any part thereof.
            </span>
          </SubBullet>
          <SubBullet subNumber="4" subtitle="No Support or Maintenance. ">
            <span>
              You acknowledge and agree that Company will have no obligation to
              provide you with any support or maintenance in connection with the
              Site.
            </span>
          </SubBullet>
          <SubBullet subNumber="5" subtitle="Ownership">
            <span>
              Excluding any User Content that you may provide (defined below),
              you acknowledge that all the intellectual property rights,
              including copyrights, patents, trade marks, and trade secrets, in
              the Site and its content are owned by Company or Company’s
              suppliers. Neither these Terms (nor your access to the Site)
              transfers to you or any third party any rights, title or interest
              in or to such intellectual property rights, except for the limited
              access rights expressly set forth in Section 2.1. Company and its
              suppliers reserve all rights not granted in these Terms. There are
              no implied licenses granted under these Terms.
            </span>
          </SubBullet>
          <SubBullet subNumber="6" subtitle="Feedback.">
            <span>
              If you provide Company with any feedback or suggestions regarding
              the Site (<b>“Feedback”</b>), you hereby assign to Company all
              rights in such Feedback and agree that Company shall have the
              right to use and fully exploit such Feedback and related
              information in any manner it deems appropriate. Company will treat
              any Feedback you provide to Company as non-confidential and
              nonproprietary. You agree that you will not submit to Company any
              information or ideas that you consider to be confidential or
              proprietary.
            </span>
          </SubBullet>
        </Bullet>
        <Bullet number="3" title="USER CONTENT">
          <SubBullet subNumber="1" subtitle="User Content">
            <span>
              <b>“User Content”</b> means any and all information and content
              that a user submits to, or uses with, the Site (e.g., content in
              the user’s profile or postings). You are solely responsible for
              your User Content. You assume all risks associated with use of
              your User Content, including any reliance on its accuracy,
              completeness or usefulness by others, or any disclosure of your
              User Content that personally identifies you or any third party.
              You hereby represent and warrant that your User Content does not
              violate our Acceptable Use Policy (defined in Section 3.3). You
              may not represent or imply to others that your User Content is in
              any way provided, sponsored or endorsed by Company. Since you
              alone are responsible for your User Content, you may expose
              yourself to liability if, for example, your User Content violates
              the Acceptable Use Policy. Company is not obligated to backup any
              User Content, and your User Content may be deleted at any time
              without prior notice. You are solely responsible for creating and
              maintaining your own backup copies of your User Content if you
              desire.
            </span>
          </SubBullet>
          <SubBullet subNumber="2" subtitle="License. ">
            <span>
              You hereby grant (and you represent and warrant that you have the
              right to grant) to Company an irrevocable, nonexclusive,
              royalty-free and fully paid, worldwide license to reproduce,
              distribute, publicly display and perform, prepare derivative works
              of, incorporate into other works, and otherwise use and exploit
              your User Content, and to grant sublicenses of the foregoing
              rights, solely for the purposes of including your User Content in
              the Site. You hereby irrevocably waive (and agree to cause to be
              waived) any claims and assertions of moral rights or attribution
              with respect to your User Content.
            </span>
          </SubBullet>
          <SubBullet subNumber="3" subtitle="Acceptable Use Policy.">
            <span>
              The following terms constitute our <b>“Acceptable Use Policy”</b>:
            </span>
            <Clause clauseTitle="" letter="a">
              <span>
                You agree not to use the Site to collect, upload, transmit,
                display, or distribute any User Content (i) that violates any
                third-party right, including any copyright, trademark, patent,
                trade secret, moral right, privacy right, right of publicity, or
                any other intellectual property or proprietary right, (ii) that
                is unlawful, harassing, abusive, tortious, threatening, harmful,
                invasive of another’s privacy, vulgar, defamatory, false,
                intentionally misleading, trade libelous, pornographic, obscene,
                patently offensive, promotes racism, bigotry, hatred, or
                physical harm of any kind against any group or individual or is
                otherwise objectionable, (iii) that is harmful to minors in any
                way, or (iv) that is in violation of any law, regulation, or
                obligations or restrictions imposed by any third party.
              </span>
            </Clause>
            <Clause clauseTitle="" letter="b">
              <span>
                In addition, you agree not to: (i) upload, transmit, or
                distribute to or through the Site any computer viruses, worms,
                or any software intended to damage or alter a computer system or
                data; (ii) send through the Site unsolicited or unauthorized
                advertising, promotional materials, junk mail, spam, chain
                letters, pyramid schemes, or any other form of duplicative or
                unsolicited messages, whether commercial or otherwise; (iii) use
                the Site to harvest, collect, gather or assemble information or
                data regarding other users, including e-mail addresses, without
                their consent; (iv) interfere with, disrupt, or create an undue
                burden on servers or networks connected to the Site, or violate
                the regulations, policies or procedures of such networks; (v)
                attempt to gain unauthorized access to the Site (or to other
                computer systems or networks connected to or used together with
                the Site), whether through password mining or any other means;
                (vi) harass or interfere with any other user’s use and enjoyment
                of the Site; or (vi) use software or automated agents or scripts
                to produce multiple accounts on the Site, or to generate
                automated searches, requests, or queries to (or to strip,
                scrape, or mine data from) the Site (provided, however, that we
                conditionally grant to the operators of public search engines
                revocable permission to use spiders to copy materials from the
                Site for the sole purpose of and solely to the extent necessary
                for creating publicly available searchable indices of the
                materials, but not caches or archives of such materials, subject
                to the parameters set forth in our robots.txt file).
              </span>
            </Clause>
          </SubBullet>
          <SubBullet subNumber="4" subtitle="Enforcement.">
            <span>
              We reserve the right (but have no obligation) to review, refuse
              and/or remove any User Content in our sole discretion, and to
              investigate and/or take appropriate action against you in our sole
              discretion if you violate the Acceptable Use Policy or any other
              provision of these Terms or otherwise create liability for us or
              any other person. Such action may include removing or modifying
              your User Content, terminating your Account in accordance with
              Section 8, and/or reporting you to law enforcement authorities.
            </span>
          </SubBullet>
        </Bullet>
        <Bullet number="4" title="INDEMNIFICATION.">
          <span>
            You agree to indemnify and hold Company (and its officers,
            employees, and agents) harmless, including costs and attorneys’
            fees, from any claim or demand made by any third party due to or
            arising out of (a) your use of the Site, (b) your violation of these
            Terms, (c) your violation of applicable laws or regulations or (d)
            your User Content. Company reserves the right, at your expense, to
            assume the exclusive defense and control of any matter for which you
            are required to indemnify us, and you agree to cooperate with our
            defense of these claims. You agree not to settle any matter without
            the prior written consent of Company. Company will use reasonable
            efforts to notify you of any such claim, action or proceeding upon
            becoming aware of it.
          </span>
        </Bullet>
        <Bullet number="5" title="THIRD-PARTY LINKS & ADS; OTHER USERS">
          <SubBullet subNumber="1" subtitle="Third-Party Links & Ads.">
            <span>
              The Site may contain links to third-party websites and services,
              and/ or display advertisements for third parties (collectively,{" "}
              <b>“Third-Party Links & Ads”</b>). Such Third-Party Links & Ads
              are not under the control of Company, and Company is not
              responsible for any Third-Party Links & Ads. Company provides
              access to these Third-Party Links & Ads only as a convenience to
              you, and does not review, approve, monitor, endorse, warrant, or
              make any representations with respect to ThirdParty Links & Ads.
              You use all Third-Party Links & Ads at your own risk, and should
              apply a suitable level of caution and discretion in doing so. When
              you click on any of the Third-Party Links & Ads, the applicable
              third party’s terms and policies apply, including the third
              party’s privacy and data gathering practices. You should make
              whatever investigation you feel necessary or appropriate before
              proceeding with any transaction in connection with such
              Third-Party Links & Ads.
            </span>
          </SubBullet>
          <SubBullet subNumber="2" subtitle="Other Users.">
            <span>
              Each Site user is solely responsible for any and all of its own
              User Content. Since we do not control User Content, you
              acknowledge and agree that we are not responsible for any User
              Content, whether provided by you or by others. We make no
              guarantees regarding the accuracy, currency, suitability,
              appropriateness, or quality of any User Content. Your interactions
              with other Site users are solely between you and such users. You
              agree that Company will not be responsible for any loss or damage
              incurred as the result of any such interactions. If there is a
              dispute between you and any Site user, we are under no obligation
              to become involved.
            </span>
          </SubBullet>
          <SubBullet subNumber="3" subtitle="Release.">
            <span>
              You hereby release and forever discharge the Company (and our
              officers, employees, agents, successors, and assigns) from, and
              hereby waive and relinquish, each and every past, present and
              future dispute, claim, controversy, demand, right, obligation,
              liability, action and cause of action of every kind and nature
              (including personal injuries, death, and property damage), that
              has arisen or arises directly or indirectly out of, or that
              relates directly or indirectly to, the Site (including any
              interactions with, or act or omission of, other Site users or any
              Third-Party Links & Ads). IF YOU ARE A CALIFORNIA RESIDENT, YOU
              HEREBY WAIVE CALIFORNIA CIVIL CODE SECTION 1542 IN CONNECTION WITH
              THE FOREGOING, WHICH STATES: “A GENERAL RELEASE DOES NOT EXTEND TO
              CLAIMS WHICH THE CREDITOR OR RELEASING PARTY DOES NOT KNOW OR
              SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE
              RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY
              AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR OR RELEASED PARTY.”
            </span>
          </SubBullet>
        </Bullet>
        <Bullet number="6" title="DISCLAIMERS">
          <span>
            THE SITE IS PROVIDED ON AN “AS-IS” AND “AS AVAILABLE” BASIS, AND
            COMPANY (AND OUR SUPPLIERS) EXPRESSLY DISCLAIM ANY AND ALL
            WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR
            STATUTORY, INCLUDING ALL WARRANTIES OR CONDITIONS OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET
            ENJOYMENT, ACCURACY, OR NON-INFRINGEMENT. WE (AND OUR SUPPLIERS)
            MAKE NO WARRANTY THAT THE SITE WILL MEET YOUR REQUIREMENTS, WILL BE
            AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS,
            OR WILL BE ACCURATE, RELIABLE, FREE OF VIRUSES OR OTHER HARMFUL
            CODE, COMPLETE, LEGAL, OR SAFE. IF APPLICABLE LAW REQUIRES ANY
            WARRANTIES WITH RESPECT TO THE SITE, ALL SUCH WARRANTIES ARE LIMITED
            IN DURATION TO NINETY (90) DAYS FROM THE DATE OF FIRST USE. SOME
            JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO
            THE ABOVE EXCLUSION MAY NOT APPLY TO YOU. SOME JURISDICTIONS DO NOT
            ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE
            ABOVE LIMITATION MAY NOT APPLY TO YOU.
          </span>
        </Bullet>
        <Bullet number="7" title="LIMITATION ON LIABILITY">
          <span>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL COMPANY
            (OR OUR SUPPLIERS) BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST
            PROFITS, LOST DATA, COSTS OF PROCUREMENT OF SUBSTITUTE PRODUCTS, OR
            ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR
            PUNITIVE DAMAGES ARISING FROM OR RELATING TO THESE TERMS OR YOUR USE
            OF, OR INABILITY TO USE, THE SITE, EVEN IF COMPANY HAS BEEN ADVISED
            OF THE POSSIBILITY OF SUCH DAMAGES. ACCESS TO, AND USE OF, THE SITE
            IS AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY
            RESPONSIBLE FOR ANY DAMAGE TO YOUR DEVICE OR COMPUTER SYSTEM, OR
            LOSS OF DATA RESULTING THEREFROM. TO THE MAXIMUM EXTENT PERMITTED BY
            LAW, NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR
            LIABILITY TO YOU FOR ANY DAMAGES ARISING FROM OR RELATED TO THESE
            TERMS (FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE
            ACTION), WILL AT ALL TIMES BE LIMITED TO A MAXIMUM OF FIFTY US
            DOLLARS (U.S. $50). THE EXISTENCE OF MORE THAN ONE CLAIM WILL NOT
            ENLARGE THIS LIMIT. YOU AGREE THAT OUR SUPPLIERS WILL HAVE NO
            LIABILITY OF ANY KIND ARISING FROM OR RELATING TO THESE TERMS. SOME
            JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY
            FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR
            EXCLUSION MAY NOT APPLY TO YOU.
          </span>
        </Bullet>
        <Bullet number="8" title="TERM AND TERMINATION.">
          <span>
            Subject to this Section, these Terms will remain in full force and
            effect while you use the Site. We may suspend or terminate your
            rights to use the Site (including your Account) at any time for any
            reason at our sole discretion, including for any use of the Site in
            violation of these Terms. Upon termination of your rights under
            these Terms, your Account and right to access and use the Site will
            terminate immediately. You understand that any termination of your
            Account may involve deletion of your User Content associated with
            your Account from our live databases. Company will not have any
            liability whatsoever to you for any termination of your rights under
            these Terms, including for termination of your Account or deletion
            of your User Content. Even after your rights under these Terms are
            terminated, the following provisions of these Terms will remain in
            effect: Sections 2.2 through 2.6, Section 3 and Sections 4 through
            9.
          </span>
        </Bullet>

        <Bullet number="9" title="GENERAL">
          <SubBullet subNumber="1" subtitle="Changes.">
            <span>
              These Terms are subject to occasional revision, and if we make any
              substantial changes, we may notify you by sending you an e-mail to
              the last e-mail address you provided to us (if any), and/or by
              prominently posting notice of the changes on our Site. You are
              responsible for providing us with your most current e-mail
              address. In the event that the last e-mail address that you have
              provided us is not valid, or for any reason is not capable of
              delivering to you the notice described above, our dispatch of the
              email containing such notice will nonetheless constitute effective
              notice of the changes described in the notice. Continued use of
              our Site following notice of such changes shall indicate your
              acknowledgement of such changes and agreement to be bound by the
              terms and conditions of such changes.
            </span>
          </SubBullet>
          <SubBullet subNumber="2" subtitle="Dispute Resolution.">
            <span className="mb-4 inline-block">
              <b>
                <i>
                  Please read this Section 9.2 (sometimes referred to herein as
                  this “Arbitration Agreement”) carefully. It is part of your
                  contract with Company and affects your rights. It contains
                  procedures for MANDATORY BINDING ARBITRATION AND A CLASS
                  ACTION WAIVER.
                </i>
              </b>
            </span>

            <Clause
              clauseTitle="Applicability of Arbitration Agreement. "
              letter="a"
            >
              <span>
                All claims and disputes (excluding claims for injunctive or
                other equitable relief as set forth below) in connection with
                these Terms or the use of any product or service provided by the
                Company that cannot be resolved informally or in small claims
                court shall be resolved by binding arbitration on an individual
                basis under the terms of this Arbitration Agreement. Unless
                otherwise agreed to, all arbitration proceedings shall be held
                in English. This Arbitration Agreement applies to you and the
                Company, and to any subsidiaries, affiliates, agents, employees,
                predecessors in interest, successors, and assigns, as well as
                all authorized or unauthorized users or beneficiaries of
                services or goods provided under these Terms.
              </span>
            </Clause>
            <Clause
              clauseTitle="Notice Requirement and Informal Dispute Resolution"
              letter="b"
            >
              <span>
                Before either party may seek arbitration, the party must first
                send to the other party a written Notice of Dispute (“Notice”)
                describing the nature and basis of the claim or dispute, and the
                requested relief. A Notice to the Company should be sent to: 651
                N Broad St., Suite 201, Middletown, Delaware 19709. After the
                Notice is received, you and the Company may attempt to resolve
                the claim or dispute informally. If you and the Company do not
                resolve the claim or dispute within thirty (30) days after the
                Notice is received, either party may begin an arbitration
                proceeding. The amount of any settlement offer made by any party
                may not be disclosed to the arbitrator until after the
                arbitrator has determined the amount of the award, if any, to
                which either party is entitled.
              </span>
            </Clause>
            <Clause clauseTitle="Arbitration Rules. " letter="c">
              <span>
                The Federal Arbitration Act governs the interpretation and
                enforcement of this Arbitration Agreement. The arbitration will
                be conducted by JAMS, an established alternative dispute
                resolution provider. Disputes involving claims, counterclaims,
                or request for relief under $250,000, not inclusive of
                attorneys’ fees and interest, shall be subject to JAMS’s most
                current version of the Streamlined Arbitration Rules and
                procedures available at
                http://www.jamsadr.com/rulesstreamlined-arbitration/; all other
                disputes shall be subject to JAMS’s most current version of the
                Comprehensive Arbitration Rules and Procedures, available at
                http://www.jamsadr.com/rulescomprehensive-arbitration/. JAMS’s
                rules are also available at www.jamsadr.com or by calling JAMS
                at 800-352-5267. If JAMS is not available to arbitrate, the
                parties will select an alternative arbitral forum. Each party
                shall bear its own costs (including attorney’s fees) and
                disbursements arising out of the arbitration and shall pay an
                equal share of the fees and costs of the ADR Provider.
              </span>
            </Clause>
            <span className="mb-4 inline-block">
              You may choose to have the arbitration conducted by telephone,
              based on written submissions, or in person in the country where
              you live or at another mutually agreed location. Any judgment on
              the award rendered by the arbitrator may be entered in any court
              of competent jurisdiction.
            </span>

            <Clause clauseTitle="Authority of Arbitrator." letter="d">
              <span>
                The arbitrator shall have exclusive authority to (i) determine
                the scope and enforceability of this Arbitration Agreement and
                (ii) resolve any dispute related to the interpretation,
                applicability, enforceability or formation of this Arbitration
                Agreement including, but not limited to, any assertion that all
                or any part of this Arbitration Agreement is void or voidable.
                The arbitration will decide the rights and liabilities, if any,
                of you and Company. The arbitration proceeding will not be
                consolidated with any other matters or joined with any other
                cases or parties. The arbitrator shall have the authority to
                grant motions dispositive of all or part of any claim. The
                arbitrator shall have the authority to award monetary damages
                and to grant any non-monetary remedy or relief available to an
                individual under applicable law, the arbitral forum’s rules, and
                these Terms (including the Arbitration Agreement). The
                arbitrator shall issue a written award and statement of decision
                describing the essential findings and conclusions on which the
                award is based, including the calculation of any damages
                awarded. The arbitrator has the same authority to award relief
                on an individual basis that a judge in a court of law would
                have. The award of the arbitrator is final and binding upon you
                and us.
              </span>
            </Clause>
            <Clause clauseTitle="Waiver of Jury Trial." letter="e">
              <span>
                YOU AND COMPANY HEREBY WAIVE ANY CONSTITUTIONAL AND STATUTORY
                RIGHTS TO SUE IN COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A
                JURY. You and Company are instead electing that all disputes,
                claims, or requests for relief shall be resolved by arbitration
                under this Arbitration Agreement, except as specified in Section
                10.2(a) (Applicability of Arbitration Agreement) above. An
                arbitrator can award on an individual basis the same damages and
                relief as a court and must follow these Terms as a court would.
                However, there is no judge or jury in arbitration, and court
                review of an arbitration award is subject to very limited
                review.
              </span>
            </Clause>
            <Clause
              clauseTitle="Waiver of Class or Other Non-Individualized Relief. "
              letter="f"
            >
              <span>
                ALL DISPUTES, CLAIMS, AND REQUESTS FOR RELIEF WITHIN THE SCOPE
                OF THIS ARBITRATION AGREEMENT MUST BE ARBITRATED ON AN
                INDIVIDUAL BASIS AND NOT ON A CLASS OR COLLECTIVE BASIS, ONLY
                INDIVIDUAL RELIEF IS AVAILABLE, AND CLAIMS OF MORE THAN ONE
                CUSTOMER OR USER CANNOT BE ARBITRATED OR CONSOLIDATED WITH THOSE
                OF ANY OTHER CUSTOMER OR USER. If a decision is issued stating
                that applicable law precludes enforcement of any of this
                section’s limitations as to a given dispute, claim, or request
                for relief, then such aspect must be severed from the
                arbitration and brought into the State or Federal Courts located
                in the State of Delaware. All other disputes, claims, or
                requests for relief shall be arbitrated.
              </span>
            </Clause>
            <Clause clauseTitle="30-Day Right to Opt Out." letter="g">
              <span>
                You have the right to opt out of the provisions of this
                Arbitration Agreement by sending written notice of your decision
                to opt out to: hello@zksig.io, within thirty (30) days after
                first becoming subject to this Arbitration Agreement. Your
                notice must include your name and address, your Company username
                (if any), the email address you used to set up your Company
                account (if you have one), and an unequivocal statement that you
                want to opt out of this Arbitration Agreement. If you opt out of
                this Arbitration Agreement, all other parts of these Terms will
                continue to apply to you. Opting out of this Arbitration
                Agreement has no effect on any other arbitration agreements that
                you may currently have, or may enter in the future, with us.
              </span>
            </Clause>
            <Clause clauseTitle="Severability." letter="h">
              <span>
                Except as provided in Section 9.2(f) (Waiver of Class or Other
                NonIndividualized Relief), if any part or parts of this
                Arbitration Agreement are found under the law to be invalid or
                unenforceable, then such specific part or parts shall be of no
                force and effect and shall be severed and the remainder of the
                Arbitration Agreement shall continue in full force and effect.
              </span>
            </Clause>
            <Clause clauseTitle="Survival of Agreement." letter="i">
              <span>
                This Arbitration Agreement will survive the termination of your
                relationship with Company.
              </span>
            </Clause>
            <Clause clauseTitle="Modification." letter="j">
              <span>
                Notwithstanding any provision in these Terms to the contrary, we
                agree that if Company makes any future material change to this
                Arbitration Agreement, you may reject that change within thirty
                (30) days of such change becoming effective by writing Company
                at the following address: hello@zksig.io.
              </span>
            </Clause>
          </SubBullet>
          <SubBullet subNumber="3" subtitle="Export.">
            <span>
              The Site may be subject to U.S. export control laws and may be
              subject to export or import regulations in other countries. You
              agree not to export, reexport, or transfer, directly or
              indirectly, any U.S. technical data acquired from Company, or any
              products utilizing such data, in violation of the United States
              export laws or regulations.{" "}
            </span>
          </SubBullet>
          <SubBullet subNumber="4" subtitle="Disclosures">
            <span>
              Company is located at the address in Section 10.8. If you are a
              California resident, you may report complaints to the Complaint
              Assistance Unit of the Division of Consumer Product of the
              California Department of Consumer Affairs by contacting them in
              writing at 400 R Street, Sacramento, CA 95814, or by telephone at
              (800) 952-5210.
            </span>
          </SubBullet>
          <SubBullet subNumber="5" subtitle="Electronic Communications. ">
            <span>
              The communications between you and Company use electronic means,
              whether you use the Site or send us emails, or whether Company
              posts notices on the Site or communicates with you via email. For
              contractual purposes, you (a) consent to receive communications
              from Company in an electronic form; and (b) agree that all terms
              and conditions, agreements, notices, disclosures, and other
              communications that Company provides to you electronically satisfy
              any legal requirement that such communications would satisfy if it
              were be in a hardcopy writing. The foregoing does not affect your
              non-waivable rights.
            </span>
          </SubBullet>
          <SubBullet subNumber="6" subtitle="Entire Terms.">
            <span>
              These Terms constitute the entire agreement between you and us
              regarding the use of the Site. Our failure to exercise or enforce
              any right or provision of these Terms shall not operate as a
              waiver of such right or provision. The section titles in these
              Terms are for convenience only and have no legal or contractual
              effect. The word “including” means “including without limitation”.
              If any provision of these Terms is, for any reason, held to be
              invalid or unenforceable, the other provisions of these Terms will
              be unimpaired and the invalid or unenforceable provision will be
              deemed modified so that it is valid and enforceable to the maximum
              extent permitted by law. Your relationship to Company is that of
              an independent contractor, and neither party is an agent or
              partner of the other. These Terms, and your rights and obligations
              herein, may not be assigned, subcontracted, delegated, or
              otherwise transferred by you without Company’s prior written
              consent, and any attempted assignment, subcontract, delegation, or
              transfer in violation of the foregoing will be null and void.
              Company may freely assign these Terms. The terms and conditions
              set forth in these Terms shall be binding upon assignees.{" "}
            </span>
          </SubBullet>
          <SubBullet subNumber="7" subtitle="Copyright/Trademark Information.">
            <span>
              Copyright © 2023 ZKSIG, INC. All rights reserved. All trademarks,
              logos and service marks (“Marks”) displayed on the Site are our
              property or the property of other third parties. You are not
              permitted to use these Marks without our prior written consent or
              the consent of such third party which may own the Marks.
            </span>
          </SubBullet>
          <SubBullet subNumber="8" subtitle="Contact Information:">
            <div>ZKSIG, INC</div>
            <div>Address:</div>
            <div>651 N Broad St., Suite 201</div>
            <div>Middletown, Delaware 19709</div>
            <div>Telephone: (646) 477-7287</div>
            <div>Email: hello@zksig.io</div>
          </SubBullet>
        </Bullet>
      </main>
      <Footer />
    </>
  );
}
