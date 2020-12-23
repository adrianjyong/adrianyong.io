import React from "react"
import { Box } from '@chakra-ui/core'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { SocialIcons } from "../components/social"

const IndexPage = () => (
  <Layout>
    <SEO title="about me" />
     
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <p>I am an engineer in the world of software, currently located in Montréal, Canada.</p>
    <h6>(Je parle aussi le Français)</h6>
    <p>On the side I dabble in writing, cooking, fashion, music, photography and gaming.</p>

    <Box>
      Currently:
    </Box>
    <Box>
      Web Analytics Developer at <a href="https://www.makeitbloom.com/">Bloom Digital Marketing</a>
      Contributing writer at <a href="https://jttbblog.com/?author=5e28955828786a6ce0a136e9">JTTB Blog</a>
    </Box>
    <br />

    <Box>
      Previously:
    </Box>
    <Box>
      Support Operations Engineer at <a href="https://www.behavox.com/">Behavox</a>
    </Box>
    <Box>
      Junior Support Engineer at <a href="https://www.behavox.com/">Behavox</a>
    </Box>
    <br />
    <SocialIcons />


  </Layout>
)

export default IndexPage
