import React from "react"
import styled from "styled-components"
import { mq } from "../../../utils/mediaQueries"

// -----------------------------------------------------------------------------
// Sub-components
// -----------------------------------------------------------------------------

const Layout = styled.div`
  cursor: pointer;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Canvas = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.easternBlue};
  box-shadow: 0px 1px 5px 0px #969696;
`

const Image = styled.img`
  max-width: 300px;
  ${mq(`mediumUp`)} {
    max-width: none;
  }
`

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const Preview = ({ setActivePreview, activePreview, activeFolder }) => {
  return (
    <Layout onClick={() => setActivePreview(false)}>
      <Canvas>
        {activeFolder.type === `images` ? (
          <Image alt={activePreview} src={activePreview} />
        ) : (
          <video width="320" height="240" controls>
            <source src={activePreview} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </Canvas>
    </Layout>
  )
}

export default Preview
