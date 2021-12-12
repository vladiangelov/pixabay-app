import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { getFaIcons, getImageDate } from "../../../utils/general"

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

const extractResolutionFromVideo = (videos) => {
  if (videos?.large?.url === ``) {
    return `n/a`
  }
  return `${videos?.large?.width} x ${videos?.large?.height}`
}

const renderItems = (data, setActivePreview, activeFolder) => {
  return data.map(
    ({
      id,
      type,
      pageURL,
      imageHeight,
      imageWidth,
      webformatURL,
      videos,
      userImageURL,
      previewURL,
    }) => {
      const previewPicture =
        activeFolder.type === `video` ? videos?.small?.url : webformatURL

      const resolution =
        activeFolder.type === `video`
          ? extractResolutionFromVideo(videos)
          : `${imageWidth} x ${imageHeight}`

      const fileName = pageURL.split(`/`).slice(-2)
      return (
        <TableRow key={id} onClick={() => setActivePreview(previewPicture)}>
          <CustomTd>
            <i class={getFaIcons(type)}></i> {fileName}
          </CustomTd>
          <CustomTd>{resolution}</CustomTd>
          <CustomTd>{getImageDate(userImageURL)}</CustomTd>
        </TableRow>
      )
    }
  )
}

// -----------------------------------------------------------------------------
// Sub-components
// -----------------------------------------------------------------------------

const Layout = styled.table`
  width: 100%;
`

const TableRow = styled.tr`
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.easternBlue};
  }
  background-color: ${({ theme }) => theme.colors.whiteSmoke};
  border-bottom: 3px solid ${({ theme }) => theme.colors.white};
  margin: 2px 0px;
`

const TableHeader = styled.th`
  text-align: left;
  background-color: ${({ theme }) => theme.colors.whiteSmoke};
  border-bottom: 6px solid ${({ theme }) => theme.colors.white};
  padding: 6px 4px;
  color: ${({ theme }) => theme.colors.easternBlue};
`

const CustomTd = styled.td`
  padding: 2px 4px;
`

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const ResultsTable = ({ data, isLoading, setActivePreview, activeFolder }) => {
  return (
    <Layout>
      <thead>
        <tr>
          <TableHeader>Filename</TableHeader>
          <TableHeader>Resolution</TableHeader>
          <TableHeader>Date</TableHeader>
        </tr>
      </thead>
      <tbody>
        {data &&
          !isLoading &&
          renderItems(data, setActivePreview, activeFolder)}
      </tbody>
    </Layout>
  )
}

ResultsTable.defaultProps = {
  data: [],
}

ResultsTable.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  setActivePreview: PropTypes.func.isRequired,
  activeFolder: PropTypes.object.isRequired,
}

export default ResultsTable
