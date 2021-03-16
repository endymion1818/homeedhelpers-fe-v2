import Link from "next/link";

import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1 className="fancy">
            Home Ed Helpers
          </h1>
          <p className="handle">Tools to help the students of home educating parents (and others too! We're not biased!) progress in their learning!</p>
          <p>Some of these tools are inspired by ones we've used as home ed parents ourselves. We thought we'd collect them all together in one place for your convenience.</p>
          <h2>Tools:</h2>
          <ul>
            <li>
              <Link href="/handwriting-practice-paper">
                <a>Handwriting practice paper &mdash; Make full-page custom handwriting worksheets in seconds!</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
