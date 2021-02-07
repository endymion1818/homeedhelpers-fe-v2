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
        <HandwritingPractice />
      </Layout>
  )
}
export default Index