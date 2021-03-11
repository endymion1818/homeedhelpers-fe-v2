import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import HandwritingPractice from '../components/HandwritingPractice/HandwritingPractice'

const Index = () => {
    const lineStyle = "test"
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
        <div className="container">
          <h1>Handwriting practice paper</h1>
            <p>Make full-page custom handwriting worksheets in seconds!</p>
            <ol className="instructions">
                <li>Select a writing style: <i>Primary (d'nealian)</i> or <i>cursive</i></li>
                <li>Type your handwriting worksheet content and test how you want it to appear</li>
                <li>Select your letter size</li>
                <li>Click <i>Print</i> for a copy of your writing worksheet for immediate use
                </li>
            </ol>
            <p id="sorrynotresponsive" data-nosnippet>Sorry! You'll need to use a device with a larger screen for this to work.</p>
          <HandwritingPractice />
          <h2>Frequently asked questions</h2>
          <ol className="instructions">
              <li>
                  <strong>What is this?</strong>
                  <i>This is a tool to help teachers and home educators give their students and children custom handwriting worksheets learn how to write.</i>
              </li>
              <li>
                  <strong>How do I use it?</strong>
                  <i>Enter the text you want your student or child to write into the text box provided. Click the "print" button, and your printer dialog will appear. We have configured the print version to contain an area for the student to write their name and the date on the printed sheet.</i>
              </li>
              <li>
                  <strong>Is there a charge for this service?</strong>
                  <i>No. This service is provided free of charge. We hope to make it pay for itself by the use of advertising in the future.</i>
              </li>
              <li>
                  <strong>How do I contact you?</strong>
                  <i>You can email homeedhelpers@gmail.com to send feature suggestions and bug reports. We will read your email but cannot guarantee a response.</i>
              </li>
          </ol>
        </div>
        <style jsx>{`
          .instructions {
            padding-inline-start: 20px;
          }
          .instructions > li {
              line-height: 1.5;
              margin-bottom: 5px;
          }
          #sorrynotresponsive {
            display: none;
          }
          @media (max-width: 550px) {
              #sorrynotresponsive {
                  display: block;
              }
          }
          @media print {
            .container {
              visibility: hidden;
            }
          }
        `}
        </style>
      </Layout>
  )
}
export default Index