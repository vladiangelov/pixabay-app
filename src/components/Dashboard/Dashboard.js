import axios from "axios"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { mq } from "../../utils/mediaQueries"
import Folders from "./Folders"
import PaginationNav from "./PaginationNav"
import Preview from "./Preview"
import ResultsTable from "./ResultsTable"

// -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------

const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY
const FOLDERS = [
  { query: `clouds`, type: `images` },
  { query: `cars`, type: `images` },
  { query: `urban`, type: `images` },
  { query: `drinks`, type: `video` },
]

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

const buildUrl = (activeFolder, page) => {
  const { query, type } = activeFolder
  const isVideo = type === `video` ? `/videos` : ``

  return `https://pixabay.com/api/${isVideo}?key=${API_KEY}&q=${query}&per_page=50&page=${page}`
}

async function getPhotos(activeFolder, page, setData, setIsLoading) {
  try {
    const response = await axios.get(buildUrl(activeFolder, page))
    setData(response.data.hits)
    setIsLoading(() => false)
  } catch (error) {
    // TODO: Show error message to the user and log error to a service
  }
}

// -----------------------------------------------------------------------------
// Sub-components
// -----------------------------------------------------------------------------

const Layout = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  width: 375px;
  margin: 10px auto;
  ${mq(`mediumUp`)} {
    width: 600px;
  }

  ${mq(`largeUp`)} {
    width: 800px;
  }
`

const Fileview = styled.div`
  margin: 0;
  padding: 20px;
`

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const Dashboard = () => {
  const [data, setData] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [activeFolder, setActiveFolder] = useState(FOLDERS[0])
  const [activePreview, setActivePreview] = useState(false)
  const [activePage, setActivePage] = useState(1)

  useEffect(() => {
    setIsLoading(() => true)
    getPhotos(activeFolder, activePage, setData, setIsLoading)
  }, [activeFolder, activePage])
  return (
    <Layout>
      <Folders
        folders={FOLDERS}
        activeFolder={activeFolder}
        setActiveFolder={setActiveFolder}
        setActivePage={setActivePage}
      />
      {isLoading ? (
        // TODO: Add a proper component (i.e. a Spinner)
        <Fileview>
          <div>Data is being loaded...</div>
        </Fileview>
      ) : (
        <Fileview>
          <PaginationNav
            activePage={activePage}
            setActivePage={setActivePage}
          />
          <ResultsTable
            data={data}
            isLoading={isLoading}
            setActivePreview={setActivePreview}
            activeFolder={activeFolder}
          />
        </Fileview>
      )}
      {activePreview && (
        <Preview
          setActivePreview={setActivePreview}
          activePreview={activePreview}
          activeFolder={activeFolder}
        />
      )}
    </Layout>
  )
}

export default Dashboard
