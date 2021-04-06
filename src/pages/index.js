import * as React from "react"
import { Layout, SEO } from "../components"
import { FaLinkedin } from "react-icons/fa"
import { MdEmail, MdLocalPhone } from "react-icons/md"
import { IoMdDocument } from "react-icons/io"
import resume from "../assets/resume.pdf"

const IndexPage = () => (
  <Layout>
    <SEO title="Troy Johnson" />
    <h1>Troy Johnson</h1>
    <h2>Software Engineer</h2>
    <main>
      <div className="flex flex-row items-center" id="resume">
        <IoMdDocument className="mr-2" />
        <a href={resume} target="_blank">
          Resume
        </a>
      </div>
      <div className="flex flex-row items-center" id="linkedin">
        <FaLinkedin className="mr-2" />
        <a href="https://www.linkedin.com/in/troy-johnson57/" alt="LinkedIn">
          troy-johnson57
        </a>
      </div>
      <div className="flex flex-row items-center" id="email">
        <MdEmail className="mr-2" />
        <a href="mailto:troy.johnson57@gmail.com">troy.johnson57@gmail.com</a>
      </div>
      <div className="flex flex-row items-center" id="phone">
        <MdLocalPhone className="mr-2" />
        (801) 913-4614
      </div>
    </main>
  </Layout>
)

export default IndexPage
