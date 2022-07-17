import * as React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
// import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    {/* <Seo title="404: Not found" /> */}
    <div style={{ display: `flex`, flexDirection: `column` }}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
      <button onClick={() => navigate(`/`) }>Go Home</button>
    </div>
  </Layout>
)

export default NotFoundPage
